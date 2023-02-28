import { db } from "../src/utils/db.server";

type Blog = {
  title: string;
  body: string;
};

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const getUsers = (): Array<User> => {
  return [
    {
      firstName: "Floyd",
      lastName: "Miles",
      email: "floydmiles@email.com",
      password: "Helloworld12!",
    },
  ];
};

const getBlogs = (): Array<Blog> => {
  return [
    {
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    },
    {
      title: "He was an expert but not in a discipline",
      body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
    },
    {
      title: "Dave watched as the forest burned up on the hill.",
      body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    },
  ];
};

const seed = async () => {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        },
      });
    })
  );

  const user = await db.user.findFirst({
    where: {
      firstName: "floyd",
    },
  });

  await Promise.all(
    getBlogs().map((blog) => {
      return db.blog.create({
        data: {
          title: blog.title,
          body: blog.body,
          authorId: user?.id!,
        },
      });
    })
  );
};

seed();
