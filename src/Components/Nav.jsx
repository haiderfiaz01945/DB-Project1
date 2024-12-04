import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social media icons

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: '-100%' }, // Move the sidebar off-screen to the left
    visible: {
      x: 0, // Bring the sidebar back to its visible position
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const handleOverlayClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="top-0 left-0 w-full bg-primary py-4 px-6 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          onClick={() => setIsSidebarOpen(false)} 
          to={'/'} 
          className="text-2xl font-bold text-white"
        >
          Databases
        </Link>

        <div className="sm:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white focus:outline-none"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>

        <div className="hidden sm:flex sm:items-center sm:space-x-6">
          <Link to={"/"} className="text-white hover:text-[#38BDF8] font-medium transition-colors duration-300">
            Dashboard
          </Link>
          <Link to={"/Db-Lab"} className="text-white hover:text-[#38BDF8] font-medium transition-colors duration-300">
            Lab-Tasks
          </Link>
          <Link to={"/Sql-Keys"} className="text-white hover:text-[#38BDF8] font-medium transition-colors duration-300">
            SQL Queries
          </Link>
          <Link to={"/Learn"} className="text-white hover:text-[#38BDF8] font-medium transition-colors duration-300">
            Learn
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      <motion.div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform sm:hidden z-50`}
        initial="hidden"
        animate={isSidebarOpen ? 'visible' : 'hidden'}
        variants={sidebarVariants}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <div className="text-2xl font-bold text-primary">Database</div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-primary focus:outline-none"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>
        
        <motion.div className="flex flex-col px-6 py-4 space-y-4">
          {[{ name: 'Dashboard', path: '/' },
            { name: 'DB Lab', path: '/Db-Lab' },
            { name: 'SQL Queries', path: '/Sql-Keys' },
            { name: 'Learn', path: '/Learn' },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link 
                onClick={() => setIsSidebarOpen(false)} 
                to={item.path} 
                className="text-primary hover:text-[#38BDF8] font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* Social Media Section */}
          <div className="container mx-auto px-30 footerContainer  pt-60">
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
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Nav;
