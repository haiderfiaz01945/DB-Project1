import React from "react";
import { Link } from "react-router-dom"; 
import BackGd from "../assets/BackGd.png";  
 
const DashBoard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${BackGd})` }}
    >
<div className="p-6 bg-opacity-90 shadow-md rounded-lg  max-w-4xl mx-auto backdrop-blur-lg">
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
      </div>
    </div>
  );
};

export default DashBoard;
