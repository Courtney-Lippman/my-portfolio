"use client";
import DeskTopMenu from "./DesktopMenu/DeskTopMenu";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import "./Navbar.css";
import { useState } from "react";

interface NavbarProps {
  setNavToPage: (clicked: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setNavToPage }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="h-1/3">
      <div className="grid grid-cols-2 gap-x-8 w-screen">
        <p className="logo flex justify-center items-end text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          c. lippman
        </p>
        <DeskTopMenu />
        <HamburgerMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      </div>
      {showMobileMenu && <MobileMenu setNavToPage={setNavToPage} />}
    </nav>
  );
};

export default Navbar;
