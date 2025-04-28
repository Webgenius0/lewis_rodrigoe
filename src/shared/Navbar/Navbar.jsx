import { Menu, Dropdown} from 'antd';
import { Link } from 'react-router-dom';
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
  return (
    <header className="bg-inherit absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="header-right">
          <Link to="/" className="w-[125px] h-[125px] block">
            <img src={logo} alt="" className="h-full w-full object-cover" />
          </Link>
        </div>
        <div className="text-[#FFF] font-[Inter] text-[16px] not-italic font-medium leading-[27.2px] flex gap-10">
          {/* First menu with dropdown */}
          <Dropdown menu={menu1} placement="bottom">
            <Link className="flex items-center gap-2.5">
              <span>Demos</span>
              <img src={downArrow} alt="downArrow" />
            </Link>
          </Dropdown>

          {/* Second menu with dropdown */}
          <Dropdown menu={menu2} placement="bottom">
            <Link className="flex items-center gap-2.5">
              <span>Essential Pages</span>
              <img src={downArrow} alt="downArrow" />
            </Link>
          </Dropdown>

          {/* Third menu without dropdown */}
          <Link to="/">Pricing</Link>
          <Link to="/">Connect</Link>
        </div>

        {/* header left */}
        <div className="header-left flex items-center">
          <Link className="inline-flex px-[20px] py-[16px] justify-center items-center gap-[16px] text-[#FFF] text-right font-[Inter] text-[14px] not-italic font-semibold leading-[23.8px] uppercase rounded-[30px] [background-image:linear-gradient(95deg,_#09B5FF_0%,_#4F81FF_53.67%,_#0048FF_100%)]">
            JOIN AS AN ENGINEER
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

