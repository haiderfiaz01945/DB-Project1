import React from 'react';
 
function LabTask2() {
  return (
    <div 
      className="p-6 bg-white shadow-md rounded-lg mt-6 max-w-2xl mx-auto  " 
    >
      <h1 className="text-2xl font-bold text-[#0284C7] mb-4">
        Lab Task 2 Question
      </h1>
      <p className="mb-6 text-gray-700">
        → Create a table named as <strong>testtable</strong> having columns 
        <strong>test_id</strong> (int type) and <strong>name</strong> (varchar(225)).
        After creating the table, rename it to <strong>testtable2</strong> and add a column 
        named <strong>dob</strong> of type <strong>YEAR</strong>. After adding <strong>dob</strong>, 
        drop it, then change the column <strong>name</strong> to <strong>fname</strong> and also change 
        its datatype.
      </p>
      
      <h2 className="text-xl font-semibold text-[#0284C7] mb-2">
        Solution
      </h2>

      <div className="space-y-4">
        <div>
          <p className="font-semibold">1) Create the table:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>
              CREATE TABLE testtable (
              <br /> &nbsp;&nbsp;test_id INT,
              <br /> &nbsp;&nbsp;name VARCHAR(225)
              <br />);
            </code>
          </pre>
        </div>

        <div>
          <p className="font-semibold">2) Rename the table:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>
              ALTER TABLE testtable RENAME TO testtable2;
            </code>
          </pre>
        </div>

        <div>
          <p className="font-semibold">3) Add a column:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>
              ALTER TABLE testtable2 ADD COLUMN dob DATE;
            </code>
          </pre>
        </div>

        <div>
          <p className="font-semibold">4) Drop the column:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>
              ALTER TABLE testtable2 DROP COLUMN dob;
            </code>
          </pre>
        </div>

        <div>
          <p className="font-semibold">5) Rename and change column type:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>
              ALTER TABLE testtable2 RENAME COLUMN name TO fname;
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default LabTask2;
