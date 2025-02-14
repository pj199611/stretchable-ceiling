import { Request, Response } from 'express';
import Client from '../models/clients.model';
import ClientOrder from '../models/clients.orders';
import IClientOrder from '../interfaces/IClientOrder';
import { IRequest } from '../interfaces/IReq';

export const getClients = async (
  req: IRequest,
  res: Response
): Promise<any> => {
  try {
    const architectId = req.user?._id;
    const clients = await Client.find({ architectId });
    return res.status(200).json(clients);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving clients', error });
  }
};

export const getClientById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) return res.status(200).json(client);
    else return res.status(404).json({ message: 'Client not found' });
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving client', error });
  }
};

export const createClient = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const newClient = new Client(req.body);
    const savedClient = await newClient.save();
    return res.status(201).json(savedClient);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating client', error });
  }
};

export const updateClient = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedClient) return res.status(200).json(updatedClient);
    else return res.status(404).json({ message: 'Client not found' });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating client', error });
  }
};

export const deleteClient = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (deletedClient)
      return res.status(200).json({ message: 'Client deleted successfully' });
    else return res.status(404).json({ message: 'Client not found' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting client', error });
  }
};

// client orders
// Get all orders for a specific architect
export const getAllOrdersForUsers = async (
  req: IRequest,
  res: Response
): Promise<any> => {
  try {
    const clientId = req.params.clientId;
    const orders: IClientOrder[] = await ClientOrder.find({ client: clientId })
      .populate('client')
      .populate('products.product');
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// Get a single order by ID for a specific user
export const getOrderById = async (
  req: IRequest,
  res: Response
): Promise<any> => {
  try {
    const order: IClientOrder | null = await ClientOrder.findOne({
      _id: req.params.id,
    })
      .populate('client')
      .populate('products.product');

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch order' });
  }
};

// Create a new order
export const createOrder = async (
  req: IRequest,
  res: Response
): Promise<any> => {
  try {
    const {
      clientId,
      products,
      totalAmount,
      shippingAddress,
      width,
      height,
      area,
      shape,
      customShape,
    } = req.body;
    const newOrder = new ClientOrder({
      client: clientId,
      products,
      totalAmount,
      shippingAddress,
      width,
      height,
      area,
      shape,
      customShape,
    });

    const savedOrder = await newOrder.save();
    return res.status(201).json(savedOrder);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create order' });
  }
};

// Update an order by ID
export const updateOrder = async (
  req: IRequest,
  res: Response
): Promise<any> => {
  try {
    const {
      clientId,
      products,
      totalAmount,
      shippingAddress,
      width,
      height,
      area,
      shape,
      customShape,
    } = req.body;
    const updatedOrder = await ClientOrder.findByIdAndUpdate(
      req.params.id,
      {
        client: clientId,
        products,
        totalAmount,
        shippingAddress,
        width,
        height,
        area,
        shape,
        customShape,
      },
      {
        new: true,
      }
    )
      .populate('client')
      .populate('products.product');

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(200).json(updatedOrder);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update order' });
  }
};

// Delete an order by ID
export const deleteOrder = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const deletedOrder = await ClientOrder.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    return res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to delete order' });
  }
};
