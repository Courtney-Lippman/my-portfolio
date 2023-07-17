"use client";
import DeskTopMenu from "./DesktopMenu/DeskTopMenu";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import "./Navbar.css";
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="h-1/3">
      <div className="grid grid-cols-2 gap-x-8 w-screen">
        <Link
          className="logo flex justify-center items-end text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          href="/"
        >
          c. lippman
        </Link>
        <DeskTopMenu />
        <HamburgerMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      </div>
      {showMobileMenu && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
