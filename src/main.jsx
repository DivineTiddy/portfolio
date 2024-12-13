import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UseContext } from "./context/UseContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./page/contact/Contact.jsx";
import Project from "./page/project/Project.jsx";
import About from "./page/about/About.jsx";
import Home from "./page/home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseContext>
      <RouterProvider router={router} />
    </UseContext>
  </StrictMode>
);
