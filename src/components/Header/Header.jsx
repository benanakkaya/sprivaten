import { AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Logo from "../shared/Logo";
import MobileMenu from "./components/MobileMenu";

const Header = () => {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Product",
      path: "/",
    },
    {
      id: 3,
      name: "Pricing",
      path: "/",
    },
    {
      id: 4,
      name: "Contact",
      path: "/",
    },
  ];

  const handleMobileMenu = () => {
    setMobileMenuVisibility((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-row container">
        <Logo />
        <div className="header-col-right">
          <nav className="header-nav">
            <ul className="header-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="header-nav-list-item">
                  <a href={item.path} className="header-nav-list-item-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-buttons">
            <button className="header-buttons-button">
              <AiOutlineSearch />
            </button>
            <button className="header-buttons-button">
              <AiOutlineShoppingCart />
            </button>
            <button
              onClick={handleMobileMenu}
              className="header-buttons-button mobile-menu"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
      {mobileMenuVisibility && <MobileMenu items={navItems} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
