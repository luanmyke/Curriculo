import React, { useState, useEffect } from "react";
import { HiCode } from "react-icons/hi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useDarkMode } from "./DarkModeContext";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className='text-white flex  pl-8 pt-2 pb-2 pr-8 justify-between tracking-tight bg-black dark:bg-gray-200 dark:text-black'>
        <div className=' mt-1 w-10 mx-2'>
          <a href='#'>
            <HiCode size={30} />
          </a>
        </div>
        {isSmallScreen ? (
          <ul className='flex font-medium'>
            <li className='pr-4 pt-3'>
              <BsFillMoonStarsFill
                onClick={toggleDarkMode}
                className='cursor-pointer'
              />
            </li>
          </ul>
        ) : (
          <ul className='flex font-medium'>
            <li className='pr-4 pt-3'>
              <BsFillMoonStarsFill
                onClick={toggleDarkMode}
                className='cursor-pointer'
              />
            </li>
            <div className='pt-2'>
              <a href='#'>
                <Link
                  to='aboutMe'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='pr-2 '>
                  About Me
                </Link>
              </a>
              <a href='#'>
                <Link
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='pr-2'>
                  Projects
                </Link>
              </a>
              <a href='#'>
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='pr-2'>
                  Contact
                </Link>
              </a>
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
