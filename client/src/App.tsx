import * as React from "react";
import { Layout } from "./pages/Layout";
import { Homepage } from "./pages";

export const App = () => {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
};

export default App;
