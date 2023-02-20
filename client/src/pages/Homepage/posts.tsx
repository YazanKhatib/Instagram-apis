import * as React from "react";
import { Button } from "../../components";
import { data } from "../data";

export const Posts: React.FC = () => {
  return (
    <section className="m-auto my-20 flex w-4/5 justify-between font-sen">
      <div id="featuredPosts" className="mr-4 w-3/5">
        <h1 className="mb-12 text-4xl font-bold">Featured Posts</h1>
        <div className="border-1 border border-gray border-opacity-10 p-12">
          <img
            className="mb-4 h-[400px] w-full object-cover"
            src="https://images.unsplash.com/photo-1676476461152-8548f28a0777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />

          <h3 className="mb-4 font-medium text-darkGray">
            By <span className="text-purple">Jon Doe</span> | May 23, 2022
          </h3>
          <p className="mb-4 text-2xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="mb-4 text-base font-normal text-gray">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Button text="Read More >" />
        </div>
      </div>

      <div id="allPosts" className="w-2/5">
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-4xl font-bold">All Posts</h1>
          <p className="text-purple">View All</p>
        </div>

        {data?.map(({ author, date, body }) => (
          <div className="cursor-pointer py-10 px-12 hover:bg-lightYellow">
            <h1 className="text-darkGray">
              By <span className="text-purple">{author}</span> | {date}
            </h1>
            <p className="w-3/4 text-2xl font-bold">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
