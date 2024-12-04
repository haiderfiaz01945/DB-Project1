import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";  // Importing motion from framer-motion
import BackGd from "../assets/BackGd.png";  

const DashBoard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${BackGd})` }}
    >
      <motion.div
        className="p-6 bg-opacity-90 shadow-md rounded-lg max-w-md w-full mx-auto backdrop-blur-lg"
        initial={{ opacity: 0, y: -50 }}  // Initial state: off-screen and invisible
        animate={{ opacity: 1, y: 0 }}    // Final state: fully visible and centered
        transition={{ type: "spring", stiffness: 100, damping: 25 }}  // Adding transition properties for smooth animation
      >
        <h1 className="text-2xl font-bold text-primary mb-4">
          Introduction to Databases
        </h1>
        <p className="text-lg mb-4">
          A database is a structured collection of data that is stored and accessed electronically. It allows for the efficient organization, retrieval, and manipulation of data. Databases are crucial for various applications, enabling businesses and organizations to store, manage, and analyze their information systematically.
        </p>
        <p>Here are some tasks to enhance your skills, you can also view solutions.</p>

        <Link
          to="/Db-Lab" 
          className="mt-4 inline-block bg-primary text-white font-semibold py-2 px-4 rounded shadow hover:bg-primaryDark transition-colors duration-300"
        >
          Learn more 
        </Link>
      </motion.div>
    </div>
  );
};

export default DashBoard;
