import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPages from "./pages/MainPages.jsx";
import Error from "./pages/Error.jsx";
import AdminInput from "./pages/AdminInput.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages />,
    errorElement: <Error />,
  },
  {
    path: "/Admin",
    element: <AdminInput />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
