import React, { MouseEvent, useCallback } from "react";

interface DeskTopMenuProps {
  setNavToPage: (value: string) => void;
}

const DeskTopMenu: React.FC<DeskTopMenuProps> = ({ setNavToPage }) => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLParagraphElement;
      const value = target.getAttribute("data-value");
      if (value) {
        setNavToPage(value);
      }
    },
    [setNavToPage]
  );

  return (
    <div className="nav-wrapper justify-center items-end hidden md:flex">
      <a
        className="px-8 md:text-2xl lg:text-3xl xl:text-4xl"
        href="#work-section"
      >
        Work
      </a>
      <p
        className="px-8 md:text-2xl lg:text-3xl xl:text-4xl"
        onClick={handleClick}
        data-value="about-button"
      >
        About
      </p>
      <p
        className="px-8 md:text-2xl lg:text-3xl xl:text-4xl"
        onClick={handleClick}
        data-value="contact-button"
      >
        Contact
      </p>
    </div>
  );
};

export default DeskTopMenu;
