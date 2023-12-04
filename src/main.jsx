import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Auth/login.jsx";
import Signup from "./Auth/signup.jsx";
import CategoryPage from "../categoryPage.jsx";
import CategoryTable from "./components/ACategoryTable.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/table",
    element: <CategoryTable />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
