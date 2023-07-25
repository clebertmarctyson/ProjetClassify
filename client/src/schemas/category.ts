import { z } from "zod";

export const createCategorySchema = z.object({
  id: z.number().optional(),
  name: z.string().nonempty("Name should not be empty"),
});

export const updateCategorySchema = z.object({
  name: z.string().nonempty("Name should not be empty"),
});

export type CreateCategoryType = z.infer<typeof createCategorySchema>;
export type UpdateCategoryType = z.infer<typeof updateCategorySchema>;
