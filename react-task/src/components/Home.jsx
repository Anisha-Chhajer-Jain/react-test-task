// import React, { useEffect, useState } from "react";

// function Home() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const storedStudents =
//       JSON.parse(localStorage.getItem("students")) || [];
//     setStudents(storedStudents);
//   }, []);

//   return (
//     <div>
//       <h1>Student Portal</h1>
//       {students.length === 0 ? (
//         <p>No students added yet.</p>
//       ) : (
//         <p>Total Students: {students.length}</p>
//       )}
//     </div>
//   );
// }

// export default Home;

// components/Home.jsx
import React, { useState, useEffect } from 'react';

function Home() {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const loadStudentCount = () => {
      try {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        setStudentCount(students.length);
      } catch (error) {
        console.error('Error reading from localStorage:', error);
        setStudentCount(0);
      }
    };

    loadStudentCount();

    // Optional: Listen for storage changes
    window.addEventListener('storage', loadStudentCount);
    return () => window.removeEventListener('storage', loadStudentCount);
  }, []);

  return (
    <div className="home-page">
      <h1>Student Portal</h1>
      <div className="student-count-card">
        <h2>Total Students</h2>
        <p className="count-number">{studentCount}</p>
        {studentCount === 0 ? (
          <p className="no-students">No students added yet.</p>
        ) : (
          <p className="students-message">Total students in database: {studentCount}</p>
        )}
      </div>
    </div>
  );
}

export default Home;