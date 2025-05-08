import AnalysisResult from "@/components/auth/AnalysisResult";
import Card from "@/components/auth/Card";
import PricingAnalysing from "@/components/auth/PricingAnalysing";
import DashboardLayout from "@/layout/DashboardLayout";
import Layout from "@/layout/Layout";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import NewPassword from "@/pages/auth/NewPassword";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import SignUpContinue from "@/pages/auth/SignUpContinue";
import VerifyOtp from "@/pages/auth/VerifyOtp";
import MyJobs from "@/pages/dashboard/MyJobs";
import MyProperties from "@/pages/dashboard/MyProperties";
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
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/verify-otp',
    element: <VerifyOtp />,
  },
  {
    path: '/new-password',
    element: <NewPassword />,
  },
  {
    path: '/pricing-analysing',
    element: <PricingAnalysing />,
  },
  {
    path: '/analysis-result',
    element: <AnalysisResult />,
  },
  {
    path: '/card',
    element: <Card />,
  },

  // Dashboard layout
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'my-jobs',
        element: <MyJobs/>,
      },
      {
        path: 'my-properties',
        element: <MyProperties />,
      },
    ],
  },
]);

export default router;
