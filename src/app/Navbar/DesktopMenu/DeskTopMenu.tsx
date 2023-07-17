import React from "react";
import Link from "next/link";

const DeskTopMenu: React.FC = () => {
  return (
    <div className="nav-wrapper justify-center items-end hidden md:flex">
      <a className="px-8 md:text-2xl lg:text-3xl xl:text-4xl" href="/">
        Work
      </a>
      <Link className="px-8 md:text-2xl lg:text-3xl xl:text-4xl" href="/about">
        About
      </Link>
      <Link
        className="px-8 md:text-2xl lg:text-3xl xl:text-4xl"
        href="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default DeskTopMenu;
