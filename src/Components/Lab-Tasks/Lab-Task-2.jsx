import React from 'react';

function LabTask2() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-primary">
        Lab Task 2 Question
      </h1>
      <p className="mb-6 text-black">
        → Create a table named as <strong>testtable</strong> having columns 
        <strong>test_id</strong> (int type) and <strong>name</strong> (varchar(225)).
        After creating the table, rename it to <strong>testtable2</strong> and add a column 
        named <strong>dob</strong> of type <strong>YEAR</strong>. After adding <strong>dob</strong>, 
        drop it, then change the column <strong>name</strong> to <strong>fname</strong> and also change 
        its datatype.
      </p>
      
      <h2 className="text-xl font-semibold mb-2 text-primary">
        Solution
      </h2>

      <div className="space-y-4">
        <div>
          <p className="font-semibold text-black">1) Create the table:</p>
          <pre className="p-4 rounded text-sm bg-background">
            <code>
              CREATE TABLE testtable (
              <br /> &nbsp;&nbsp;test_id INT,
              <br /> &nbsp;&nbsp;name VARCHAR(225)
              <br />);
            </code>
          </pre>
        </div>

        <div>
          <p className="font-semibold text-black">2) Rename the table:</p>
          <pre className="p-4 rounded text-sm bg-background">
            <code>
              ALTER TABLE testtable RENAME TO testtable2;
            </code>
          </pre>
        </div>

        <div>
          <p className="font-semibold text-black">3) Add a column:</p>
          <pre className="p-4 rounded text-sm bg-background">
            <code>
              ALTER TABLE testtable2 ADD COLUMN dob DATE;
            </code>
          </pre>
        </div>

        <div>
          <p className="font-semibold text-black">4) Drop the column:</p>
          <pre className="p-4 rounded text-sm bg-background">
            <code>
              ALTER TABLE testtable2 DROP COLUMN dob;
            </code>
          </pre>
        </div>

        <div>
          <p className="font-semibold text-black">5) Rename and change column type:</p>
          <pre className="p-4 rounded text-sm bg-background">
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
