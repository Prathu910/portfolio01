import React, { useEffect, useState } from "react";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaBlogger,
  FaAddressBook,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../../public/images/logo/logo.png";

const Header = () => {
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

  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "");

  // useEffect(() => {
  //   document.documentElement.classList.add(theme);
  // }, []);

  const activeMenu = localStorage.getItem("active") ?? 1;

  const handleClick = (id) => {
    localStorage.setItem("active", id);
  };

  const themeConverter = (mode) => {
    if (mode == "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", mode);
      setTheme(mode);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      setTheme("");
    }
  };

  const mobileMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="section-bg">
        <div className="w-full flex justify-between px-4">
          <a href="/">
            <img className="h-[26px] lg:h-[32px]" src={logo} alt="logo" />
          </a>
          <div className="flex items-center">
            <button id="theme-toggle" type="button" className="dark-light-btn">
              {theme == "dark" ? (
                <FaMoon
                  id="theme-toggle-dark-icon"
                  className="text-xl"
                  onClick={() => themeConverter("light")}
                />
              ) : (
                <FaSun
                  id="theme-toggle-light-icon"
                  className="text-xl"
                  onClick={() => themeConverter("dark")}
                />
              )}
            </button>
            <button
              id="menu-toggle"
              type="button"
              className="menu-toggle-btn"
              onClick={mobileMenuToggle}
            >
              {showMenu ? (
                <ImCross
                  id="menu-toggle-close-icon"
                  className="a-solid fa-xmark text-xl hidden"
                />
              ) : (
                <FaBars id="menu-toggle-open-icon" className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <nav id="navbar" className={`${showMenu ? "" : "hidden"} lg:hidden`}>
        <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
          {menuItems.map((item) => {
            return (
              <li key={item.id}>
                <a
                  className={
                    activeMenu == item.id
                      ? `mobile-menu-items-active`
                      : `mobile-menu-items`
                  }
                  href={item.link}
                  onClick={() => handleClick(item.id)}
                >
                  <span className="mr-2 text-xl">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
