import express, { Express } from "express";
import { errorHandler } from "./middlewares/error.middleware";
import { router as categoryRoutes } from "./routes/category.router";
import { router as projectRoutes } from "./routes/project.router";

const app: Express = express();
const port: number = Number.parseInt(process.env.PORT!) || 8000;
const nodeEnv: string = process.env.NODE_ENV!;

// Middleware
app.use(express.json());

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/projects", projectRoutes);

// Error Handler Middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(
    `🚀[Server] Server is running ${
      nodeEnv ? `on http://localhost:${port}` : ``
    } ...`
  );
});
