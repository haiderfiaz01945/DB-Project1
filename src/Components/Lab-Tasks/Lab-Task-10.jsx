import React from 'react';

function LabTask10() {
  return (
    <div className="p-8 min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Lab Task 10 - Advanced Database Queries
      </h1>
      
      <div className="p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Query Exercises
        </h2>

        <div className="space-y-6">
          <div>
            <p className="font-semibold text-black mb-2">1. Find the product_no and description of non-moving products:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT product_no, description
                  <br />FROM product_master
                  <br />WHERE product_no NOT IN (SELECT product_no FROM sales_order_details);
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">2. Find the customer's name, address, city, and pincode for the client who has placed order no "019001":</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT c.name, c.address1, c.city, c.pincode
                  <br />FROM client_master c
                  <br />WHERE c.client_no = (SELECT client_no FROM sales_orders WHERE S_order_no = '019001');
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">3. Find the client names who have placed orders before the month of May 96:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT c.name
                  <br />FROM client_master c
                  <br />WHERE c.client_no IN
                  <br />(SELECT client_no FROM sales_order
                  <br /> WHERE S_order_date &lt; STR_TO_DATE('01-MAY-96', '%d-%b-%y'));
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">4. Find out if product "1.44 Drive" is ordered by only one client and print the client_no, name to whom it was sold:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT client_no, name
                  <br />FROM client_master
                  <br />WHERE client_no IN (SELECT client_no FROM sales_order o
                  <br /> JOIN sales_order_details od ON o.S_order_no = od.S_order_no
                  <br /> JOIN product_master p ON od.product_no = p.product_no
                  <br /> WHERE p.description = '1.44 Drive')
                  <br />HAVING COUNT(DISTINCT client_no) = 1;
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">5. Find the names of clients who have placed orders worth Rs.10000 or more:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT c.name
                  <br />FROM client_master c
                  <br />WHERE c.client_no IN (SELECT o.client_no
                  <br /> FROM sales_order o
                  <br /> JOIN sales_order_details od ON o.S_order_no = od.S_order_no
                  <br /> JOIN product_master p ON od.product_no = p.product_no
                  <br /> GROUP BY o.client_no
                  <br /> HAVING SUM(od.qty * p.sell_price)  &gt;= 10000);
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">6. Select the orders placed by 'Ivan':</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT o.S_order_no, o.S_order_date
                  <br />FROM sales_order o
                  <br />JOIN client_master c ON o.client_no = c.client_no
                  <br />WHERE c.client_name = 'Ivan';
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">7. Select all the clients and the salesmen in the city of Bombay:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT c.name, s.Sal_name
                  <br />FROM client_master c
                  <br /> JOIN sales_order o ON c.client_no = o.Client_no
                  <br /> JOIN sales_master s ON o.Salesman_no = s.Salesman_no
                  <br />WHERE c.city = 'Bombay' AND s.city = 'Bombay';
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">8. Select a salesman named in "Bombay" who has at least one client located in "Bombay":</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT DISTINCT s.Sal_name
                  <br />FROM client_master c
                  <br /> JOIN sales_order o ON c.client_no = o.Client_no
                  <br /> JOIN sales_master s ON o.Salesman_no = s.Salesman_no
                  <br />WHERE c.city = 'Bombay' AND s.city = 'Bombay';
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">9. Select the product_no, description, qty_on_hand, cost_price of non-moving items in the product_master table:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT p.product_no, p.description, p.qty_on_hand, p.cost_price
                  <br />FROM product_master p
                  <br />WHERE p.product_no NOT IN (SELECT product_no FROM sales_order_details);
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabTask10;

