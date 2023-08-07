import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Resume from "../Pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
