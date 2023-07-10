import { FC } from "react";

interface HamburgerMenuProps {
  showMobileMenu: boolean;
  setShowMobileMenu: Function;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({
  showMobileMenu,
  setShowMobileMenu
}) => {
  const handleHamburgerClick = () => {
    setShowMobileMenu(!showMobileMenu);
    console.log("showMobileMenu", showMobileMenu);
  };
  //may need a useEffect to change the state correctly?

  return (
    <div className="md:hidden flex items-center justify-end px-8">
      <button
        className="outline-none mobile-menu-button"
        onClick={handleHamburgerClick}
      >
        <svg
          className="w-12 h-12 text-black-500"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  );
};

export default HamburgerMenu;
