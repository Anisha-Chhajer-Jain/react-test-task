// import React, { useEffect, useState } from "react";

// function Students() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch data");
//         return res.json();
//       })
//       .then((data) => {
//         setUsers(data.slice(0, 6));
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Something went wrong!");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="card-container">
//       {users.map((user) => (
//         <div key={user.id} className="card">
//           <h3>{user.name}</h3>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Students;

// components/Students.jsx
import React, { useState, useEffect } from 'react';

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        
        const data = await response.json();
        setStudents(data.slice(0, 6)); // Get first 6 users
        setError(null);
      } catch (err) {
        setError('Failed to load students. Please try again later.');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div className="loading">Loading students...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="students-page">
      <h1>Student Directory</h1>
      <div className="students-grid">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h3 className="student-name">{student.name}</h3>
            <div className="student-info">
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Phone:</strong> {student.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;