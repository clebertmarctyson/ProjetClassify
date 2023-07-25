import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

interface ErrorResponse {
  message: string;
  stack: string | null;
}

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
};

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) => {
  let message: string | null = null;

  if (error instanceof ZodError) {
    res.status(400);
    message = error.issues.at(0)?.message!;
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    res.status(400);
    message = error.message;
  } else {
    message = error.message;
  }

  res.status(res.statusCode !== 200 ? res.statusCode : 500).json({
    message,
    stack: process.env.NODE_ENV !== "development" ? null : error.stack!,
  });
};
