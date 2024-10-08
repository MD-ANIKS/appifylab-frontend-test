import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';

export default function Hero() {
  return (
    <section id="hero" className="font-inter bg-cover bg-no-repeat bg-gradient-to-r from-hero-darkPurple to-hero-lightPurple">
      <div className="mask w-full h-full bg-gradient-to-r from-black-default/60 to-black-default/30 md:from-black-default/50 md:to-black-default/10">
        <div className="container h-full">
          <div className="hero_wrapper h-full flex items-center">
            <div className="hero_content flex flex-col justify-center items-center text-center md:text-left md:items-start h-full md:h-[80%] w-full md:w-1/2">
              <h1 className="text-white-default text-2xl leading-7 max-w-[365px] md:max-w-none md:text-[5vw] font-semibold md:leading-[5.4vw]">
                Learn Code <br /> From top{' '}
                <span className="text-brightYellow underline underline-offset-8">Coder</span>
              </h1>
              <p className="text-white-default text-sm font-normal max-w-[360px] md:max-w-none md:text-[1.58vw] md:leading-[2vw] pt-4 md:pt-8 pb-8">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
              </p>

              {/* Hero Buttons */}
              <div className="flex flex-col md:flex-row gap-2">
                <Link to="/" className="default_btn w-full md:w-fit">Get Started</Link>
                <Link to="/" className="default_btn bg-deepPurple shadow-deepPurple/30 text-white-default flex gap-2 items-center">
                  <FaPlayCircle /> How it works
                </Link>
              </div>

              {/* Hero Company Reviews */}
              <div className="flex flex-col pt-4 md:pt-8">
                <div className="flex flex-wrap justify-center items-center gap-1">
                  <div className="stars flex text-[#F7B933] text-[20px]">
                    {[...Array(5)].map((_, index) => (
                      <IoStarSharp key={index} />
                    ))}
                  </div>
                  <p className="text-white-default text-sm font-normal max-w-[360px] md:max-w-none md:text-[1.35vw] md:leading-[1.35vw]">
                    Based on 10,000+ reviews on
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
