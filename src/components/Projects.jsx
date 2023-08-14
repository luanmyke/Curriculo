import React from "react";
import { useDarkMode } from "./DarkModeContext";

const Projects = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <section
        id='projects'
        className='text-gray-600 body-font dark:bg-gray-100'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap w-full mb-20'>
            <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-white dark:text-black'>
                Projects
              </h1>
              <div className='h-1 w-[125px] bg-indigo-500 rounded'></div>
            </div>
            <p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
              Dois projetos básicos aonde acredito que demonstra bem o meu
              conhecimento, gostos e em que posso ser útil em um trabalho.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='md:w-1/2 p-4'>
              <div className='bg-gray-100 p-6 rounded-lg dark:bg-black'>
                <img
                  className='rounded w-full object-cover object-center mb-6'
                  src='https://dummyimage.com/720x400'
                  alt='content'
                />
                <h2 className='text-lg text-indigo-500 font-medium title-font mb-4'>
                  F1 Interative Website
                </h2>
                <p className='leading-relaxed text-base'>
                  Um projeto que sempre tive um sonho de fazer utilizando...
                  Para aprender como funciona algumas partes melhor de um carro
                  de fórmula 1 com interatividade.
                </p>
              </div>
            </div>
            <div className='md:w-1/2 p-4'>
              <div className='bg-gray-100 p-6 rounded-lg dark:bg-black'>
                <img
                  className='rounded w-full object-cover object-center mb-6'
                  src='https://dummyimage.com/721x401'
                  alt='content'
                />
                <h2 className='text-lg text-indigo-500 font-medium title-font mb-4'>
                  Second Project
                </h2>
                <p className='leading-relaxed text-base'>
                  Um projeto mais voltado para aplicações no dia a dia, pensando
                  em UI/UX, e que possa ser implementado em um ambiente de
                  trabalho.
                </p>
              </div>
            </div>
            <div className='xl:w-1/4 md:w-1/2 p-4'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
