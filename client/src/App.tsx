import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "pages";
import { Layout } from "pages/Layout";
import RoutePaths from "config/routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutePaths.Homepage} element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export const App = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
