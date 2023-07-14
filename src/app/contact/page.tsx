import Navbar from "../Navbar/Navbar";
import ContactSection from "./ContactSection/ContactSection";

export default function ContactPage() {
  return (
    <main className="w-screen min-h-screen sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 box-border flex flex-col items-center">
      <Navbar />
      <ContactSection />
    </main>
  );
}
