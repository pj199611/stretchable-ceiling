import { Request, Response } from 'express';
import User from '../models/user.model';
import Order from '../models/orders.model';
import IOrder from '../interfaces/IOrder';
import { IRequest } from '../interfaces/IReq';
import Client from '../models/clients.model';
import Category from '../models/category.model';
import Location from '../models/location.model';
import SubCategory from '../models/subCategory.model';
import RequestCallback from '../models/requestCallback.model';
import mongoose from 'mongoose';

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

export const getUser = async (req: IRequest, res: Response): Promise<void> => {
  const id = req.user?.id;
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
  const { email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { email, password },
      { new: true }
    );
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
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const skip = (page - 1) * limit;
    const categories = await Category.find().skip(skip).limit(limit);

    const totalCategories = await Category.countDocuments();

    res.status(200).json({
      categories,
      pagination: {
        totalCategories,
        currentPage: page,
        totalPages: Math.ceil(totalCategories / limit),
        pageSize: categories.length,
      },
    });
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
    const { name, description, categoryIds, price } = req.body;

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
      category: categoryIds,
      price, // Set as array of category IDs
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
    const { name, description, categoryIds,price } = req.body;
    const { id } = req.params;

    // Trim and validate the ID
    const trimmedId = id.trim();

    if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
      res.status(400).json({ message: 'Invalid SubCategory ID' });
      return;
    }

    // Convert to ObjectId
    const objectId = new mongoose.Types.ObjectId(trimmedId);

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
      objectId,
      { name, description, category: categoryIds,price },
      { new: true }
    ).populate('category');

    if (!subCategory) {
      res.status(404).json({ message: 'SubCategory not found' });
      return;
    }
    res
      .status(200)
      .json({ message: 'SubCategory updated successfully',subCategory });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update subcategory', error });
  }
};

export const getSubCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const skip = (page - 1) * limit;
    const subCategories = await SubCategory.find()
      .populate('category')
      .skip(skip)
      .limit(limit);

    const totalSubCategories = await SubCategory.countDocuments();

    res.status(200).json({
      subCategories,
      pagination: {
        totalSubCategories,
        currentPage: page,
        totalPages: Math.ceil(totalSubCategories / limit),
        pageSize: subCategories.length,
      },
    });
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

export const getSubCategoriesByCategoryId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { categoryId } = req.params;
    const { page = 1, pageSize = 10 } = req.query;

    const pageNumber = parseInt(page as string);
    const limit = parseInt(pageSize as string);
    const skip = (pageNumber - 1) * limit;

    const subCategories = await SubCategory.find({
      category: categoryId,
    })
      .skip(skip)
      .select('-category')
      .limit(limit);

    const totalSubCategories = await SubCategory.countDocuments({
      category: categoryId,
    });

    const pagination = {
      totalSubCategories,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalSubCategories / limit),
      pageSize: limit,
    };

    res.status(200).json({ subCategories, pagination });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subcategories' });
  }
};

export const deleteSubCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    // Trim and validate the ID
    const trimmedId = id.trim();

    if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
      res.status(400).json({ message: 'Invalid SubCategory ID' });
      return;
    }

    // Convert to ObjectId
    const objectId = new mongoose.Types.ObjectId(trimmedId);

    const subCategory = await SubCategory.findByIdAndDelete(objectId);

    if (!subCategory) {
      res.status(404).json({ message: 'SubCategory not found' });
      return;
    }

    res.status(200).json({ message: 'SubCategory deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete subcategory', error });
  }
};

// locations management controller

// Create a new location
export const createLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, location_price, operator } = req.body;

    // Create location instance
    const location = new Location({
      name,
      location_price,
      operator,
    });

    await location.save();
    res.status(201).json(location);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error creating location', details: error.message });
  }
};

// Get all locations
export const getLocations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const locations = (await Location.find()).map((location) => location.name);
    res.status(200).json(locations);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error retrieving locations', details: error.message });
  }
};

export const getLocationById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      res.status(404).json({ error: 'Location not found' });
    }
    res.status(200).json(location);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error retrieving location', details: error.message });
  }
};

export const updateLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, location_price, operator } = req.body;

    const location = await Location.findById(req.params.id);
    if (!location) {
      res.status(404).json({ error: 'Location not found' });
    }

    // Update fields
    if (name) location.name = name;
    if (location_price) location.location_price = location_price;
    if (operator) location.operator = operator;

    await location.save();
    res.status(200).json(location);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error updating location', details: error.message });
  }
};

export const deleteLocation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      res.status(404).json({ error: 'Location not found' });
    }
    res.status(200).json({ message: 'Location deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error deleting location', details: error.message });
  }
};

export const getAllUsersWhoNeedsCallback = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await RequestCallback.find();
    // Respond with the filtered users
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
