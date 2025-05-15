import { useState } from 'react';
import { Menu, Dropdown } from 'antd';
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

  return (
    <header className="bg-inherit absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="w-[100px] md:w-[125px]">
          <Link to="/" className="block">
            <img src={logo} alt="Logo" className="h-full w-full object-cover" />
          </Link>
        </div>

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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-2xl"
          >
            {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#111827] ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-6 p-6 text-white text-[16px] font-medium font-[Inter]">
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
