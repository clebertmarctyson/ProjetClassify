import { PrismaClient } from "@prisma/client";
import { CreateProjectData, UpdateProjectData } from "../models/project.model";

const prisma = new PrismaClient();

export const createProjectService = ({
  name,
  description,
  githubLink,
  status,
  categoryId,
}: CreateProjectData) => {
  return prisma.project.create({
    data: {
      name,
      description,
      githubLink,
      status,
      category: { connect: { id: categoryId } },
    },
  });
};

export const getAllProjectsService = () => {
  return prisma.project.findMany({
    include: { category: true },
  });
};

export const getProjectByIdService = (id: number) => {
  return prisma.project.findUnique({
    where: { id },
    include: { category: true },
  });
};

export const updateProjectService = (
  id: number,
  { name, description, githubLink, status, categoryId }: UpdateProjectData
) => {
  return prisma.project.update({
    where: { id },
    data: {
      name,
      description,
      githubLink,
      status,
      category: { connect: { id: categoryId } },
    },
    include: { category: true },
  });
};

export const deleteProjectService = (id: number) => {
  return prisma.project.delete({
    where: { id },
  });
};
