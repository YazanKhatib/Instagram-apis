import { db } from "../utils/db.server";

type Blog = {
  id: number;
  title: string;
  body: string;
  authorId?: number;
};

export const listBlogs = async (): Promise<Blog[]> => {
  return db.blog.findMany({
    select: {
      id: true,
      title: true,
      body: true,
    },
  });
};

export const getBlog = async (id: number): Promise<Blog | null> => {
  return db.blog.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      body: true,
    },
  });
};

export const createBlog = async (blog: Omit<Blog, "id">): Promise<Blog> => {
  const { title, body, authorId } = blog;
  return db.blog.create({
    data: {
      title,
      body,
      authorId,
    },
    select: {
      id: true,
      title: true,
      body: true,
    },
  });
};

export const deleteBlog = async (): Promise<void> => {};

export const updateBlog = async (): Promise<void> => {};
