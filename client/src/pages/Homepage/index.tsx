import * as react from "react";
import { About } from "./about";
import { Authors } from "./authors";
import { Categories } from "./categories";
import { Posts } from "./posts";

export const Homepage: React.FC = () => {
  return (
    <>
      <Posts />
      <About />
      <Categories />
      <Authors />
    </>
  );
};
