"use client";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import WorkSection from "./components/WorkSection/WorkSection";
import { useState } from "react";

export default function Home() {
  const [navToPage, setNavToPage] = useState<string>("home");

  return (
    <main className="w-screen min-h-screen sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 box-border flex flex-col items-center">
      <Navbar setNavToPage={setNavToPage} />
      {navToPage === "home" && <Carousel />}
      {navToPage === "home" && <WorkSection />}
    </main>
  );
}
