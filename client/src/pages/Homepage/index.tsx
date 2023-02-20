import * as react from "react";
import { About } from "./about";
import { Authors } from "./authors";
import { Posts } from "./posts";

export const Homepage: React.FC = () => {
  return (
    <>
      <Posts />
      <About />
      <Authors />
    </>
  );
};
