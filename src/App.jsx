import React from "react";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";

import FormData from "./pages/Form";
import Movie from "./pages/Movie";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "contact", element: <Contact /> },
        { path: "form", element: <FormData /> },
        { path: "movie", element: <Movie /> },
      ],
    },
    { path: "*", element: <Error404 /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
