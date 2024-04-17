import Image from "next/image";
import { IFooterLink } from "./footer.interface";
import {
  SOCIAL_MEDIA_LINKS,
  CONTACT_LINKS,
  MOBILE_LINKS,
  DESKTOP_LINKS,
} from "./footer.constants";

const Footer = (): JSX.Element => {
  const renderSocialMediaLinks = (): JSX.Element => {
    return (
      <div className="flex gap-8 lg:gap-6">
        {SOCIAL_MEDIA_LINKS.map((socialmedialink, index) => (
          <a
            key={index}
            className="text-default hover:text-at-primary cursor-pointer text-at-gray-500"
            href="/_"
          >
            <Image
              src={socialmedialink.src!}
              alt={socialmedialink.title}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    );
  };

  const renderContactLinks = (): JSX.Element => {
    return (
      <ul className=" hidden lg:flex justify-end gap-6  ">
        {CONTACT_LINKS.map((contactlink) => (
          <a
            key={contactlink.title}
            className="text-base text-at-gray-700 hover:underline hover:text-at-primary cursor-pointer"
            href="/_"
            aria-label={contactlink.title}
          >
            {contactlink.title}
          </a>
        ))}
      </ul>
    );
  };

  const renderMobileLinks = (): JSX.Element => {
    return (
      <ul className="border-b border-at-light-500 lg:hidden grid grid-cols-2 py-6 gap-2 place-items-center">
        {MOBILE_LINKS.map((mobilelink) => (
          <li key={mobilelink.title} className="mb-2">
            <a
              href="/_"
              className="text-base text-at-gray-700 hover:underline hover:text-at-primary cursor-pointer"
              aria-label={mobilelink.title}
            >
              {mobilelink.title}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderDesktopLinks = (desktopLinks: IFooterLink[]): JSX.Element => {
    return (
      <ul className="space-y-4">
        {desktopLinks.map((firstSectionLink) => (
          <li key={firstSectionLink.title}>
            {" "}
            <a
              href="/_"
              className="text-base text-at-gray-700 hover:underline hover:text-at-primary cursor-pointer"
              aria-label={firstSectionLink.title}
            >
              {firstSectionLink.title}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderCompanyLogoFooter = (): JSX.Element => {
    return (
      <div className="flex flex-col lg:flex-row justify-between pt-8 items-center">
        <a
          href="/_"
          className="text-default cursor-pointer text-xl rounded-full w-24 lg:pb-0"
        >
          <Image
            src="https://view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg"
            alt="view.com.au logo"
            width={96}
            height={24.5}
          />
        </a>
        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-2 text-at-gray-700 text-center lg:text-end">
          <p className="text-sm font-normal lg:w-32 lg:leading-4">
            Part of View Media Group (VMG)
          </p>
          <a
            href="/_"
            className="text-default cursor-pointer text-xl rounded-full lg:pt-1 w-110 h-7"
          >
            <Image
              src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/VMG_logo.24597d8a.png"
              alt="view media group logo"
              width={110}
              height={24.5}
            />
          </a>
        </div>
      </div>
    );
  };

  return (
    <footer className="px-5  lg:max-w-1200 lg:mx-auto  lg:px-0">
      <div className="py-6 border-b border-at-light-500 flex justify-center items-center lg:justify-between">
        {renderSocialMediaLinks()}
        {renderContactLinks()}
      </div>
      {renderMobileLinks()}
      <div className="py-6 border-b border-at-light-500 hidden lg:flex justify-center">
        <div className="text-at-gray-700 pr-5 text-base grid grid-cols-4 w-full text-left">
          {renderDesktopLinks(DESKTOP_LINKS.slice(0, 6))}
          {renderDesktopLinks(DESKTOP_LINKS.slice(6, 11))}
          {renderDesktopLinks(DESKTOP_LINKS.slice(11, 16))}
          {renderDesktopLinks(DESKTOP_LINKS.slice(16))}
        </div>
      </div>
      {renderCompanyLogoFooter()}
      <p className="text-sm font-normal py-2 text-center lg:text-left">
        Copyright © 2001-2024 | view.com.au Pty Ltd
      </p>
    </footer>
  );
};

export default Footer;
