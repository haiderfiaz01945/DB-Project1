import React from "react";

const LabTask4 = () => {
  return (
    <div className="p-6 mt-5 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-4">Lab Task 4</h1>

      <h2 className="text-xl font-semibold text-primary mb-2">
        1. Change the selling price of '1.44 floppy drive' to Rs.1150.00:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            UPDATE product_master <br />
            SET sell_price = 1150.00 <br />
            WHERE description = '1.44floppies'; <br />
            <br />
            -- Check result by <br />
            SELECT description, sell_price FROM product_master;
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        2. Delete the record with client 0001 from the client master table:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT * FROM client_master WHERE client_no = '0001'; <br />
            <br />
            DELETE FROM client_master <br />
            WHERE client_no = '0001'; <br />
            <br />
            SELECT * FROM client_master;
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        3. Change the city of client_no '0002' to Bombay:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT * FROM client_master WHERE client_no = '0002'; <br />
            <br />
            UPDATE client_master <br />
            SET city = 'Bombay' <br />
            WHERE client_no = '0002';
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        4. Change the bal_due of client_no '0001' to 1000:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            UPDATE client_master <br />
            SET bal_due = 1000 <br />
            WHERE client_no = '0001';
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        5. Find products whose selling price is more than 1500 and calculate the new selling price as original selling price * 15:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT product_no, sell_price, sell_price * 15 AS new_selling_price <br />
            FROM product_master <br />
            WHERE sell_price &gt; 1500;
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        6. Find clients who stay in a city where the second letter is 'a':
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT * FROM client_master <br />
            WHERE city LIKE '_a%';
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        7. Find the names of all clients with 'a' as the second letter in their names:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT name FROM client_master <br />
            WHERE name LIKE '_a%';
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        8. List the products in sorted order of their description:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT * FROM product_master <br />
            ORDER BY description;
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        9. Count the total number of orders (Assuming there is an orders table):
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT COUNT(*) AS total_orders FROM orders;
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        10. Calculate the average price of all the products:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT AVG(sell_price) AS average_price FROM product_master;
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        11. Calculate the minimum price of products:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT MIN(sell_price) AS min_price FROM product_master;
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        12. Determine the maximum and minimum prices and rename them as 'max_price' and 'min_price':
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT MAX(sell_price) AS max_price, MIN(sell_price) AS min_price <br />
            FROM product_master;
          </code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">
        13. Count the number of products having price greater than or equal to 150:
      </h2>
      <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg mb-4">
        <pre className="text-sm">
          <code>
            SELECT COUNT(*) AS product_count <br />
            FROM product_master <br />
            WHERE sell_price &gt;= 150;
          </code>
        </pre>
      </div>
    </div>
  );
};

export default LabTask4;
