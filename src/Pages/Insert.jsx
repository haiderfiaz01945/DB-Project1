import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
 
const Homepage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/students')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setStudents(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const deleteStudent = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/api/students/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setStudents(students.filter(student => student.student_id !== id));
            console.log(`Student with ID ${id} deleted`);
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };
    
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container mx-auto mt-5 p-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Grade 8 Students</h1>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="py-3 px-4 border-b text-left">Student ID</th>
                        <th className="py-3 px-4 border-b text-left">Name</th>
                        <th className="py-3 px-4 border-b text-left">Age</th>
                        <th className="py-3 px-4 border-b text-left">Contact</th>
                        <th className="py-3 px-4 border-b text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.student_id} className="hover:bg-blue-50 transition duration-200">
                            <td className="py-3 px-4 border-b border-gray-200 text-gray-800">{student.student_id}</td>
                            <td className="py-3 px-4 border-b border-gray-200 text-gray-800">{student.name}</td>
                            <td className="py-3 px-4 border-b border-gray-200 text-gray-800">{student.age}</td>
                            <td className="py-3 px-4 border-b border-gray-200 text-gray-800">{student.contact}</td>
                            <td className="py-3 px-4 border-b border-gray-200 flex space-x-2"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
       
    </div>
    
    
    );
};

export default Homepage;
