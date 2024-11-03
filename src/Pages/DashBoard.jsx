import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const DashBoard = () => {
  return (
    <div className="p-6 mt-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-4">
        Introduction to Databases
      </h1>
      <p className="text-lg mb-4">
        A database is a structured collection of data that is stored and accessed electronically. It allows for the efficient organization, retrieval, and manipulation of data. Databases are crucial for various applications, enabling businesses and organizations to store, manage, and analyze their information systematically.
      </p>
      <p className="text-lg mb-4">
        In this course, we will be focusing on MySQL, a popular relational database management system (RDBMS). MySQL uses structured query language (SQL) for accessing and managing the data it holds. It is widely used for web applications and is an essential skill for any aspiring developer or data analyst.
      </p>
      <p className="text-lg mb-4">
        We will be using XAMPP, a free and open-source cross-platform web server solution stack package, to set up our MySQL database. XAMPP makes it easy to create a local server environment for testing and development purposes, allowing us to learn and experiment with MySQL effectively.
      </p>
      <p className="text-lg mb-4">
        By the end of this course, you will have a solid understanding of MySQL, including how to create databases, manipulate data, and perform various SQL operations.
      </p>
      <Link
        to="/Db-Lab" // Change "/lab-tasks" to your actual Lab Tasks route
        className="mt-4 inline-block bg-primary text-white font-semibold py-2 px-4 rounded shadow hover:bg-primaryDark transition-colors duration-300"
      >
        Go to Lab Tasks
      </Link>
    </div>
  );
};

export default DashBoard;
