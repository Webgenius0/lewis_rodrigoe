import AnalysisResult from '@/components/auth/AnalysisResult';
import Card from '@/components/auth/Card';
import PricingAnalysis from '@/components/auth/PricingAnalysis';
import DashboardLayout from '@/layout/DashboardLayout';
import Layout from '@/layout/Layout';
import RootLayout from '@/layout/RootLayout';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import NewPassword from '@/pages/auth/NewPassword';
import SignIn from '@/pages/auth/SignIn';
import SignUp from '@/pages/auth/SignUp';
import SignUpContinue from '@/pages/auth/SignUpContinue';
import VerifyOtp from '@/pages/auth/VerifyOtp';
import Messages from '@/pages/dashboard/Messages';
import MyJobs from '@/pages/dashboard/MyJobs';
import MyProperties from '@/pages/dashboard/MyProperties';
import Profile from '@/pages/dashboard/Profile';
import Contact from '@/pages/main/Contact';
import Home from '@/pages/main/Home';
import Pricing from '@/pages/main/Pricing';
import { createBrowserRouter } from 'react-router';
import PrivateRoute from './private-route';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
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
          {
            path: '/contact',
            element: <Contact />,
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
        path: '/pricing-analysis',
        element: (
          <PrivateRoute>
            <PricingAnalysis />
          </PrivateRoute>
        ),
      },
      {
        path: '/analysis-result',
        element: <AnalysisResult />,
      },
      {
        path: '/card',
        element: <Card />,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <MyJobs />,
          },
          {
            path: '/dashboard/my-properties',
            element: <MyProperties />,
          },
          {
            path: '/dashboard/messages',
            element: <Messages />,
          },
          {
            path: '/dashboard/profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;
