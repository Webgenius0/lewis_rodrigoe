import Footer from '@/shared/footer/Footer';
import Navbar from '@/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
