import Link from "next/link";

const MobileMenu: React.FC = () => {
  return (
    <div className="mobile-menu md:hidden flex items-center justify-end px-8">
      <ul>
        <li className="active">
          <a
            className="block text-md px-2 py-4 text-white bg-slate-400 font-semibold rounded"
            href="/"
          >
            Work
          </a>
        </li>
        <li>
          <Link
            className="block text-md px-2 py-4 hover:bg-green-500 transition duration-300 rounded"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="block text-md px-2 py-4 hover:bg-green-500 transition duration-300 rounded"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
