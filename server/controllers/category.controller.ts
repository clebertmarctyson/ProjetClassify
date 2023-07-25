import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  createCategoryService,
  deleteCategoryService,
  getAllCategoriesService,
  getCategoryByIdService,
  updateCategoryService,
} from "../services/category.service";

import {
  CreateCategoryData,
  UpdateCategoryData,
} from "../models/category.model";

export const createCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { name }: CreateCategoryData = req.body;
    const category = await createCategoryService({ name });
    res.status(201).json(category);
  }
);

export const getAllCategories = asyncHandler(
  async (req: Request, res: Response) => {
    const categories = await getAllCategoriesService();
    res.status(200).json(categories);
  }
);

export const getCategoryById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const category = await getCategoryByIdService(Number(id));

    if (!category) {
      res.status(404);
      throw new Error("Category not found.");
    }
    res.status(200).json(category);
  }
);

export const updateCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name }: UpdateCategoryData = req.body;

    const category = await getCategoryByIdService(Number(id));

    if (!category) {
      res.status(404);
      throw new Error("Category not found.");
    }

    const updatedCategory = await updateCategoryService(Number(id), { name });

    res.status(200).json(updatedCategory);
  }
);

export const deleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const deletedCategory = await deleteCategoryService(Number(id));

    res.status(200).json(deletedCategory);
  }
);
