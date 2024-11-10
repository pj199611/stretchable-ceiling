import { Request, Response } from 'express';
import User from '../models/user.model';
import Order from '../models/orders.model';
import IOrder from '../interfaces/IOrder';
import { IRequest } from '../interfaces/IReq';
import Client from '../models/clients.model';
import Category from '../models/category.model';
import SubCategory from '../models/subCategory.model';

// User management controllers
export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

export const deleteUser = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const reqId = req.user?._id as unknown as any;

  if (reqId.toString() === id) {
    res.status(400).json({ message: "Can't delete own user" });
    return;
  }

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Orders management controllers
export const getAllOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orders: IOrder[] = await Order.find()
      .populate({ path: 'user', select: '-password' })
      .populate('products.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

export const getOrderById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const order: IOrder | null = await Order.findOne({ _id: req.params.id })
      .populate('user')
      .populate('products.product');

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};

export const changeOrderStatusAndRemarks = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    const { status, remarks } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status, remarks },
      { new: true }
    )
      .populate('user')
      .populate('products.product');

    if (!updatedOrder) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order' });
  }
};

// Clients management controllers
export const getClients = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving clients', error });
  }
};

export const getClientById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) res.status(200).json(client);
    else res.status(404).json({ message: 'Client not found' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving client', error });
  }
};

// Category management controllers
export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, price } = req.body;
    const category = new Category({ name, description, price });
    await category.save();
    res
      .status(201)
      .json({ message: 'Category created successfully', category });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create category', error });
  }
};

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch categories', error });
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) res.status(404).json({ message: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch category', error });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, price } = req.body;
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true }
    );
    if (!category) res.status(404).json({ message: 'Category not found' });
    res
      .status(200)
      .json({ message: 'Category updated successfully', category });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update category', error });
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) res.status(404).json({ message: 'Category not found' });
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete ca¥tegory', error });
  }
};

// Subcategory management controllers
export const createSubCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, categoryIds } = req.body;

    // Ensure all categoryIds exist
    const categories = await Category.find({ _id: { $in: categoryIds } });
    if (categories.length !== categoryIds.length) {
      res.status(404).json({ message: 'One or more categories not found' });
      return;
    }

    // Create subcategory with multiple category IDs
    const subCategory = new SubCategory({
      name,
      description,
      category: categoryIds, // Set as array of category IDs
    });

    await subCategory.save();
    res
      .status(201)
      .json({ message: 'SubCategory created successfully', subCategory });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create subcategory', error });
  }
};

export const updateSubCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, categoryIds } = req.body;

    // If new category IDs are provided, verify that all exist
    if (categoryIds) {
      const categories = await Category.find({ _id: { $in: categoryIds } });
      if (categories.length !== categoryIds.length) {
        res.status(404).json({ message: 'One or more categories not found' });
        return;
      }
    }

    // Update subcategory, setting category as an array of IDs
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      { name, description, category: categoryIds },
      { new: true }
    ).populate('category');

    if (!subCategory) {
      res.status(404).json({ message: 'SubCategory not found' });
      return;
    }
    res
      .status(200)
      .json({ message: 'SubCategory updated successfully', subCategory });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update subcategory', error });
  }
};

export const getSubCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const subCategories = await SubCategory.find().populate('category');
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch subcategories', error });
  }
};

export const getSubCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const subCategory = await SubCategory.findById(req.params.id).populate(
      'category'
    );
    if (!subCategory) {
      res.status(404).json({ message: 'SubCategory not found' });
      return;
    }
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch subcategory', error });
  }
};


export const deleteSubCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subCategory) {
      res.status(404).json({ message: 'SubCategory not found' });
      return;
    }
    res.status(200).json({ message: 'SubCategory deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete subcategory', error });
  }
};