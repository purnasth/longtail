import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useFetchAPI from '../hooks/useFetchAPI';
import { TbMenu2 } from 'react-icons/tb';
import icon from '../assets/icon.svg';
import Logo from '../components/ui/Logo';

// Define the type for fetched navigation links
interface NavLinkItem {
  id: string;
  link: string;
  title: string;
  priority?: number;
}

const Navbar: React.FC = () => {
  const {
    data: navLinks = [],
    isLoading,
    isError,
  } = useFetchAPI('navLinks', `/api/navLinks.json`);

  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close nav on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Render fallback for loading or error states
  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <header
        className={`pointer-events-none fixed top-0 z-50 flex w-full items-start justify-between p-6 transition-all duration-1000 ease-in-out`}
      >
        <Logo
          aprops={`flex justify-center transition-1000 pointer-events-auto object-contain origin-top-left pointer-events-auto ${
            visible ? '-translate-y-2' : '-translate-y-[200%]'
          }
          ${window.scrollY > 0 ? 'scale-75' : 'scale-100'}
          `}
          className={`transition-1000 h-20 w-auto rounded-xl bg-white object-contain p-3 md:h-28`}
        />

        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={toggleNav}
            className="transition-300 inline-flex w-fit origin-left scale-90 items-center justify-center gap-2 rounded-full border border-white bg-dark/30 px-4 py-2 text-white backdrop-blur-sm hover:border-green-500/80 hover:bg-green-500 hover:text-light md:scale-100"
            aria-label="Menu"
            title="Menu"
          >
            <TbMenu2 className="text-xl" />
            <span className="hidden font-semibold sm:block">Menu</span>
          </button>
        </div>
      </header>

      <div
        className={`transition-700 fixed inset-0 z-30 flex flex-1 items-end justify-end bg-black/50 backdrop-blur-sm ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`transition-700 fixed left-0 top-0 h-full w-full overflow-y-auto bg-light md:w-[28rem] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-5 flex items-center justify-center gap-2 text-2xl text-black"
          aria-label="Close"
          title="Close"
        >
          &#x2715;
        </button>

        <div className="flex size-full flex-col items-start gap-0 px-8 text-dark md:px-8">
          <div className="mt-7 w-full">
            <span className="text-xs uppercase tracking-wider text-dark/50">
              Web Pages
            </span>

            <ul className="links mt-6 flex flex-col items-start justify-start gap-2 md:gap-4">
              {navLinks.map((link: NavLinkItem) =>
                link.priority === 1 ? (
                  <li className="group w-full" key={link.id}>
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        `navlink ${isActive ? 'text-green-500' : 'text-dark'}`
                      }
                      aria-label={link.title}
                    >
                      {link.title}
                      <img
                        src={icon}
                        alt="Icon"
                        className="translate-x-4 rounded-full text-xl opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100"
                      />
                    </NavLink>
                  </li>
                ) : null,
              )}
            </ul>
            <hr className="my-12 border-dark/20" />
            <ul className="mt-6 flex flex-wrap gap-2 md:gap-4">
              {navLinks.map((link: NavLinkItem) =>
                link.priority === 0 ? (
                  <li className="group" key={link.id}>
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        `transition-300 rounded-full border border-dark/50 px-4 py-1 font-body text-sm font-normal text-dark backdrop-blur-sm group-hover:bg-dark/30 ${
                          isActive ? 'bg-dark/30' : ''
                        }`
                      }
                      aria-label={link.title}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
