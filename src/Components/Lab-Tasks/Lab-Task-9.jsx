import React from 'react';

function LabTask9() {
  return (
    <div className="p-8 min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Lab Task 9 - Advanced Database Queries
      </h1>
      
      <div className="p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Query Exercises
        </h2>

        <div className="space-y-6">
          <div>
            <p className="font-semibold text-black mb-2">1. Find out which product has been sold to 'Ivan':</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT p.description
                  <br />FROM product_master p
                  <br />JOIN sales_order_details od ON p.product_no = od.product_no
                  <br />JOIN sales_order o ON od.S_order_no = o.S_order_no
                  <br />JOIN client_master c ON o.client_no = c.client_no
                  <br />WHERE c.name = 'Ivan';
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">2. Find out the product and their quantities that are in the process of being delivered:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT p.description, od.Qty_order
                  <br />FROM sales_order_details od
                  <br />JOIN product_master p ON od.product_no = p.product_no
                  <br />JOIN sales_order o ON od.S_order_no = o.S_order_no
                  <br />WHERE o.Order_status = 'in process';
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">3. Find the product_no and description of products that have 10 orders:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT p.product_no, p.description
                  <br />FROM product_master p
                  <br />JOIN sales_order_details od ON p.product_no = od.product_no
                  <br />WHERE od.Qty_order = 10;
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">4. Find out the names of clients who have purchased 'CD DRIVE':</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT DISTINCT c.name
                  <br />FROM client_master c
                  <br />JOIN sales_order o ON c.client_no = o.client_no
                  <br />JOIN sales_order_details od ON o.S_order_no = od.S_order_no
                  <br />JOIN product_master p ON od.product_no = p.product_no
                  <br />WHERE p.description = 'CD DRIVE';
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">5. List the product_no and s_order_no of clients having qty ordered less than 5 from the sales_order_details table for the product "1.44 floppies":</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT od.product_no, od.s_order_no
                  <br />FROM sales_order_details od
                  <br />JOIN product_master p ON od.product_no = p.product_no
                  <br />WHERE p.description = '1.44 floppies' AND od.Qty_order &lt; 5;
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">6. Find the products and their quantities for the orders placed by 'Vandan' and 'Ivan':</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT p.description, od.Qty_order
                  <br />FROM sales_order_details od
                  <br />JOIN product_master p ON od.product_no = p.product_no
                  <br />JOIN sales_order o ON od.S_order_no = o.S_order_no
                  <br />JOIN client_master c ON o.client_no = c.client_no
                  <br />WHERE c.name IN ('Vandan', 'Ivan');
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">7. Find the products and their quantities for the orders placed by client_no "0004" and "0005":</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT p.description, od.Qty_order
                  <br />FROM sales_order_details od
                  <br />JOIN product_master p ON od.product_no = p.product_no
                  <br />JOIN sales_order o ON od.S_order_no = o.S_order_no
                  <br />WHERE o.client_no IN ('0004', '0005');
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">8. Display the s_order_date in the format "dd-mm-yy" e.g. "12-Feb-96":</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT DATE_FORMAT(o.S_order_date, '%d-%b-%y') AS formatted_order_date
                  <br />FROM sales_order o;
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">9. Find the date, 15 days after the given date:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT (o.S_order_date + INTERVAL '15' DAY) AS new_date
                  <br />FROM sales_order o;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabTask9;

