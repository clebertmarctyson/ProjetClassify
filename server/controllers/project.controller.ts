import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import {
  createProjectService,
  deleteProjectService,
  getAllProjectsService,
  getProjectByIdService,
  updateProjectService,
} from "../services/project.service";
import { CreateProjectData, UpdateProjectData } from "../models/project.model";

export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      name,
      description,
      githubLink,
      status,
      categoryId,
    }: CreateProjectData = req.body;
    const project = await createProjectService({
      name,
      description,
      githubLink,
      status,
      categoryId,
    });
    res.status(201).json(project);
  }
);

export const getAllProjects = asyncHandler(
  async (req: Request, res: Response) => {
    const projects = await getAllProjectsService();
    res.status(200).json(projects);
  }
);

export const getProjectById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const project = await getProjectByIdService(Number(id));

    if (!project) {
      res.status(404);
      throw new Error("Project not found.");
    }

    res.status(200).json(project);
  }
);

export const updateProject = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const project = await getProjectByIdService(Number(id));

    if (!project) {
      res.status(400);
      throw new Error("Project not found.");
    }

    const {
      name,
      description,
      githubLink,
      status,
      categoryId,
    }: UpdateProjectData = req.body;

    const updatedProject = await updateProjectService(project.id, {
      name: name ? name : project.name,
      description: description ? description : project.description,
      githubLink: githubLink ? githubLink : project.githubLink,
      status: status ? status : project.status,
      categoryId: categoryId ? categoryId : project.categoryId,
    });

    res.status(200).json(updatedProject);
  }
);

export const deleteProject = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteProjectService(Number(id));
    res.status(204).end();
  }
);
