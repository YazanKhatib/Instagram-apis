import express, { response } from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as BlogsService from "./blogs.service";

const router = express.Router();

// GET: List of blogs
router.get("/", async (req: Request, res: Response) => {
  try {
    const blogs = await BlogsService.listBlogs();
    return res.status(200).json(blogs);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

// GET? A single blog by Id
router.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const blog = await BlogsService.getBlog(id);
    if (blog) {
      return response.status(200).json(blog);
    }
    return res.status(404).json("Blog could not be found!");
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

export { router as blogsRouter };
