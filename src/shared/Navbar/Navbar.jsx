import { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { Link, useLocation, useNavigate } from "react-router";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import logo from "../../assets/logo-removebg.png";
import downArrow from "../../assets/cheveronDown.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import toast from "react-hot-toast";

const menu1 = {
  items: [
    { key: "1", label: "Submenu 1-1" },
    { key: "2", label: "Submenu 1-2" },
  ],
};

const menu2 = {
  items: [
    { key: "1", label: "Submenu 2-1" },
    { key: "2", label: "Submenu 2-2" },
  ],
};

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/sign-in");
  };
  const gitodashboard = () => {
    navigate("/dashboard");
  };

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
        <div className="lg:hidden flex items-center gap-4">
          <button
            className="text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>

          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer h-10 w-10 border">
                  <AvatarImage
                    // className="bg-transparent"
                    // src={`https://lewis-rodrigoe.softvencefsd.xyz/storage/avatar/${user?.avatar}`}
                    //src={user?.avatar}
                    src={
                      "https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                    }
                    alt={user?.first_name}
                  />
                  {/* <AvatarFallback className="text-white">
                      {user?.first_name?.[0]?.toUpperCase()}
                      {user?.last_name?.[0]?.toUpperCase()}
                    </AvatarFallback> */}
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border-none bg-[#08172c] p-2"
              >
                <DropdownMenuItem className="text-white hover:bg-[#010B21] cursor-pointer">
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-white hover:bg-[#010B21] cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-white font-[Inter] text-[16px] font-medium leading-[27.2px]">
          {/* <Dropdown menu={menu1} placement="bottom">
            <Link className="flex items-center gap-2.5">
              <span>Demos</span>
              <img src={downArrow} alt="downArrow" />
            </Link>
          </Dropdown> */}

          {/* <Dropdown menu={menu2} placement="bottom">
            <Link className="flex items-center gap-2.5">
              <span>Essential Pages</span>
              <img src={downArrow} alt="downArrow" />
            </Link>
          </Dropdown> */}
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/">Contact</Link>
        </nav>

        {/* Join button */}
        {pathname === "/pricing" ? (
          <div className="hidden lg:block"></div>
        ) : (
          <div className="header-left items-center hidden lg:flex">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="cursor-pointer h-10 w-10 border hidden lg:block">
                    <AvatarImage
                      // className="bg-transparent"
                      // src={`https://lewis-rodrigoe.softvencefsd.xyz/storage/avatar/${user?.avatar}`}
                      //src={user?.avatar}
                      src={
                        "https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg"
                      }
                      alt={user?.first_name}
                    />
                    {/* <AvatarFallback className="text-white">
                      {user?.first_name?.[0]?.toUpperCase()}
                      {user?.last_name?.[0]?.toUpperCase()}
                    </AvatarFallback> */}
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="border-none bg-[#08172c] p-2"
                >
                  <DropdownMenuItem
                    onClick={gitodashboard}
                    className="text-white hover:bg-[#010B21] cursor-pointer"
                  >
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-white hover:bg-[#010B21] cursor-pointer"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/sign-in"
                className="inline-flex px-[20px] py-[16px] justify-center items-center gap-[16px] text-[#FFF] text-right font-[Inter] text-[14px] not-italic font-semibold leading-[23.8px] uppercase rounded-[30px] [background-image:linear-gradient(95deg,_#09B5FF_0%,_#4F81FF_53.67%,_#0048FF_100%)]"
              >
                JOIN AS AN ENGINEER
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Fullscreen Panel */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-[#111827] text-white font-medium font-[Inter] transform transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
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

          {pathname !== "/pricing" && !user && (
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
