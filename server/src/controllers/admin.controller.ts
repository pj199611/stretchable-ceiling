import { Request, Response } from 'express';
import User from '../models/user.model';
import Order from '../models/orders.model';
import IOrder from '../interfaces/IOrder';
import { IRequest } from '../interfaces/IReq';

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
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
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
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};


//  orders

// Get all orders for admins
export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders: IOrder[] = await Order.find().populate('user').populate('products.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

//  admin order routes
export const changeOrderStatus = async (req: IRequest, res: Response): Promise<void> => {
  try {
    const { status,remarks } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status,remarks }, {
      new: true,
    }).populate('user').populate('products.product');

    if (!updatedOrder) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order' });
  }
};