import Navbar from "../Navbar/Navbar";
import AboutSection from "./AboutSection/AboutSection";

export default function AboutPage() {
  return (
    <main className="w-screen min-h-screen sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 box-border flex flex-col items-center">
      <Navbar />
      <AboutSection />
    </main>
  );
}
