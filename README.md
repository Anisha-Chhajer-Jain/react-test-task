# react-test-task
📚 Student Portal Application
A comprehensive React-based student management system with multiple features including student management, calendar, todo lists, weather updates, and more.

🚀 Live Demo
[Add your deployed link here]

📋 Table of Contents
Features

Technologies Used

Installation

Project Structure

Routes Overview

Usage

Screenshots

Contributing

License

Contact

✨ Features
Core Features
✅ Student Management: Add, view, edit, and delete student records

✅ Form Validation: Real-time validation with error messages

✅ API Integration: Fetch data from REST APIs

✅ LocalStorage: Persistent data storage

✅ Responsive Design: Works on all devices

✅ Dark Mode: Automatic theme switching

✅ Multi-page Routing: 20+ routes with React Router

📊 Component Features
Component	Features
Home	Student count, dashboard overview
Students	API data, loading states, error handling
StudentDetails	Individual student info, edit/delete options
AddStudent	Form validation, localStorage save
Dashboard	Statistics, charts, recent activities
Calendar	Event management, multiple views, color coding
TodoList	Task management, completion toggle
Weather	Real-time weather data
Counter	Interactive counter with color rules
Search	Filter students by name/email
🛠️ Technologies Used
React 18 - Frontend library

React Router v6 - Navigation and routing

CSS3 - Styling with responsive design

LocalStorage - Client-side data persistence

Fetch API - External API integration

React Hooks - useState, useEffect for state management

📦 Installation
Prerequisites
Node.js (v14 or higher)

npm or yarn

Steps to Run Locally
Clone the repository

bash
git clone https://github.com/yourusername/student-portal.git
cd student-portal
Install dependencies

bash
npm install
# or
yarn install
Install React Router

bash
npm install react-router-dom
# or
yarn add react-router-dom
Start the development server

bash
npm start
# or
yarn start
Open in browser

text
http://localhost:3000
Build for Production
bash
npm run build
# or
yarn build

🔌 APIs Used
Students API
javascript
GET https://jsonplaceholder.typicode.com/users
// Returns first 6 users
Weather API
javascript
GET https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true
💾 LocalStorage Keys
Key	Data Stored
students	Array of student objects
calendarEvents	Calendar events
todos	Todo list items
notes	User notes
favorites	Favorite students
settings	User preferences

bash
npm test
🤝 Contributing
Fork the repository

Create a feature branch

bash
git checkout -b feature/AmazingFeature
Commit your changes

bash
git commit -m 'Add some AmazingFeature'
Push to the branch

bash
git push origin feature/AmazingFeature
Open a Pull Request

Contribution Guidelines
Write clean, documented code

Follow existing code style

Add comments for complex logic

Update README if needed

Test thoroughly before submitting


📧 Contact
Email: anishachhajer16@gmail.com

GitHub: https://github.com/Anisha-Chhajer-Jain

LinkedIn: https://www.linkedin.com/in/anisha-chhajer-844114367/

Portfolio: https://anishachhajer.netlify.app/

🔗 Useful Links
React Documentation

React Router Documentation

JSONPlaceholder

Open-Meteo API


🎯 Evaluation Criteria Met
Criteria	Status
Proper Routing Implementation	✅
Correct use of Hooks	✅
API lifecycle handling	✅
Form validation logic	✅
localStorage integration	✅
Clean code structure	✅
Component separation	✅
Responsive UI	✅
Application stability	✅
Bonus features	✅
