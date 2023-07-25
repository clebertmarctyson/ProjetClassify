import { PrismaClient } from "@prisma/client";
import {
  CreateCategoryData,
  UpdateCategoryData,
} from "../models/category.model";

const prisma = new PrismaClient();

export const createCategoryService = async ({ name }: CreateCategoryData) => {
  return prisma.category.create({
    data: { name },
  });
};

export const getAllCategoriesService = () => {
  return prisma.category.findMany();
};

export const getCategoryByIdService = (id: number) => {
  return prisma.category.findUnique({
    where: { id },
  });
};

export const updateCategoryService = (
  id: number,
  { name }: UpdateCategoryData
) => {
  return prisma.category.update({
    where: { id },
    data: { name },
  });
};

export const deleteCategoryService = (id: number) => {
  return prisma.category.delete({
    where: { id },
  });
};
