import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import downArrow from '../../assets/cheveronDown.svg';

const menu1 = (
  <Menu>
    <Menu.Item key="1">Submenu 1-1</Menu.Item>
    <Menu.Item key="2">Submenu 1-2</Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item key="1">Submenu 2-1</Menu.Item>
    <Menu.Item key="2">Submenu 2-2</Menu.Item>
  </Menu>
);

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
          <Dropdown overlay={menu1} placement="bottom">
            <Link className="flex items-center gap-2.5">
              <span>Demos</span>
              <img src={downArrow} alt="downArrow" />
            </Link>
          </Dropdown>

          {/* Second menu with dropdown */}
          <Dropdown overlay={menu2} placement="bottom">
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

// import { Link } from 'react-router-dom';
// import logo from '../../assets/logo.png';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
//   NavigationMenuViewport,
// } from '@/components/ui/navigation-menu';

// const navItem = [
//   {
//     label: 'Demos',
//     children: [
//       {
//         label: 'Children 1',
//         to: '/children',
//       },
//       {
//         label: 'Children 2',
//         to: '/children2',
//       },
//     ],
//   },
//   {
//     label: 'Essential Pages',
//     to: '/essential-pages',
//     children: [
//       {
//         label: 'Children 3',
//         to: '/children',
//       },
//       {
//         label: 'Children 4',
//         to: '/children2',
//       },
//       {
//         label: 'Children 5',
//         to: '/children2',
//       },
//     ],
//   },
//   { label: 'Pricing', to: '/pricing' },
//   { label: 'Connect', to: '/connect' },
// ];

// const Navbar = () => {
//   return (
//     <header className="w-full ">
//       <div className="container mx-auto flex justify-between">
//         <div className="header-right">
//           <Link to="/" className="w-[125px] h-[125px] block">
//             <img src={logo} alt="" className="h-full w-full object-cover" />
//           </Link>
//         </div>

//         <div className="header-middle flex items-center">
//           {/* <nav className="flex gap-2">
//             {navItem.map((item, index) => (
//               <Link key={index} to={item.to}>
//                 {item.label}
//               </Link>
//             ))}
//           </nav> */}
//           <NavigationMenu className="bg-violet-200">
//             <NavigationMenuList className="text-[#FFF] font-[Inter] text-[16px] not-italic font-medium leading-[27.2px]">
//               {navItem.map((item) => (
//                 <NavigationMenuItem key={item.label}>
//                   {item?.children ? (
//                     <div className="relative">
//                       <NavigationMenuTrigger className="">
//                         {item.label}
//                       </NavigationMenuTrigger>
//                       <NavigationMenuContent className=" bg-slate-400">
//                         {item.children.map((child) => (
//                           <Link
//                             key={child.label}
//                             to={child.to}
//                             legacyBehavior
//                             passHref
//                           >
//                             <NavigationMenuLink className="text-[#FFF] font-[Inter] text-[16px] not-italic font-medium leading-[27.2px]">
//                               {child.label}
//                             </NavigationMenuLink>
//                           </Link>
//                         ))}
//                       </NavigationMenuContent>
//                     </div>
//                   ) : (
//                     <Link to={item.to} legacyBehavior passHref>
//                       <NavigationMenuLink
//                         className={navigationMenuTriggerStyle()}
//                       >
//                         {item.label}
//                       </NavigationMenuLink>
//                     </Link>
//                   )}
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         <div className="header-left flex items-center">
//           <Link className="inline-flex px-[20px] py-[16px] justify-center items-center gap-[16px] text-[#FFF] text-right font-[Inter] text-[14px] not-italic font-semibold leading-[23.8px] uppercase rounded-[30px] [background-image:linear-gradient(95deg,_#09B5FF_0%,_#4F81FF_53.67%,_#0048FF_100%)]">
//             JOIN AS AN ENGINEER
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
