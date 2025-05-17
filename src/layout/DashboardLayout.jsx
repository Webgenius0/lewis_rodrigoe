import DashboardNavbar from '@/pages/dashboard/DashboardNavbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <div className="p-4 bg-[#F3F3F3] flex gap-4 h-screen overflow-hidden ">
        <DashboardNavbar />
        <div className="bg-[#FDFDFD] px-6 md:px-8 py-4 md:py-6 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
