import { Request, Response } from 'express';
import Order from '../models/orders.model';
import IOrder from '../interfaces/IOrder';

// Get all orders
export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders: IOrder[] = await Order.find().populate('user').populate('products.product');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// Get a single order by ID
export const getOrderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const order: IOrder | null = await Order.findById(req.params.id).populate('user').populate('products.product');
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
export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user, products, totalAmount, shippingAddress } = req.body;
    const newOrder = new Order({
      user,
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
export const updateOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
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
