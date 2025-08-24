import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Single from "./pages/Single";
import { Outlet } from "react-router-dom";
import Navbar from "./compound/Navbar";
import Footer from "./compound/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/Register",
    element: <Register />,
  },
]);
const App = () => {
  return (
    <div className="flex justify-center">
     <div className="w-8/12">


      <RouterProvider router={router} />
    
     </div>
    </div>
  );
};

export default App;
