import Image from "next/image";
import { NAV_LINKS } from "./header.constants";
import Hamburger from "hamburger-react";

interface IProps {
  toggleNav: () => void;
}

const Header = ({ toggleNav }: IProps): JSX.Element => {
  const renderNavLinks = (): JSX.Element => {
    return (
      <ul className="w-full flex justify-center items-center gap-2 text-at-gray-500 font-medium  ">
        {NAV_LINKS.map((navLink) => (
          <li key={navLink.title}>
            <a
              className="hover:bg-at-light-500 rounded-lg px-3 py-2 items-center gap-3"
              href={navLink.href}
            >
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="sticky top-0 z-30  font-medium ">
      <nav className="border-b bg-white border-at-light-500 h-15 xl:h-16 ">
        <div className="flex h-15 md:h-auto pl-0.5 pr-1.5 xl:pl-0 xl:pr-0 justify-center items-center relative xl:static xl:bottom-0 max-w-1200 m-auto">
          <button className="flex xl:hidden relative" onClick={toggleNav}>
            <Hamburger direction="right" color="#333333" size={25} />
          </button>
          <div className="hidden h-16 xl:flex flex-grow items-center">
            <a href="/_" className="relative">
              <Image
                src="https://view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg"
                alt="view.com.au Logo"
                width={95}
                height={32}
              />
            </a>
            {renderNavLinks()}
          </div>
          <div className="flex ml-3 justify-between items-center flex-grow xl:hidden">
            <a href="/_" className="relative">
              <Image
                src="https://view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg"
                alt="view.com.au Logo"
                width={76}
                height={26}
              />
            </a>
          </div>
          <button className=" font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 disabled:opacity-50 disabled:pointer-events-none rounded-lg text-sm xl:text-base py-1.5 px-2 xl:py-2.5 xl:px-3 flex items-center justify-center mr-2 xl:mr-0">
            Join / Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
