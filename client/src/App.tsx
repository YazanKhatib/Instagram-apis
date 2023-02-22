import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllPosts, Homepage } from "pages";
import { Layout } from "pages/Layout";
import RoutePaths from "config/routes";
import { PostDetails } from "pages/PostDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.Post} element={<PostDetails />} />
      <Route path={RoutePaths.Posts} element={<AllPosts />} />
      <Route path={RoutePaths.Homepage} element={<Homepage />} />
    </Routes>
  );
};

export const App = () => {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
