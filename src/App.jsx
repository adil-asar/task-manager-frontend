import React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/HomeLayout";
import Home from "./pages/Home";
import Login from "./pages/Sigin";
import Signup from "./pages/Signup";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    {/* Auth Pages */}
    <Route
      path="/login"
      element={
        <AuthLayout>
          <Login />
        </AuthLayout>
      }
    />
    <Route
      path="/signup"
      element={
        <AuthLayout>
          <Signup />
        </AuthLayout>
      }
    />

    {/* Main Pages */}
    <Route
      path="/"
      element={
        <MainLayout>
          <Home />
        </MainLayout>
      }
    />
  </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;
