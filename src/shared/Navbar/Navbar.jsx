import { Menu, Dropdown } from "antd";
import { Link, useLocation } from "react-router";
import logo from "../../assets/logo.png";
import downArrow from "../../assets/cheveronDown.svg";
import { useState } from "react";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  //const { logout } = useLogout();

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

  console.log({ user });
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
          <Link to="/pricing">Pricing</Link>
          <Link to="/">Connect</Link>
        </div>

        {/* header left */}
        {pathname === "/pricing" ? (
          <div />
        ) : (
          <div className="header-left flex items-center">
            {user ? (
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
    </header>
  );
};

export default Navbar;
