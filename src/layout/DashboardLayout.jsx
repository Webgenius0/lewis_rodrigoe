
import Navbar from '@/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
     
      <Outlet />
    </>
  );
};

export default DashboardLayout;
