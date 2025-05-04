import Layout from "@/layout/Layout";
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
        element: <Pricing/>,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <Layout />,
 
  },
]);

export default router;
