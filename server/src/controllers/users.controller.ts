import { IRequest } from '../interfaces/IReq';
import Category from '../models/category.model';
import SubCategory from '../models/subCategory.model';
import { Request, Response } from 'express';
import User from '../models/user.model';
import Product from '../models/products.model';


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
    const user = await User.findById(req.user._id);
    user.requestCallback = true;
    await user.save();
    res.json({ message: "callback is arranged" })
  } catch (error) {
    console.log(error);
    res.json({ error: 'An error occurred' });
  }
};



// Add product to wishlist
export const addToWishlist = async (req: IRequest, res: Response): Promise<void> => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.user._id);

    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      await user.save();
    }

    res.json({ message: 'Product added to wishlist', wishlist: user.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Remove product from wishlist
export const removeFromWishlist = async (req: IRequest, res: Response): Promise<void> => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.user._id);

    user.wishlist = user.wishlist.filter(
      (item) => item.toString() !== productId
    );
    await user.save();

    res.json({ message: 'Product removed from wishlist', wishlist: user.wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Add product to cart
export const addToCart = async (req: IRequest, res: Response): Promise<void> => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);

    if (!product) res.status(404).json({ error: 'Product not found' });

    const user = await User.findById(req.user._id);

    const cartItem = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      user.cart.push({
        product: productId,
        quantity,
        price: product.product_price,
      });
    }

    await user.save();

    res.json({ message: 'Product added to cart', cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Remove product from cart
export const removeFromCart = async (req: IRequest, res: Response): Promise<void> => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.user._id);

    user.cart = user.cart.filter((item) => item.product.toString() !== productId);
    await user.save();

    res.json({ message: 'Product removed from cart', cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Clear cart
export const clearCart = async (req: IRequest, res: Response): Promise<void> => {
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
