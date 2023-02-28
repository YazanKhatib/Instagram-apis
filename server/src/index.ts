import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { blogsRouter } from "./blogs/blogs.router";

dotenv.config();

if (!process.env.port) {
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export {};
