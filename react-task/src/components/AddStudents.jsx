// import React, { useState } from "react";

// function AddStudent() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     gender: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState("");

//   const validate = () => {
//     let newErrors = {};

//     if (!form.name) newErrors.name = "Name is required";
//     if (!form.email.includes("@"))
//       newErrors.email = "Email must contain @";
//     if (!/^\d{10}$/.test(form.phone))
//       newErrors.phone = "Phone must be 10 digits";

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setSuccess("");
//       return;
//     }

//     const existingStudents =
//       JSON.parse(localStorage.getItem("students")) || [];

//     localStorage.setItem(
//       "students",
//       JSON.stringify([...existingStudents, form])
//     );

//     setSuccess("Student added successfully!");
//     setForm({ name: "", email: "", phone: "", gender: "" });
//     setErrors({});
//   };

//   return (
//     <div>
//       <h2>Add Student</h2>

//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) =>
//             setForm({ ...form, name: e.target.value })
//           }
//         />
//         {errors.name && <p className="error">{errors.name}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) =>
//             setForm({ ...form, email: e.target.value })
//           }
//         />
//         {errors.email && <p className="error">{errors.email}</p>}

//         <input
//           type="text"
//           placeholder="Phone"
//           value={form.phone}
//           onChange={(e) =>
//             setForm({ ...form, phone: e.target.value })
//           }
//         />
//         {errors.phone && <p className="error">{errors.phone}</p>}

//         <div>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               onChange={(e) =>
//                 setForm({ ...form, gender: e.target.value })
//               }
//             />
//             Male
//           </label>

//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               onChange={(e) =>
//                 setForm({ ...form, gender: e.target.value })
//               }
//             />
//             Female
//           </label>
//         </div>

//         <button type="submit">Submit</button>
//       </form>

//       {success && <p className="success">{success}</p>}
//     </div>
//   );
// }

// export default AddStudent;


// components/AddStudent.jsx
import React, { useState } from 'react';

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [recentlyAdded, setRecentlyAdded] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Email must contain @ symbol';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be exactly 10 digits';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select a gender';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Save to localStorage
      try {
        const existingStudents = JSON.parse(localStorage.getItem('students')) || [];
        const newStudent = {
          id: Date.now(), // Simple unique ID
          ...formData
        };
        
        const updatedStudents = [...existingStudents, newStudent];
        localStorage.setItem('students', JSON.stringify(updatedStudents));
        
        // Show success message and clear form
        setSuccessMessage('Student added successfully!');
        setRecentlyAdded(newStudent);
        setFormData({
          name: '',
          email: '',
          phone: '',
          gender: ''
        });
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
        
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="add-student-page">
      <h1>Add New Student</h1>
      
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10 digits only"
            className={errors.phone ? 'error-input' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Gender *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>

        <button type="submit" className="submit-btn">Add Student</button>
      </form>

      {recentlyAdded && (
        <div className="recently-added">
          <h3>Recently Added Student:</h3>
          <div className="student-card">
            <p><strong>Name:</strong> {recentlyAdded.name}</p>
            <p><strong>Email:</strong> {recentlyAdded.email}</p>
            <p><strong>Phone:</strong> {recentlyAdded.phone}</p>
            <p><strong>Gender:</strong> {recentlyAdded.gender}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddStudent;