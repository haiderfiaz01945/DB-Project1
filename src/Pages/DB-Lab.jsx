import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

function DBLab() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#E0F2FE] to-[#93C5FD] p-6">
      <h1 className="text-3xl font-extrabold text-[#0284C7] mb-8 tracking-wide">
        DB Lab Tasks
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {[1, 2, 3, 4, 5, 6].map((task) => (
          <motion.div
            key={task}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to={`/Lab-Task-${task}`}
              className="w-full px-6 py-4 rounded-lg bg-[#0284C7] text-white font-semibold text-lg text-center shadow-md transform hover:bg-[#0369A1] transition-colors duration-300"
            >
              Lab Task {task}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DBLab;
