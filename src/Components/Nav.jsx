import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
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
    hidden: { opacity: 0, x: 20 },
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
          <Link onClick={() => setIsSidebarOpen(false)} to={"/"} className="text-white hover:text-[#38BDF8] font-medium transition-colors duration-300">
            Dashboard
          </Link>
          <Link onClick={() => setIsSidebarOpen(false)} to={"/Db-Lab"} className="text-white hover:text-[#38BDF8] font-medium transition-colors duration-300">
            DB-Lab
          </Link>
          <Link onClick={() => setIsSidebarOpen(false)} to={"/order"} className="text-white hover:text-[#38BDF8] font-medium transition-colors duration-300">
            ---
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
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform sm:hidden z-50`}
        initial="hidden"
        animate={isSidebarOpen ? 'visible' : 'hidden'}
        variants={sidebarVariants}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <div className="text-2xl font-bold text-primary">DataBase</div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-primary focus:outline-none"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>
        
        <motion.div className="flex flex-col px-6 py-4 space-y-4">
          <motion.div variants={itemVariants}>
            <Link onClick={() => setIsSidebarOpen(false)} to={"/"} className="text-primary hover:text-[#38BDF8] font-medium transition-colors duration-300">
              Dashboard
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link onClick={() => setIsSidebarOpen(false)} to={"/Db-Lab"} className="text-primary hover:text-[#38BDF8] font-medium transition-colors duration-300">
              DB-Lab
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link onClick={() => setIsSidebarOpen(false)} to={"/order"} className="text-primary hover:text-[#38BDF8] font-medium transition-colors duration-300">
              ----
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link onClick={() => setIsSidebarOpen(false)} to={"/checked"} className="text-primary hover:text-[#38BDF8] font-medium transition-colors duration-300">
              ----
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Nav;
