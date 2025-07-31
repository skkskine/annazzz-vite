// src/router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./../Layout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Illustrations from "../pages/Illustrations.tsx";
import IllustrationDetail from "../pages/IllustrationDetail.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "illustrations", element: <Illustrations /> },
      { path: "illustrations/:slug", element: <IllustrationDetail /> },
    ],
  },
]);
