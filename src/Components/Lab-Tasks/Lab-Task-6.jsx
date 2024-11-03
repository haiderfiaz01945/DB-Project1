import React from "react";

const LabTask6 = () => {
  return (
    <div className="p-6 mt-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-4">
        Lab Task 6
      </h1>

      <h2 className="text-xl font-semibold text-primary mb-2">
        Question 1: Creating Tables
      </h2>

      <h3 className="text-lg font-semibold text-primary mb-2">
        1. Creating the Challan_Header table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE Challan_Header (<br />
          &nbsp;&nbsp; Challan_no VARCHAR(6) PRIMARY KEY,<br />
          &nbsp;&nbsp; s_order_no VARCHAR(6) REFERENCES sales_order(s_order_no),<br />
          &nbsp;&nbsp; challan_date DATE NOT NULL,<br />
          &nbsp;&nbsp; billed_yn CHAR(1) DEFAULT 'N' CHECK (billed_yn IN ('Y', 'N'))<br />
          );
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        2. Creating the Challan_Details table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          CREATE TABLE Challan_Details (<br />
          &nbsp;&nbsp; Challan_no VARCHAR(6) PRIMARY KEY,<br />
          &nbsp;&nbsp; Product_no VARCHAR(6) REFERENCES product_master(Product_no),<br />
          &nbsp;&nbsp; Qty_disp INT NOT NULL<br />
          );
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        Question 2: Inserting Values
      </h2>

      <h3 className="text-lg font-semibold text-primary mb-2">
        1. Insert values into Challan_Header table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          INSERT INTO Challan_Header (Challan_no, s_order_no, challan_date, billed_yn)<br />
          VALUES<br />
          &nbsp;&nbsp;('CH9001', '019001', TO_DATE('12-DEC-1995', 'DD-MON-YYYY'), 'Y'),<br />
          &nbsp;&nbsp;('CH865', '046866', TO_DATE('12-NOV-1995', 'DD-MON-YYYY'), 'Y'),<br />
          &nbsp;&nbsp;('CH3965', '010008', TO_DATE('12-OCT-1995', 'DD-MON-YYYY'), 'Y');<br />
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        2. Insert values into Challan_Details table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          INSERT INTO Challan_Details (Challan_no, Product_no, Qty_disp)<br />
          VALUES<br />
          &nbsp;&nbsp;('CH865', 'P00001', 10),<br />
          &nbsp;&nbsp;('CH3965', 'P07975', 2);<br />
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        Select from Challan_Header:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          SELECT * FROM Challan_Header;<br />
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-primary mb-2">
        Additional Questions
      </h2>

      <h3 className="text-lg font-semibold text-primary mb-2">
        1. Make the primary key to client_no in client_master:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          ALTER TABLE client_master<br />
          ADD PRIMARY KEY (client_no);<br />
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        2. Add a new column phone_no in the client_master table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          ALTER TABLE client_master ADD phone_no VARCHAR(15);<br />
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        3. Add the NOT NULL constraint in the product_master table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          ALTER TABLE product_master<br />
          ALTER COLUMN description SET NOT NULL,<br />
          ALTER COLUMN profit_percent SET NOT NULL,<br />
          ALTER COLUMN sell_price SET NOT NULL,<br />
          ALTER COLUMN cost_price SET NOT NULL;<br />
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        4. Change the size of client_no field in the client_master table:
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          ALTER TABLE client_master<br />
          ALTER COLUMN client_no TYPE VARCHAR(50);<br />
        </code>
      </pre>

      <h3 className="text-lg font-semibold text-primary mb-2">
        5. Select product_no and description where profit_percent is between 20 and 30 (both inclusive):
      </h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto" style={{ overflowWrap: 'break-word' }}>
        <code>
          SELECT product_no, description<br />
          FROM product_master<br />
          WHERE profit_percent BETWEEN 20 AND 30;<br />
        </code>
      </pre>
    </div>
  );
};

export default LabTask6;
