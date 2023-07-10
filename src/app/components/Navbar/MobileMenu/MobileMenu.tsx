interface MobileMenuProps {
  setNavToPage: Function;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setNavToPage }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.target as HTMLButtonElement;
    if (target) setNavToPage(target.value);
  };

  return (
    <div className="mobile-menu md:hidden flex items-center justify-end px-8">
      <ul>
        <li className="active">
          <button
            className="block text-md px-2 py-4 text-white bg-slate-400 font-semibold rounded"
            onClick={handleClick}
            value="work-button"
          >
            Work
          </button>
        </li>
        <li>
          <button
            className="block text-md px-2 py-4 hover:bg-green-500 transition duration-300 rounded"
            onClick={handleClick}
            value="about-button"
          >
            About
          </button>
        </li>
        <li>
          <button
            className="block text-md px-2 py-4 hover:bg-green-500 transition duration-300 rounded"
            onClick={handleClick}
            value="contact-button"
          >
            Contact Us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
