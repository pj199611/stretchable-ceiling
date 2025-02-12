import { IRequest } from '../interfaces/IReq';
import Category from '../models/category.model';
import SubCategory from '../models/subCategory.model';
import { Request, Response } from 'express';
import User from '../models/user.model';
import Product from '../models/products.model';
import Location from '../models/location.model';
import RequestCallback from '../models/requestCallback.model';
import mongoose from 'mongoose';

export const getDropdownData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = [];
    const categories = await Category.find();

    for (const category of categories) {
      const subcategories = await SubCategory.find({ category: category._id });
      const categoryData = {
        _id: category._id,
        name: category.name,
        subcategory: subcategories.map((subcategory) => {
          return { name: subcategory.name, id: subcategory._id };
        }),
      };
      result.push(categoryData);
    }
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json({ error: 'An error occurred' });
  }
};

export const requestCallback = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    const { mail, name, phoneNumber, comment } = req.body;
    const requestCallback = new RequestCallback({
      name,
      phoneNumber,
      comment,
      mail,
    });

    const requestedCallbacksEmails=(await RequestCallback.find()).map((d)=>d.mail);


    if (requestedCallbacksEmails.includes(mail)) {
      res.json({ message: 'callback already arranged!' });
      return;
    } else {
      await requestCallback.save();
      res.json({ message: 'callback is arranged' });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: 'An error occurred' });
  }
};

// get all products from wishlist

export const getWishList = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    // Fetch the user by their ID
    const user = await User.findById(req.user?._id).populate('wishlist');

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    }

    // Return the populated wishlist with product details
    res.json({ wishlist: user.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Add product to wishlist
export const addToWishlist = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.user._id);

    if (!user.wishlist.includes(productId)) {
      const product = await Product.findById({ _id: productId });
      console.log('product', product);
      user.wishlist.push(product);
      await user.save();
    }

    res.json({ message: 'Product added to wishlist' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Remove product from wishlist
export const removeFromWishlist = async (
  req: IRequest,
  res: Response
): Promise<any> => {
  try {
    const { productId } = req.query;

    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $pull: { wishlist: productId },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({
      message: 'Product removed from wishlist',
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const clearWishlist = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById(req.user._id);
    user.wishlist = [];
    await user.save();

    res.json({ message: 'wishlist cleared', wishlist: user.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Add product to cart
export const addToCart = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  const session = await mongoose.startSession();

  try {
    const { productId, quantity, length, width } = req.body;
    session.startTransaction();

    const product = await Product.findById(productId).session(session);
    if (!product) {
      await session.abortTransaction();
      res.status(404).json({ error: 'Product not found' });
    }

    const user = await User.findById(req.user._id).session(session);
    if (!user) {
      await session.abortTransaction();
      res.status(404).json({ error: 'User not found' });
    }

    // Find cart item with the same composite key (productId, length, width)
    const cartItem = user.cart.find(
      (item) =>
        item.product.toString() === productId &&
        item.length === length &&
        item.width === width
    );

    let price = null;
    if (product.product_price) {
      price = product.product_price;
    } else {
      const subCategory = await SubCategory.findById(product?.subCategory)
        .lean()
        .session(session);
      if (!subCategory) {
        await session.abortTransaction();
        res.status(404).json({ error: 'Subcategory not found' });
      }
      price = subCategory.price;
    }

    if (cartItem) {
      // Increment quantity if the item exists
      cartItem.quantity = quantity;
    } else {
      // Add a new item to the cart
      user.cart.push({
        product: productId,
        quantity,
        price,
        length,
        width,
        name: product.name,
        imgUrl: product.thumbnail,
      });
    }

    await user.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.json({ message: 'Product added to cart', cart: user.cart });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const removeFromCart = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    const { productId, length, width } = req.body;
    const user = await User.findById(req.user._id);

    // Filter out the item with the matching composite key
    user.cart = user.cart.filter(
      (item) =>
        item.product.toString() !== productId ||
        item.length !== length ||
        item.width !== width
    );

    await user.save();

    res.json({ message: 'Product removed from cart' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const getAllCartItems = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    // Fetch the user by their ID
    const user = await User.findById(req.user._id);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    }

    const populatedUser = await user.populate({
      path: 'cart.product',
      model: 'Product',
    });

    res.json({ cart: populatedUser.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Clear cart
export const clearCart = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById(req.user._id);
    user.cart = [];
    await user.save();

    res.json({ message: 'Cart cleared', cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const calculateEstimatedAmount = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    const { products, locationName } = req.body;
    let totalAmount = 0;
    const location = await Location.findOne({ name: locationName.toLowerCase() });

    for (const item of products) {
      let productPrice;
      const product = await Product.findById(item._id).lean();
      if (product && product.product_price) {
        productPrice = product.product_price;
      } else {
        const subCategory = await SubCategory.findById(
          product?.subCategory
        ).lean();
        productPrice = subCategory ? subCategory.price : 0;
      }

      const area = item.area;

      let itemTotal;
      if (location.operator === 'add') {
        itemTotal = area * (productPrice + location.location_price);
      } else if (location.operator === 'subtract') {
        itemTotal = area * (productPrice - location.location_price);
      }
      totalAmount += itemTotal;
    }

    res.json({ estimatedCost: totalAmount });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};
