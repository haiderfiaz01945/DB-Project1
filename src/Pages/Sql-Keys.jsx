import React from 'react';
import { motion } from 'framer-motion';
const SqlKeys = () => {
  const sqlData = [
    { query: "SELECT", description: "Retrieves data from one or more tables.", example: "SELECT name, age FROM users;" },
    { query: "INSERT", description: "Adds new records to a table.", example: "INSERT INTO users (name, age) VALUES ('Alice', 30);" },
    { query: "UPDATE", description: "Modifies existing records in a table.", example: "UPDATE users SET age = 31 WHERE name = 'Alice';" },
    { query: "DELETE", description: "Removes records from a table.", example: "DELETE FROM users WHERE name = 'Alice';" },
    { query: "CREATE TABLE", description: "Creates a new table in the database.", example: "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100), age INT);" },
    { query: "ALTER TABLE", description: "Modifies an existing table structure, such as adding or dropping columns.", example: "ALTER TABLE users ADD email VARCHAR(100);" },
    { query: "DROP TABLE", description: "Deletes a table and all its data.", example: "DROP TABLE users;" },
    { query: "CREATE DATABASE", description: "Creates a new database.", example: "CREATE DATABASE my_database;" },
    { query: "DROP DATABASE", description: "Deletes a database and all its data.", example: "DROP DATABASE my_database;" },
    { query: "SELECT DISTINCT", description: "Retrieves unique records from a table.", example: "SELECT DISTINCT age FROM users;" },
    { query: "WHERE", description: "Filters records that meet a specific condition.", example: "SELECT name FROM users WHERE age > 25;" },
    { query: "ORDER BY", description: "Sorts the result set by one or more columns.", example: "SELECT name, age FROM users ORDER BY age DESC;" },
    { query: "GROUP BY", description: "Groups rows that have the same values into summary rows.", example: "SELECT age, COUNT(*) FROM users GROUP BY age;" },
    { query: "HAVING", description: "Filters groups based on a condition.", example: "SELECT age, COUNT(*) FROM users GROUP BY age HAVING COUNT(*) > 1;" },
    { query: "JOIN", description: "Combines rows from two or more tables based on a related column.", example: "SELECT users.name, orders.amount FROM users INNER JOIN orders ON users.id = orders.user_id;" },
    { query: "INNER JOIN", description: "Retrieves records with matching values in both tables.", example: "SELECT users.name, orders.amount FROM users INNER JOIN orders ON users.id = orders.user_id;" },
    { query: "LEFT JOIN", description: "Retrieves all records from the left table and matched records from the right table.", example: "SELECT users.name, orders.amount FROM users LEFT JOIN orders ON users.id = orders.user_id;" },
    { query: "RIGHT JOIN", description: "Retrieves all records from the right table and matched records from the left table.", example: "SELECT users.name, orders.amount FROM users RIGHT JOIN orders ON users.id = orders.user_id;" },
    { query: "FULL OUTER JOIN", description: "Retrieves records when there is a match in one of the tables.", example: "SELECT users.name, orders.amount FROM users FULL OUTER JOIN orders ON users.id = orders.user_id;" },
    { query: "UNION", description: "Combines the result sets of two or more SELECT queries.", example: "SELECT name FROM users UNION SELECT name FROM employees;" },
    { query: "UNION ALL", description: "Combines the result sets of two or more SELECT queries, including duplicates.", example: "SELECT name FROM users UNION ALL SELECT name FROM employees;" },
    { query: "SUBQUERY", description: "A query nested inside another query.", example: "SELECT name FROM users WHERE age = (SELECT MAX(age) FROM users);" },
    { query: "EXISTS", description: "Checks if a subquery returns any records.", example: "SELECT name FROM users WHERE EXISTS (SELECT 1 FROM orders WHERE users.id = orders.user_id);" },
    { query: "ANY", description: "Compares a value to any value in a list or subquery.", example: "SELECT name FROM users WHERE age > ANY (SELECT age FROM users WHERE age < 30);" },
    { query: "ALL", description: "Compares a value to all values in a list or subquery.", example: "SELECT name FROM users WHERE age > ALL (SELECT age FROM users WHERE age < 30);" },
    { query: "LIKE", description: "Searches for a specified pattern in a column.", example: "SELECT name FROM users WHERE name LIKE 'AS%';" },
    { query: "IN", description: "Checks if a value is within a set of values.", example: "SELECT name FROM users WHERE age IN (25, 30, 35);" },
    { query: "BETWEEN", description: "Selects values within a range.", example: "SELECT name FROM users WHERE age BETWEEN 20 AND 30;" },
    { query: "LIMIT", description: "Specifies the number of records to return.", example: "SELECT name FROM users LIMIT 5;" },
    { query: "OFFSET", description: "Specifies the starting point for records to return.", example: "SELECT name FROM users LIMIT 5 OFFSET 10;" },
    { query: "TRUNCATE TABLE", description: "Removes all records from a table but retains the table structure.", example: "TRUNCATE TABLE users;" },
    { query: "CREATE INDEX", description: "Creates an index on a table to improve query performance.", example: "CREATE INDEX idx_name ON users (name);" },
    { query: "DROP INDEX", description: "Deletes an index from a table.", example: "DROP INDEX idx_name;" },
    { query: "CASE", description: "Provides conditional logic in SQL queries.", example: "SELECT name, age, CASE WHEN age < 30 THEN 'Young' ELSE 'Old' END AS age_group FROM users;" },
    { query: "CAST", description: "Converts a value from one data type to another.", example: "SELECT name, CAST(age AS CHAR) FROM users;" }
  ];

  return (
    <div className="overflow-x-auto p-6 bg-background">
       <div className="flex justify-center items-center mb-10">
       <h1 className="text-4xl font-extrabold tracking-wide shadow-2xl p-2 rounded-lg text-primary">
    SQL Query's
</h1>


</div>

          <motion.table
            className="min-w-full bg-white border border-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
        <thead className="bg-primary text-white">
          <tr>
            <th className="text-left p-3 border-b">SQL Query</th>
            <th className="text-left p-3 border-b">Query Description</th>
            <th className="text-left p-3 border-b">Example</th>
          </tr>
        </thead>
        <tbody>
          {sqlData.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="hover:bg-blue-100 text-primary"
                >
              <td className="p-3 border-b border-secondary">{item.query}</td>
              <td className="p-3 border-b border-secondary">{item.description}</td>
              <td className="p-3 border-b border-secondary">{item.example}</td>
                </motion.tr>
          ))}
        </tbody>
          </motion.table>
    </div>

  );
};

export default SqlKeys;
