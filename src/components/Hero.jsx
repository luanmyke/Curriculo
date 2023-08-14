import React from "react";
import Tilt from "react-parallax-tilt";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useDarkMode } from "./DarkModeContext";

const Hero = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='relative flex flex-col  dark:bg-white'>
        <div className='mt-[400px] items-center flex flex-col justify-center max-w-lg mx-auto md:flex-row'>
          <Tilt
            className='track-on-window'
            perspective={500}
            scale={1}
            trackOnWindow={true}
            tiltReverse={true}>
            <img
              src='https://raw.githubusercontent.com/luanmyke/curriculo/main/public/memoji-removebg.png'
              className='w-[85px] h-[120px] m-5 bg-indigo-500 rounded-full'
            />
          </Tilt>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-indigo-500 mx-auto'>
              Oi, Eu sou Luan
            </h1>
            <h4 className='text-gray-500 italic w-[350px] text-center mx-auto'>
              Fron End Developer, Apaixonado por Formula 1 e games!
            </h4>
          </div>
        </div>
        <div className='flex-grow'>
          <AiOutlineArrowDown
            size={50}
            className='flex mx-auto animate-bounce mt-28 text-indigo-500 md:mt-60'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
