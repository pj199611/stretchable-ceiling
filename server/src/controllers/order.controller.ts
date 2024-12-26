import { Request, Response } from 'express';
import Order from '../models/orders.model';
import IOrder from '../interfaces/IOrder';
import { IRequest } from '../interfaces/IReq';
import Location from '../models/location.model';

export const getAllOrdersForUsers = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?._id;
    console.log("userId:", userId);

    const orders: IOrder[] = await Order.find({ user: userId })
      .populate('user')
      .populate('products.product');

    console.log("Orders fetched:", orders);
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};


// Get a single order by ID for a specific user
export const getOrderById = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?._id;
    const order: IOrder | null = await Order.findOne({
      _id: req.params.id,
      user: userId,
    })
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
export const createOrder = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    // location {operator , price}
    const {
      products,
      shippingAddress,
      area,
    } = req.body;
    const newOrder = new Order({
      user: req.user?._id,
      products,
      shippingAddress,
      area,
    });

    const location = await Location.find({ name: shippingAddress.city });
    console.log("lcoation", location[0])
    const total_Amount = await newOrder.calculateTotalAmount(location[0] as unknown as any);
    console.log(total_Amount)
    newOrder.totalAmount = total_Amount;

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.log("error", error)
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// Update an order by ID
export const updateOrder = async (
  req: IRequest,
  res: Response
): Promise<void> => {
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
    const updatedOrder = await Order.findByIdAndUpdate(
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

// Delete an order by ID
export const deleteOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
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


export const createCustomizedOrder = async (
  req: IRequest,
  res: Response
): Promise<void> => {
  try {
    console.log("Req.body:", req.body);

    // Extract the image paths from the uploaded files
    const imagePaths = (req.files as Express.Multer.File[]).map((file) => file.path);

    // Parse stockPhotoIds from the request body
    const stockPhotoIds = JSON.parse(req.body.stockPhotoIds || "[]"); // Default to an empty array if undefined
    const customizedUrls = JSON.parse(req.body.customizedUrls || "[]"); // Default to an empty array if undefined

    console.log("stockPhotoIds:", stockPhotoIds);

    const newOrder = new Order({
      shippingAddress: req.body.shippingAddress,
      user: req.user?._id,
      remarks: req.body.remarks,
      products: [
        {
          customizedUrls: customizedUrls,
          stockPhotoIds: stockPhotoIds,
          imageUrls: imagePaths,
          quantity: req.body.quantity || 1
        },
      ],
    });

    // Set the customization flag based on stockPhotoIds or imageUrls
    if (stockPhotoIds.length > 0 || imagePaths.length > 0) {
      newOrder.isCustomized = true;
    }

    console.log("newOrder:", newOrder);

    // Save the order to the database
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error creating customized order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

