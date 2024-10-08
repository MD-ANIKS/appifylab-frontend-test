import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-full bg-navbar-bg pt-7 md:pt-3">
      <div className="px-4 lg:px-8">
        {/* Footer Content */}
        <div className="footer_content text-white-secondary flex flex-col justify-center items-center h-[45vh] md:h-[65vh] w-full">
          <img src={logo} alt="Logo" className="w-40 md:w-[20vw] xl:w-[16vw]" />
          <div className="content flex flex-col gap-2 md:gap-3 xl:gap-4 2xl:gap-6 justify-center items-center text-center pt-8 pb-6 md:pt-10 md:pb-8">
            <h2 className="text-lg leading-5 md:text-[3vw] lg:text-[2vw] font-semibold text-white-default font-grotesk">
              Start Your Coding Journey Today!
            </h2>
            <p className="text-xs md:text-[1.4vw] md:leading-[2vw] lg:text-[1.1vw] lg:leading-[1.5vw] text-white-secondary font-montserrat-alternate max-w-[415px] xl:max-w-[540px] 2xl:max-w-none">
              Join thousands of aspiring developers and elevate your skills with hands-on courses tailored for all levels. Your future starts here—enroll now!
            </p>
          </div>
          <Link to="/" className="default_btn locker px-4 py-3 text-xs md:px-5 md:py-3 md:text-[1.5vw] 2xl:px-10 2xl:py-5 2xl:text-[1.2vw] lg:text-[1.1vw]">
            Get Started Now
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="copyright text-xs md:text-[1.1vw] mx-auto flex flex-col md:flex-row gap-2 justify-between items-center font-montserrat-alternate text-white-secondary py-6">
          <p>&copy; CodeLearn {currentYear}, All rights reserved.</p>
          <div className="space-x-4">
            <Link to="/terms" className="hover:text-white-default">Terms</Link>
            <Link to="/privacy-policy" className="hover:text-white-default">Privacy</Link>
            <Link to="/cookies-policy" className="hover:text-white-default">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
