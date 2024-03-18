import React, { useEffect } from "react";
import {
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaBlogger,
  FaAddressBook,
} from "react-icons/fa";

const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      name: "About",
      link: "/",
      icon: <FaUser />,
    },
    {
      id: 2,
      name: "Resume",
      link: "/resume",
      icon: <FaFileAlt />,
    },
    {
      id: 3,
      name: "Works",
      link: "/portfolio",
      icon: <FaBriefcase />,
    },
    {
      id: 4,
      name: "Blogs",
      link: "/blogs",
      icon: <FaBlogger />,
    },
    {
      id: 5,
      name: "Contact",
      link: "/contact",
      icon: <FaAddressBook />,
    },
  ];

  const activeMenu = localStorage.getItem("active") ?? 1;

  const handleClick = (id) => {
    localStorage.setItem("active", id);
  };

  return (
    <header className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
      <nav className="hidden lg:block">
        <ul className="flex">
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                <a
                  className={
                    activeMenu == item.id ? `menu-active` : `menu-item`
                  }
                  href={item.link}
                  onClick={() => handleClick(item.id)}
                >
                  <span className="text-xl mb-1">{item.icon}</span> {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
