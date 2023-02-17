import * as react from "react";
import { Button } from "../../components";
import { data } from "../data";

export const Homepage: React.FC = () => {
  return (
    <>
      <section className="m-auto mt-40 flex w-4/5 justify-between font-sen">
        <div
          id="featuredPosts"
          className="border-1 mr-12 w-[50%] border border-gray border-opacity-10 p-12"
        >
          <h1 className="mb-20 text-5xl font-bold">Featured Posts</h1>
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

        <div id="allPosts" className="w-2/5">
          <div className="mb-20 flex items-center justify-between">
            <h1 className="text-5xl font-bold">All Posts</h1>
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

      <section className="mt-12">
        <div className="m-auto flex h-[20px] w-4/5">
          <div className="bg h-full w-1/4"></div>
          <div className="h-full w-1/2 bg-secondary"></div>
          <div className="h-full w-1/4 bg-purple"></div>
        </div>
        <div className="m-auto flex w-4/5 justify-between bg-lavender p-20 font-sen">
          <div className="w-[40%]">
            <h2 className="mb-4 font-semibold text-primary">ABOUT US</h2>
            <p className="mb-4 text-4xl font-bold text-primary">
              We are a community of content writers who share their learnings
            </p>
            <p className="mb-4 font-sen text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-bold text-purple">Read More</p>
          </div>

          <div className="w-[40%]">
            <h2 className="mb-4 font-semibold text-primary">OUR MISSION</h2>
            <p className="mb-4 text-3xl font-bold text-primary">
              Creating valuable content for creatives all around the world
            </p>
            <p className="mb-4 font-sen text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
