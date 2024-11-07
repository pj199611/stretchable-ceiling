import { Request, Response } from 'express';
import User from '../models/user.model';
import Order from '../models/orders.model';
import IOrder from '../interfaces/IOrder';
import { IRequest } from '../interfaces/IReq';
import Client from '../models/clients.model';

// user management controllers
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
  const idToCompare = id.toString();

  if(reqId.toString()===idToCompare){
    res.status(400).json({message:"can't delete own"})
    return;
  }

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


//  orders management controllers
// Get all orders for admins
export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders: IOrder[] = await Order.find().populate({  path: 'user',select: '-password'  }).populate('products.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
//get order by id 

// Get a single order by ID for a specific user
export const getOrderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const order: IOrder | null = await Order.findOne({ _id: req.params.id})
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
//change orderStatus and remarks
export const changeOrderStatusAndRemarks = async (req: IRequest, res: Response): Promise<void> => {
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
    console.log("error",error)
    res.status(500).json({ error: 'Failed to update order' });
  }
};


//clients management controllers
export const getClients = async (req: Request, res: Response): Promise<void> => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving clients', error });
    }
};

export const getClientById = async (req: Request, res: Response): Promise<void> => {
    try {
        const client = await Client.findById(req.params.id);
        if (client) res.status(200).json(client);
        else res.status(404).json({ message: 'Client not found' });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving client', error });
    }
};