import React from 'react';

function LabTask3() {
  return (
    <div className="p-8 min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Lab Task 3 - Database Management
      </h1>
      
      <div className="p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Q1. Create Tables
        </h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-black">
            i Client Master Table
          </h3>
          <div className="overflow-x-auto p-4 rounded-lg bg-background">
            <pre className="text-sm">
              <code>
                CREATE TABLE client_master (
                <br /> &nbsp;&nbsp;client_no VARCHAR(6),
                <br /> &nbsp;&nbsp;name VARCHAR(20),
                <br /> &nbsp;&nbsp;address1 VARCHAR(30),
                <br /> &nbsp;&nbsp;address2 VARCHAR(30),
                <br /> &nbsp;&nbsp;city VARCHAR(15),
                <br /> &nbsp;&nbsp;state VARCHAR(15),
                <br /> &nbsp;&nbsp;pincode INT,
                <br /> &nbsp;&nbsp;bal_due DECIMAL(10,2),
                <br /> &nbsp;&nbsp;PRIMARY KEY (client_no)
                <br />);
              </code>
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-black">
            Insert Data
          </h3>
          <div className="overflow-x-auto p-4 rounded-lg bg-background">
            <pre className="text-sm">
              <code>
                INSERT INTO client_master (client_no, name, address1, address2, city, state, pincode, bal_due) VALUES
                <br /> ('0001', 'Ivan', '123 Marine Drive', 'Near Beach', 'Bombay', 'Maharashtra', 400054, 15000),
                <br /> ('0002', 'Vandana', '456 Anna Nagar', 'Opposite Park', 'Madras', 'Tamilnadu', 780001, 0),
                <br /> ('0003', 'Pramada', '789 Lokhandwala', 'Near Mall', 'Bombay', 'Maharashtra', 400057, 5000),
                <br /> ('0004', 'Basu', '101 Dadar East', 'Above Cafe', 'Bombay', 'Maharashtra', 400056, 0),
                <br /> ('0005', 'Ravi', '202 Connaught Place', 'Block B', 'Delhi', 'Delhi', 100001, 2000),
                <br /> ('0006', 'Rukmini', '303 Bandra West', 'Near Market', 'Bombay', 'Maharashtra', 400050, 0);
              </code>
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-black">
            ii Product Master Table
          </h3>
          <div className="overflow-x-auto p-4 rounded-lg bg-background">
            <pre className="text-sm">
              <code>
                CREATE TABLE product_master (
                <br /> &nbsp;&nbsp;product_no VARCHAR(10) NOT NULL,
                <br /> &nbsp;&nbsp;description TEXT,
                <br /> &nbsp;&nbsp;profit_percent DECIMAL(5,2),
                <br /> &nbsp;&nbsp;unit_measure VARCHAR(20),
                <br /> &nbsp;&nbsp;qty_on_hand INT,
                <br /> &nbsp;&nbsp;reorder_lvl FLOAT,
                <br /> &nbsp;&nbsp;sell_price FLOAT,
                <br /> &nbsp;&nbsp;cost_price DECIMAL(10,2),
                <br /> &nbsp;&nbsp;PRIMARY KEY (product_no)
                <br />);
              </code>
            </pre>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-black">
            Insert Data
          </h3>
          <div className="overflow-x-auto p-4 rounded-lg bg-background">
            <pre className="text-sm">
              <code>
                INSERT INTO product_master (product_no, description, profit_percent, unit_measure,<br />
                qty_on_hand, reorder_lvl, sell_price, cost_price) VALUES <br />
                <br /> ('P00001', '1.44floppies', 5, 'Piece', 100, 20, 525, 500),
                <br /> ('P03453', 'Monitors', 6, 'Piece', 10, 3, 12000, 11200),
                <br /> ('P06734', 'Mouse', 5, 'Piece', 20, 5, 1050, 500),
                <br /> ('P07865', '1.22 floppies', 5, 'Piece', 100, 20, 525, 500),
                <br /> ('P07868', 'Keyboards', 2, 'Piece', 10, 3, 3150, 3050),
                <br /> ('P07885', 'CD Drive', 2, 'Piece', 10, 3, 5250, 5100),
                <br /> ('P07965', '540 HDD', 4, 'Piece', 10, 3, 8400, 8000),
                <br /> ('P07975', '1.44 Drive', 5, 'Piece', 10, 3, 1050, 1000),
                <br /> ('P08865', '1.22 Drive', 5, 'Piece', 2, 3, 1050, 1000);
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-md max-w-4xl mx-auto bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Q5. Query Exercises
        </h2>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-black">i Find out the names of all clients:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>SELECT name FROM client_master;</code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">ii Retrieve names and cities of all clients:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>SELECT name, city FROM client_master;</code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">iii List all products available:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>SELECT * FROM product_master;</code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">iv List all clients in Bombay:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>SELECT * FROM client_master WHERE city = 'Bombay';</code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">v Display info for client no 0001 and 0002:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>SELECT * FROM client_master WHERE client_no IN ('0001', '0002');</code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">vi Find products with '1.44 drive' or '1.22 Drive' descriptions:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>SELECT * FROM product_master WHERE description IN ('1.44 Drive', '1.22 Drive');</code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">vii Get clients with outstanding balances:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>SELECT * FROM client_master WHERE bal_due &gt; 0;</code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black">viii Count total products:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>SELECT COUNT(*) FROM product_master;</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LabTask3;