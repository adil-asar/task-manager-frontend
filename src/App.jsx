
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/HomeLayout";
import Home from "./pages/Home";
import Login from "./pages/Sigin";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Completed from "./pages/Completed";
import Important from "./pages/Important";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Pages */}
        <Route
          path="/signin"
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

        <Route
          path="/forgot-password"
          element={
            <AuthLayout>
              <Forgotpassword />
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

        <Route
          path="/completed-tasks"
          element={
            <MainLayout>
              <Completed />
            </MainLayout>
          }
        />

        <Route
          path="/important-tasks"
          element={
            <MainLayout>
              <Important />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
