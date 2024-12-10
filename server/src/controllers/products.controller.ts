import { Request, Response } from 'express';
import Product from '../models/products.model';
import IProduct from '../interfaces/IProduct';
import Order from '../models/orders.model';

export const getAllProductsClass = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find();
    const productsClass = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].class) {
        productsClass.push(products[i].class);
      }
    }

    res.json(productsClass);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getProductsOfOneClass = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find();
    const productsClass = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].class === req.params.id) {
        productsClass.push(products[i]);
      }
    }
    res.json(productsClass);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const skip = (page - 1) * limit;
    const products: IProduct[] = await Product.find().skip(skip).limit(limit);

    const totalProducts = await Product.countDocuments();

    res.status(200).json({
      products,
      pagination: {
        totalProducts,
        currentPage: page,
        totalPages: Math.ceil(totalProducts / limit),
        pageSize: products.length,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product: IProduct | null = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Check if an image was uploaded
    if (!req.file) {
      res.status(400).json({ error: 'Image is required' });
      return;
    }

    // Create new product with image URL from Cloudinary
    const newProduct: IProduct = new Product({
      ...req.body,
      imageUrl: req.file.path, //cloudinary image path and saving in db
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    // Remove the deleted product from all orders
    await Order.updateMany(
      { 'products.product': req.params.id },
      { $pull: { products: { product: req.params.id } } }
    );

    res.status(200).json({
      message: 'Product deleted successfully and removed from all orders',
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

export const getProductsByCategoryAndSubCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { categoryId, subCategoryId } = req.query;

  try {
    if (!categoryId || !subCategoryId) {
      res
        .status(400)
        .json({ message: 'Category ID and SubCategory ID are required' });
      return;
    }

    const products = await Product.find({
      category: categoryId,
      subCategory: subCategoryId,
    });

    if (products.length === 0) {
      res.status(404).json({
        message: 'No products found for this category and subcategory',
      });
      return;
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error });
  }
};
