import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().nonempty("Name should not be empty"),
});

export const updateCategorySchema = z.object({
  name: z.string().nonempty("Name should not be empty"),
});

export type CreateCategoryData = z.infer<typeof createCategorySchema>;
export type UpdateCategoryData = z.infer<typeof updateCategorySchema>;
