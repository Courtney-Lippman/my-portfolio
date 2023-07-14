"use client";
import Navbar from "./Navbar/Navbar";
import Carousel from "./WorkSection/Carousel/Carousel";
import WorkSection from "./WorkSection/WorkSection";

export default function Home() {
  return (
    <main className="w-screen min-h-screen sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 box-border flex flex-col items-center">
      <Navbar />
      <Carousel />
      <WorkSection />
    </main>
  );
}
