import { createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";
import AccountManagement from "../pages/AccountManagement";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: ROUTES.ACCOUNT_MANAGEMENT,
        element: <AccountManagement />,
      },
    ],
  },
  { path: ROUTES.ERROR, element: <NotFound /> },
]);
