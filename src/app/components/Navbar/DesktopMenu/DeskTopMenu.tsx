"use client";
import { useState } from "react";

const DeskTopMenu = () => {
  return (
    <div className="nav-wrapper justify-center items-end hidden md:flex">
      <p className="px-8 md:text-2xl lg:text-3xl xl:text-4xl ">Work</p>
      <p className="px-8  md:text-2xl lg:text-3xl xl:text-4xl">About</p>
      <p className="px-8 md:text-2xl lg:text-3xl xl:text-4xl">Contact</p>
    </div>
  );
};

export default DeskTopMenu;
