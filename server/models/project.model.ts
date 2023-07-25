import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().nonempty("Name should not be empty"),
  description: z.string().nonempty("Description should not be empty"),
  githubLink: z.string().nonempty("GitHub Link should not be empty"),
  status: z.enum(["ONGOING", "PAUSED", "COMPLETED"]),
  categoryId: z.number().positive("Category ID should be positive"),
});

export const updateProjectSchema = z.object({
  name: z.string().nonempty("Name should not be empty"),
  description: z.string().nonempty("Description should not be empty"),
  githubLink: z.string().nonempty("GitHub Link should not be empty"),
  status: z.enum(["ONGOING", "PAUSED", "COMPLETED"]),
  categoryId: z.number().positive("Category ID should be positive"),
});

export type CreateProjectData = z.infer<typeof createProjectSchema>;
export type UpdateProjectData = z.infer<typeof updateProjectSchema>;
