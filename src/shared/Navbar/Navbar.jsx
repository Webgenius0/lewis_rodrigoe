
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const navItem = [
  { label: 'Demos', to: '/' },
  { label: 'Essential Pages', to: '/' },
  { label: 'Pricing', to: '/' },
  { label: 'Connect', to: '/' },
];

const Navbar = () => {
  return (
    <header className="w-full ">
      <div className="container mx-auto">
        <div className="header-right">
          <Link to="/" className="h-10 w-10">
            <img src={logo} alt="" srcSet="logo" className='h-full w-full object-cover' />
          </Link>
        </div>
        <div className="header-middle">
          <nav>
            {
              navItem.map((item,index)=>(
                <Link
                key={index}
                to={item.to}
                >
                {item.label}
                </Link>
              ))
            }
          </nav>
        </div>
        <div className="header-left"></div>
      </div>
    </header>
  );
};

export default Navbar;
