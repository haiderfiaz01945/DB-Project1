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
          <a href="https://www.instagram.com/badrfiaz_/" className="flex justify-center items-center bg-white rounded-full p-2 mx-2 transition duration-500 hover:bg-primaryDark">
            <FaInstagram className="text-primary opacity-90 text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/badar-fiaz-689a31312" className="flex justify-center items-center bg-white rounded-full p-2 mx-2 transition duration-500 hover:bg-primaryDark">
            <FaLinkedinIn className="text-primary opacity-90 text-2xl" />
          </a>
        </div>

        {/* Footer Navigation */}
      <div className="footerNav mb-6">
        <ul className="flex flex-wrap justify-center list-none">
          {[
            { name: 'Lab Tasks', path: '/Db-Lab' },
            { name: 'Lab-2', path: '/lab-task-2' },
            { name: 'Lab-3', path: '/lab-task-3' },
            { name: 'Lab-4', path: '/lab-task-4' },
            { name: 'Lab-5', path: '/lab-task-5' },
            { name: 'Lab-6', path: '/lab-task-6' },
            { name: 'Lab-8', path: '/lab-task-8' },
            { name: 'Lab-9', path: '/lab-task-9' },
            { name: 'Lab-10', path: '/lab-task-10' },
            { name: 'Lab-12', path: '/lab-task-12' },
          ].map((link, index) => (
            <li key={index} className="mx-2 sm:mx-4 whitespace-nowrap">
              <a
                href={link.path}
                className="text-white opacity-70 text-lg transition duration-300 hover:opacity-100"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footerBottom bg-primary py-4">
        <p className="text-white text-center designer">
          &copy; {new Date().getFullYear()} Badar Fiaz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
