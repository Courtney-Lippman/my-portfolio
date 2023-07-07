const MobileMenu = () => {
  return (
    <div className="hidden mobile-menu md:hidden flex items-center justify-end px-8">
      <ul>
        <li className="active">
          <a
            href="index.html"
            className="block text-md px-2 py-4 text-white bg-slate-400 font-semibold rounded"
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="block text-md px-2 py-4 hover:bg-green-500 transition duration-300 rounded"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block text-md px-2 py-4 hover:bg-green-500 transition duration-300 rounded"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
