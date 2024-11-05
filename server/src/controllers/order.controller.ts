import { Request, Response } from 'express';
import Order from '../models/orders.model';
import IOrder from '../interfaces/IOrder';
import { IRequest } from '../interfaces/IReq';

// Get all orders for a specific user
export const getAllOrdersForUsers = async (req: IRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const orders: IOrder[] = await Order.find({ user: userId }).populate('user').populate('products.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// Get all orders for admins
export const getAllOrdersForAdmins = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders: IOrder[] = await Order.find().populate('user').populate('products.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};




// Get a single order by ID for a specific user
export const getOrderById = async (req: IRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const order: IOrder | null = await Order.findOne({ _id: req.params.id, user: userId })
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


// Create a new order
export const createOrder = async (req: IRequest, res: Response): Promise<void> => {
  try {
    const { products, totalAmount, shippingAddress } = req.body;
    const newOrder = new Order({
      user: req.user?._id,
      products,
      totalAmount,
      shippingAddress,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// Update an order by ID
export const updateOrder = async (req: IRequest, res: Response): Promise<void> => {
  try {
    const { products, totalAmount, shippingAddress } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { user: req.user?._id, products, totalAmount, shippingAddress }, {
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

// Delete an order by ID
export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order' });
  }
};
