import { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import downArrow from '../../assets/cheveronDown.svg';

const menu1 = {
  items: [
    { key: '1', label: 'Submenu 1-1' },
    { key: '2', label: 'Submenu 1-2' },
  ],
};

const menu2 = {
  items: [
    { key: '1', label: 'Submenu 2-1' },
    { key: '2', label: 'Submenu 2-2' },
  ],
};

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // if (mobileMenuOpen) {
    //   document.body.classList.add;
    // } else {
    //   document.body.classList.remove;
    // }
  }, [mobileMenuOpen]);

  return (
    <header className="bg-inherit absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="w-[100px] md:w-[125px]">
          <Link to="/" className="block">
            <img src={logo} alt="Logo" className="h-full w-full object-cover" />
          </Link>
        </div>

        {/* Toggle Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-white font-[Inter] text-[16px] font-medium leading-[27.2px]">
          <Dropdown menu={menu1} placement="bottom">
            <Link className="flex items-center gap-2.5">
              <span>Demos</span>
              <img src={downArrow} alt="downArrow" />
            </Link>
          </Dropdown>

          <Dropdown menu={menu2} placement="bottom">
            <Link className="flex items-center gap-2.5">
              <span>Essential Pages</span>
              <img src={downArrow} alt="downArrow" />
            </Link>
          </Dropdown>

          <Link to="/pricing">Pricing</Link>
          <Link to="/">Connect</Link>
        </nav>

        {/* Join button */}
        {pathname !== '/pricing' && (
          <div className="hidden md:flex items-center">
            <Link className="inline-flex px-[20px] py-[16px] justify-center items-center gap-[16px] text-white text-[14px] font-semibold leading-[23.8px] uppercase rounded-[30px] bg-gradient-to-r from-[#09B5FF] via-[#4F81FF] to-[#0048FF]">
              JOIN AS AN ENGINEER
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Fullscreen Panel */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-[#111827] text-white font-medium font-[Inter] transform transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          {/* Mobile Logo and Close Button */}
          <div className="flex justify-between items-center mb-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-[100px]"
            >
              <img src={logo} alt="Logo" className="w-full object-contain" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl"
            >
              <CloseOutlined />
            </button>
          </div>

          {/* Menu Items */}
          <Dropdown menu={menu1} placement="bottom">
            <span className="flex items-center gap-2.5 cursor-pointer">
              Demos <img src={downArrow} alt="downArrow" />
            </span>
          </Dropdown>

          <Dropdown menu={menu2} placement="bottom">
            <span className="flex items-center gap-2.5 cursor-pointer">
              Essential Pages <img src={downArrow} alt="downArrow" />
            </span>
          </Dropdown>

          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            Connect
          </Link>

          {pathname !== '/pricing' && (
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex px-[20px] py-[16px] justify-center items-center gap-[16px] text-white text-[14px] font-semibold leading-[23.8px] uppercase rounded-[30px] bg-gradient-to-r from-[#09B5FF] via-[#4F81FF] to-[#0048FF]"
            >
              JOIN AS AN ENGINEER
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
