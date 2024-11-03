// Footer.js
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-6 footerContainer">
        {/* Social Media Icons */}
        <div className="socialIcons flex justify-center mb-6">
          <a href="#" className="flex justify-center items-center bg-white rounded-full p-2 mx-2 transition duration-500 hover:bg-primaryDark">
            <FaFacebookF className="text-primary opacity-90 text-2xl" />
          </a>
          <a href="#" className="flex justify-center items-center bg-white rounded-full p-2 mx-2 transition duration-500 hover:bg-primaryDark">
            <FaInstagram className="text-primary opacity-90 text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/badar-fiaz-689a31312" className="flex justify-center items-center bg-white rounded-full p-2 mx-2 transition duration-500 hover:bg-primaryDark">
            <FaLinkedinIn className="text-primary opacity-90 text-2xl" />
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="footerNav mb-6">
          <ul className="flex justify-center list-none">
            {['Lab Tasks Overview', 'Lab Task 1', 'Lab Task 2', 'Lab Task 3', 'Lab Task 4', 'Lab Task 5', 'Lab Task 6'].map((link, index) => (
              <li key={index} className="mx-4">
                <a
                  href={`/${link.replace(/\s+/g, '-').toLowerCase()}`}
                  className="text-white opacity-70 text-lg transition duration-300 hover:opacity-100"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footerBottom bg-primary py-4">
        <p className="text-white text-center designer">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
