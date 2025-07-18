"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { usePathname } from "next/navigation";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const stickyHandler = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  typeof window !== "undefined" &&
    window.addEventListener("scroll", stickyHandler);

  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-gray-dark dark:!bg-opacity-100"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="Aspect Infotech Logo"
                  width={180}
                  height={40}
                  className="h-auto w-auto max-h-10"
                  priority
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-4 shadow dark:bg-gray-800 dark:shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none xl:ml-10 lg:!bg-transparent ${
                    navbarOpen
                      ? "block"
                      : "hidden"
                  } `}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base font-medium text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 ${
                              pathname === menuItem.path
                                ? "!opacity-100"
                                : ""
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => setNavbarOpen(false)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base font-medium text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.48592 9.84375C7.39644 9.7563 7.3517 9.6499 7.3517 9.52455C7.3517 9.3992 7.39644 9.2928 7.48592 9.20535C7.57539 9.1179 7.68477 9.07415 7.81602 9.07415H10.4466C10.5578 9.07415 10.6547 9.1179 10.7371 9.20535C10.8195 9.2928 10.8607 9.3992 10.8607 9.52455C10.8607 9.6499 10.8195 9.7563 10.7371 9.84375C10.6547 9.9312 10.5578 9.97495 10.4466 9.97495H7.81602ZM1.55703 6.30469C1.38328 6.30469 1.24123 6.24707 1.13086 6.13184C1.02049 6.01662 0.965332 5.87891 0.965332 5.71875C0.965332 5.55859 1.02049 5.42088 1.13086 5.30566C1.24123 5.19043 1.38328 5.13281 1.55703 5.13281H13.1958C13.3474 5.13281 13.4837 5.19043 13.6047 5.30566C13.7257 5.42088 13.7862 5.55859 13.7862 5.71875C13.7862 5.87891 13.7257 6.01662 13.6047 6.13184C13.4837 6.24707 13.3474 6.30469 13.1958 6.30469H1.55703ZM4.6958 2.64062C4.56523 2.64062 4.45443 2.583 4.3634 2.46777C4.27236 2.35254 4.21684 2.21484 4.21684 2.05469C4.21684 1.89453 4.27236 1.75682 4.3634 1.6416C4.45443 1.52637 4.56523 1.46875 4.6958 1.46875H11.3069C11.4401 1.46875 11.5722 1.52637 11.7033 1.6416C11.8345 1.75682 11.8951 1.89453 11.8951 2.05469C11.8951 2.21484 11.8345 2.35254 11.7033 2.46777C11.5722 2.583 11.4401 2.64062 11.3069 2.64062H4.6958Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div className="submenu relative top-full left-0 rounded-md bg-white transition-[all_0.3s_ease-in-out] dark:bg-gray-800 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-[105%] lg:group-hover:opacity-100">
                              {menuItem.submenu?.map((submenu) => (
                                <Link
                                  key={submenu.id}
                                  href={submenu.path || "/"}
                                  className="block py-2.5 text-sm font-medium text-dark hover:opacity-70 dark:text-white dark:hover:bg-gray-700 lg:px-4 lg:py-2 lg:text-base"
                                >
                                  {submenu.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
