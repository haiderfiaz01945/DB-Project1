import React from "react";

const LabTask5 = () => {
  return (
    <div className="p-6 mt-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-4">
        Lab Task 5 - Made by Badar
      </h1>
      <p className="text-md text-gray-600 mb-4">
        This task involves creating several database tables and inserting sample data into them.
      </p>

      <h2 className="text-xl font-semibold text-primary mb-2">
        1. Employee Table
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE Employees ( <br />
          &nbsp;&nbsp; EmployeeID INT NOT NULL PRIMARY KEY, <br />
          &nbsp;&nbsp; FirstName VARCHAR(50), <br />
          &nbsp;&nbsp; LastName VARCHAR(50), <br />
          &nbsp;&nbsp; Email VARCHAR(100) UNIQUE, <br />
          &nbsp;&nbsp; HireDate DATE NOT NULL <br />
          );
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        2. Departments Table
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE Departments ( <br />
          &nbsp;&nbsp; DepartmentID INT NOT NULL PRIMARY KEY, <br />
          &nbsp;&nbsp; DepartmentName VARCHAR(100) NOT NULL UNIQUE <br />
          );
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        3. Products Table
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE Products ( <br />
          &nbsp;&nbsp; ProductID INT NOT NULL PRIMARY KEY, <br />
          &nbsp;&nbsp; ProductName VARCHAR(100) NOT NULL, <br />
          &nbsp;&nbsp; Price DECIMAL(10, 2) DEFAULT 0.00, <br />
          &nbsp;&nbsp; InStock INT DEFAULT 100 <br />
          );
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        4. CourseEnrollments Table
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE CourseEnrollments ( <br />
          &nbsp;&nbsp; StudentID INT NOT NULL, <br />
          &nbsp;&nbsp; CourseID INT NOT NULL, <br />
          &nbsp;&nbsp; EnrollmentDate DATE NOT NULL, <br />
          &nbsp;&nbsp; PRIMARY KEY (StudentID, CourseID) <br />
          );
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        5. Customers Table
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE Customers ( <br />
          &nbsp;&nbsp; CustomerID INT NOT NULL PRIMARY KEY, <br />
          &nbsp;&nbsp; CustomerName VARCHAR(100) NOT NULL, <br />
          &nbsp;&nbsp; ContactEmail VARCHAR(100) UNIQUE <br />
          );
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        6. Orders Table
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE Orders ( <br />
          &nbsp;&nbsp; OrderID INT NOT NULL PRIMARY KEY, <br />
          &nbsp;&nbsp; OrderDate DATE NOT NULL, <br />
          &nbsp;&nbsp; CustomerID INT, <br />
          &nbsp;&nbsp; FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) <br />
          );
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        7. Client Master Table
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE client_master ( <br />
          &nbsp;&nbsp; client_no VARCHAR(6), <br />
          &nbsp;&nbsp; name VARCHAR(20), <br />
          &nbsp;&nbsp; address1 VARCHAR(30), <br />
          &nbsp;&nbsp; address2 VARCHAR(30), <br />
          &nbsp;&nbsp; city VARCHAR(15), <br />
          &nbsp;&nbsp; state VARCHAR(15), <br />
          &nbsp;&nbsp; pincode INT, <br />
          &nbsp;&nbsp; bal_due DECIMAL(10,2), <br />
          &nbsp;&nbsp; PRIMARY KEY (client_no) <br />
          );
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        8. Insertions for Client Master
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          INSERT INTO client_master (client_no, name, address1, address2, city, state, pincode, bal_due) <br />
          VALUES <br />
          &nbsp;&nbsp;('0001', 'Ivan', '123 Marine Drive', 'Near Beach', 'Bombay', 'Maharashtra', 400054, 15000), <br />
          &nbsp;&nbsp;('0002', 'Vandana', '456 Anna Nagar', 'Opposite Park', 'Madras', 'Tamilnadu', 780001, 0), <br />
          &nbsp;&nbsp;('0003', 'Pramada', '789 Lokhandwala', 'Near Mall', 'Bombay', 'Maharashtra', 400057, 5000), <br />
          &nbsp;&nbsp;('0004', 'Basu', '101 Dadar East', 'Above Cafe', 'Bombay', 'Maharashtra', 400056, 0), <br />
          &nbsp;&nbsp;('0005', 'Ravi', '202 Connaught Place', 'Block B', 'Delhi', 'Delhi', 100001, 2000), <br />
          &nbsp;&nbsp;('0006', 'Rukmini', '303 Bandra West', 'Near Market', 'Bombay', 'Maharashtra', 400050, 0);
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        9. Product Master Table
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE product_master ( <br />
          &nbsp;&nbsp; product_no VARCHAR(10) NOT NULL, <br />
          &nbsp;&nbsp; description TEXT, <br />
          &nbsp;&nbsp; profit_percent DECIMAL(5,2), <br />
          &nbsp;&nbsp; unit_measure VARCHAR(20), <br />
          &nbsp;&nbsp; qty_on_hand INT, <br />
          &nbsp;&nbsp; reorder_lvl FLOAT, <br />
          &nbsp;&nbsp; sell_price FLOAT, <br />
          &nbsp;&nbsp; cost_price DECIMAL(10,2), <br />
          &nbsp;&nbsp; PRIMARY KEY (product_no) <br />
          );
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        10. Insertion for Product Master
      </h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          INSERT INTO product_master (product_no, description, profit_percent, unit_measure, qty_on_hand, reorder_lvl, sell_price, cost_price) VALUES <br />
          &nbsp;&nbsp;('P00001', '1.44floppies', 5, 'Piece', 500, 50, 25.00, 20.00), <br />
          &nbsp;&nbsp;('P00002', 'Two Harddisks', 5, 'Set', 100, 10, 20.00, 15.00), <br />
          &nbsp;&nbsp;('P00003', 'Magic Mouse', 10, 'Piece', 250, 30, 30.00, 20.00), <br />
          &nbsp;&nbsp;('P00004', 'Laptop', 15, 'Piece', 80, 20, 1000.00, 900.00), <br />
          &nbsp;&nbsp;('P00005', 'Wireless Keyboard', 8, 'Piece', 400, 40, 50.00, 45.00);
        </code>
      </pre>
    </div>
  );
};

export default LabTask5;
