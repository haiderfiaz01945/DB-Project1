import React from 'react';

function LabTask12() {
  return (
    <div className="p-8 min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Lab Task 12 - Database Indexing and Views
      </h1>
      
      <div className="p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Indexing and View Operations
        </h2>

        <div className="space-y-6">
          <div>
            <p className="font-semibold text-black mb-2">1. Create an index on the table client_master, field client_no:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  CREATE INDEX idx_client_no ON client_master(client_no);
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">2. Create an index on the table sales_order, field s_order_no:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  CREATE INDEX idx_s_order_no ON sales_order(s_order_no);
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">3. Create a composite index on the sales_order_details table for the columns s_order_no and product_no:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  CREATE INDEX idx_sales_order_details ON sales_order_details(s_order_no, product_no);
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">4. Create a composite index ch_index on challan_header table for the columns challan_no and s_order_no:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  CREATE INDEX ch_index ON challan_header(challan_no, s_order_no);
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">5. Create a unique index on the table salesman_master, field salesman_no:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  CREATE UNIQUE INDEX uidx_salesman_no ON salesman_master(salesman_no);
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">6. Drop the index ch_index on the table challan_header:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  DROP INDEX ch_index;
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">7. Create a view on salesman_master where sal_amt is less than 3500:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  CREATE VIEW low_salary_salesmen AS 
                  <br />SELECT * 
                  <br />FROM salesman_master 
                  <br />WHERE sal_amt &lt; 3500;
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">8. Create a view client_view on client_master and rename the columns:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  CREATE VIEW client_view AS 
                  <br />SELECT client_name AS name, 
                  <br />       address_line1 AS add1, 
                  <br />       address_line2 AS add2, 
                  <br />       city, 
                  <br />       postal_code AS pcode, 
                  <br />       state 
                  <br />FROM client_master;
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">9. Select the client names from client_view who live in 'Bombay':</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  SELECT name 
                  <br />FROM client_view 
                  <br />WHERE city = 'Bombay';
                </code>
              </pre>
            </div>
          </div>

          <div>
            <p className="font-semibold text-black mb-2">10. Drop the view client_view:</p>
            <div className="overflow-x-auto p-4 rounded-lg bg-background">
              <pre className="text-sm">
                <code>
                  DROP VIEW client_view;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabTask12;

