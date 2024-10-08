import React, { useEffect, useState } from "react";
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const navlinks = [
    { path: "/", label: "Home" },
    { path: "/course", label: "Course" },
    { path: "/about-us", label: "About us" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const nav = document.querySelector("header");
    const navHeight = 80;
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - navHeight) > 5) {
        if (currentScrollY > lastScrollY && currentScrollY > navHeight) {
          nav.classList.add("nav-up");
          setMenu(false);
        } else if (currentScrollY < lastScrollY) {
          nav.classList.remove("nav-up");
          nav.classList.toggle("fixed", currentScrollY > 0);
        }
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    <header className="top-0 left-0 w-full h-20 2xl:h-32 text-white-default bg-navbar-bg z-[999] transition-all duration-300 font-inter">
      <div className="px-4 lg:px-8 w-full h-full flex justify-between items-center">
        <NavLink to="/" className="logo inline-flex">
          <img src={logo} alt="Logo" className="w-56 md:w-[20vw] xl:w-[20vw]" />
        </NavLink>

        <nav className={`absolute w-full h-screen md:h-auto -top-[1px] ${menu ? "translate-y-0 h-full top-[1px]" : "-translate-y-full h-auto -top-[1px]"} left-0 md:text-white-default bg-navbar-bg md:translate-y-0 md:relative md:w-fit md:bg-transparent transition-transform duration-500`}>
          <div className="w-full pt-5 pb-6 text-white-default backdrop-blur-md z-[999] md:hidden">
            <div className="container w-full h-full flex justify-between items-center">
              <NavLink to="/" className="logo inline-flex">
                <img src={logo} alt="Logo" className="w-56 md:w-[20vw] xl:w-[20vw]" />
              </NavLink>

              <div onClick={() => setMenu(false)} className={`hamburger ${menu ? 'active' : ''} cursor-pointer flex flex-col gap-1 h-6 justify-center lg:hidden`}>
                <div className="pointer-events-none line w-6 h-[2px]"></div>
                <div className="pointer-events-none line w-6 h-[2px]"></div>
              </div>
            </div>
          </div>

          <div className={`flex flex-col justify-between md:h-auto md:flex-row ${menu ? "opacity-100 delay-150" : "opacity-0 md:opacity-100"} transition-opacity duration-200`}>
            <ul className="flex flex-col leading-none gap-5 pt-5 md:pt-0 px-4 md:px-8 left-0 lg:p-0 md:flex-row md:items-center md:gap-6 lg:gap-10 md:border-none">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenu(false)}
                    className={({ isActive }) => `${isActive ? 'text-brightYellow md:!font-medium' : ''} transition-all duration-300 uppercase md:capitalize text-[6vw] md:text-[1.5vw] lg:text-[1.1vw] font-bold md:font-medium tracking-normal`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="absolute flex bottom-5 md:static px-4 md:px-0 w-full flex-col md:hidden gap-[10px]">
              <button className="default_btn w-full flex justify-center">Login</button>
              <button className="default_btn w-full flex justify-center bg-deepPurple text-white-default shadow-deepPurple/30">Sign Up</button>
            </div>
          </div>
        </nav>

        <div className="hidden px-4 md:px-0 w-full md:w-fit md:flex gap-[10px]">
          <button className="default_btn">Login</button>
          <button className="default_btn bg-deepPurple text-white-default shadow-deepPurple/30">Sign Up</button>
        </div>

        <div onClick={() => setMenu(true)} className={`hamburger ${menu ? 'active' : ''} cursor-pointer flex flex-col gap-1 md:hidden`}>
          <div className="pointer-events-none line w-6 h-[2px] bg-white-default"></div>
          <div className="pointer-events-none line w-6 h-[2px] bg-white-default"></div>
        </div>
      </div>
    </header>
  );
}
