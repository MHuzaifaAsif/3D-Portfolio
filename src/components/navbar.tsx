import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close, github, linkedin } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
};

// Navbar
export const Navbar = ({ hide }: NavbarProps) => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when near the very top
      if (currentScrollY <= 15) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
        setToggle(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full flex items-center py-4 fixed top-0 z-20 bg-[#050816]/75 backdrop-blur-md border-b border-white/5 transition-all duration-300 ease-in-out px-4 sm:px-6",
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none",
        hide ? "mt-0" : "mt-20",
      )}
    >
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Huzaifa&nbsp;<span className="sm:block hidden">| Software Engineer</span>
          </p>
        </Link>

        {/* Desktop Nav Links & Social Icons */}
        <div className="hidden sm:flex items-center flex-1 justify-end gap-5 lg:gap-8">
          <ul className="list-none flex flex-row items-center gap-2.5">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.title;
              return (
                <li
                  key={link.id}
                  className="group cursor-pointer"
                  onClick={() => !link.link && setActive(link.title)}
                >
                  <div
                    className={cn(
                      "p-[1.5px] rounded-full bg-gradient-to-r from-[#bf61ff] via-[#6366f1] to-[#00cea8] transition-all duration-300",
                      isActive
                        ? "shadow-[0_0_15px_rgba(191,97,255,0.6)] scale-105"
                        : "shadow-[0_0_8px_rgba(191,97,255,0.25)] hover:shadow-[0_0_15px_rgba(0,206,168,0.55)] hover:scale-105",
                    )}
                  >
                    {link.link ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-4 py-1.5 rounded-full bg-[#050816] group-hover:bg-[#151030] transition-colors flex items-center justify-center text-white text-[15px] font-medium tracking-wide"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <a
                        href={`#${link.id}`}
                        className="px-4 py-1.5 rounded-full bg-[#050816] group-hover:bg-[#151030] transition-colors flex items-center justify-center text-white text-[15px] font-medium tracking-wide"
                      >
                        {link.title}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Social Icons (Far Right Corner with Glowing Gradient Borders) */}
          <div className="flex items-center gap-3 pl-5 lg:pl-7 border-l border-white/20">
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#bf61ff] via-[#6366f1] to-[#00cea8] shadow-[0_0_10px_rgba(191,97,255,0.3)] hover:shadow-[0_0_16px_rgba(0,206,168,0.6)] transition-all duration-300 hover:scale-110">
              <a
                href="https://github.com/MHuzaifaAsif"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub Profile"
                title="GitHub"
                className="w-11 h-11 rounded-full bg-[#050816] hover:bg-[#151030] flex justify-center items-center transition-colors group"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-6 h-6 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>

            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#bf61ff] via-[#6366f1] to-[#00cea8] shadow-[0_0_10px_rgba(191,97,255,0.3)] hover:shadow-[0_0_16px_rgba(0,206,168,0.6)] transition-all duration-300 hover:scale-110">
              <a
                href="https://www.linkedin.com/in/muhammad-huzaifa-asif-120818274"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
                className="w-11 h-11 rounded-full bg-[#050816] hover:bg-[#151030] flex justify-center items-center transition-colors group"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-44 z-10 rounded-xl flex-col gap-3",
            )}
          >
            {/* Nav Links (Mobile) */}
            <ul className="list-none flex justify-end items-stretch flex-col gap-2.5 w-full">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  className="w-full"
                  onClick={() => {
                    !link.link && setToggle(!toggle);
                    !link.link && setActive(link.title);
                  }}
                >
                  <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#bf61ff] via-[#6366f1] to-[#00cea8] shadow-[0_0_8px_rgba(191,97,255,0.25)]">
                    {link.link ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-4 py-2 rounded-full bg-[#050816] flex items-center justify-center text-white text-[15px] font-medium"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <a
                        href={`#${link.id}`}
                        className="px-4 py-2 rounded-full bg-[#050816] flex items-center justify-center text-white text-[15px] font-medium"
                      >
                        {link.title}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center gap-3 pt-3 border-t border-white/15 w-full mt-1">
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#bf61ff] via-[#6366f1] to-[#00cea8] shadow-[0_0_8px_rgba(191,97,255,0.25)]">
                <a
                  href="https://github.com/MHuzaifaAsif"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050816] text-white text-[13.5px]"
                >
                  <img src={github} alt="GitHub" className="w-4.5 h-4.5 object-contain" />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#bf61ff] via-[#6366f1] to-[#00cea8] shadow-[0_0_8px_rgba(191,97,255,0.25)]">
                <a
                  href="https://www.linkedin.com/in/muhammad-huzaifa-asif-120818274"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050816] text-white text-[13.5px]"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-4.5 h-4.5 object-contain" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glowing Gradient Line under Navbar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#bf61ff] via-[#6366f1] to-[#00cea8] shadow-[0_1px_10px_rgba(99,102,241,0.4)]" />
    </nav>
  );
};
