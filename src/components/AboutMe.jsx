import React from "react";
import { useDarkMode } from "./DarkModeContext";
const AboutMe = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='bg-white dark:bg-black' id='aboutMe'>
        <div className='p-12 text-justify flex flex-col md:flex-row md:max-h-[400px]'>
          <div className='component-container relative mx-auto flex items-center justify-center md:mt-[490px]'>
            <div className='absolute-center '>
              <div className='absolute-box w-[250px] h-[329px] bg-black rounded-xl skew-x-6 -translate-x-7 -rotate-0 dark:bg-white'></div>
              <div className='absolute-box w-[250px] h-[332px] bg-indigo-500 rounded-xl skew-x-3 -translate-x-3 -translate-y-[333px] rotate-2'></div>
              <img
                src='./public/profile.jpg'
                className='max-w-[250px] rounded-xl -translate-y-[666px] rotate-3'
              />
            </div>
          </div>
          <span className='mx-auto max-w-md -mt-[620px] text-sm font-semibold md:m-auto md:ml-10  dark:text-white'>
            Foco em utilizar ferramentas novas e eficientes, que ajudem na
            produtividade e inovação, sempre tive um lado mais designer começar
            a utilizar o photoshop desde novo tem grande influencial hoje em
            dia, sou apaixonado em fórmula 1, games, coding, puzzles e cultura
            nerd em geral.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
