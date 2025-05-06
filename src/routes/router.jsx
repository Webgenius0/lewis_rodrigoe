import Layout from "@/layout/Layout";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import SignUpContinue from "@/pages/auth/SignUpContinue";
import Home from "@/pages/main/Home";
import Pricing from "@/pages/main/Pricing";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-up-continue',
    element: <SignUpContinue />,
  },
]);

export default router;
