import React from "react";

const LabTask8 = () => {
  return (
    <div className="p-6 mt-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-4">Lab Task 8</h1>

      <h2 className="text-xl font-semibold text-primary mb-2">
        Question 1: Creating Tables
      </h2>

      <h3 className="text-lg font-semibold text-primary mb-2">
        1. Creating the Departments table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
          CREATE TABLE departments (<br />
          &nbsp;&nbsp;dept_id INT PRIMARY KEY,<br />
          &nbsp;&nbsp;dept_name VARCHAR(50)<br />
          );
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        2. Insert data into Departments table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
          INSERT INTO departments (dept_id, dept_name) VALUES<br />
          &nbsp;&nbsp;(101, 'HR'),<br />
          &nbsp;&nbsp;(102, 'Engineering'),<br />
          &nbsp;&nbsp;(103, 'Marketing'),<br />
          &nbsp;&nbsp;(104, 'Sales');
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        3. Creating the Employees table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
          CREATE TABLE employees (<br />
          &nbsp;&nbsp;emp_id INT PRIMARY KEY,<br />
          &nbsp;&nbsp;emp_name VARCHAR(50),<br />
          &nbsp;&nbsp;dept_id INT,<br />
          &nbsp;&nbsp;FOREIGN KEY (dept_id) REFERENCES departments(dept_id)<br />
          );
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        4. Insert data into Employees table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
          INSERT INTO employees (emp_id, emp_name, dept_id) VALUES<br />
          &nbsp;&nbsp;(1, 'Alice', 101),<br />
          &nbsp;&nbsp;(2, 'Bob', 102),<br />
          &nbsp;&nbsp;(3, 'Charlie', 103),<br />
          &nbsp;&nbsp;(4, 'David', 101);
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        Question 2: SQL Queries for Joins
      </h2>

      <h3 className="text-lg font-semibold text-primary mb-2">
        1. Equi Join:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
        SELECT e.emp_name, d.dept_name <br/>
FROM employees e, departments d <br/>
WHERE e.dept_id = d.dept_id; <br/>
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        2. Inner Join:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
        SELECT e.emp_name, d.dept_name<br/>
FROM employees e<br/>
INNER JOIN departments d ON e.dept_id = d.dept_id;<br/>
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        3. Left Outer Join:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
          SELECT employees.emp_name, departments.dept_name<br />
          FROM employees<br />
          LEFT OUTER JOIN departments<br />
          ON employees.dept_id = departments.dept_id;
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        4. Right Outer Join:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
          SELECT employees.emp_name, departments.dept_name<br />
          FROM employees<br />
          RIGHT OUTER JOIN departments<br />
          ON employees.dept_id = departments.dept_id;
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        5. Full Outer Join:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>
          SELECT employees.emp_name, departments.dept_name<br />
          FROM employees<br />
          LEFT OUTER JOIN departments<br />
          ON employees.dept_id = departments.dept_id<br />
          UNION<br />
          SELECT employees.emp_name, departments.dept_name<br />
          FROM employees<br />
          RIGHT OUTER JOIN departments<br />
          ON employees.dept_id = departments.dept_id;
        </code>
      </pre>
    </div>
  );
};

export default LabTask8;
