import { IRequest } from '../interfaces/IReq';
import Category from '../models/category.model';
import SubCategory from '../models/subCategory.model';
import { Request, Response } from 'express';
import User from '../models/user.model';

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
    res.json({message:"callback is arranged"})
  } catch (error) {
    console.log(error);
    res.json({ error: 'An error occurred' });
  }
};
