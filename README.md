# J218


================================================================================
                        HR PRO MAX - EXTENDED EDITION
                    Simple HR Employee Management Application
================================================================================

PROJECT DESCRIPTION
================================================================================
HR Pro Max is a web-based Human Resources employee management application 
designed to streamline workforce administration. It provides a comprehensive 
CRUD (Create, Read, Update, Delete) interface for managing employee records 
and personnel information. The application is built with Node.js and Express 
on the backend, MongoDB for data persistence, and EJS templating for the 
frontend interface.

FUNCTIONALITIES
================================================================================
1. View All Employees
   - Display a comprehensive list of all employees in the database
   - Sort employees by multiple criteria (Name, Surname, Year of Work)
   - Ascending and descending sort options available

2. Add New Employee
   - Create new employee records with the following information:
     • First Name
     • Surname
     • Job Title
     • Year of Work
     • Description/Bio

3. Edit Employee Information
   - Modify existing employee records
   - Update all employee details
   - Confirm changes before saving

4. Delete Employee
   - Remove employee records from the system
   - Confirmation page before deletion
   - Confirmation message after successful deletion

5. View About Page
   - Information about the HR application

TECHNOLOGIES USED
================================================================================
Backend:
  - Node.js - JavaScript runtime environment
  - Express.js v5.2.1 - Web application framework
  - MongoDB v7.0.0 - NoSQL database for storing employee records

Frontend:
  - EJS v3.1.10 - Embedded JavaScript templating engine
  - HTML/CSS - Frontend markup and styling
  - JavaScript - Client-side scripting

Database:
  - MongoDB - Document-oriented NoSQL database
  - MongoDB Node.js Driver - Database connectivity

Package Manager:
  - npm - Node Package Manager

INSTALLATION INSTRUCTIONS
================================================================================

Prerequisites:
  1. Node.js (v14 or higher) and npm installed on your system
  2. MongoDB installed and running locally (default: localhost:27017)
  3. Git (optional, for cloning the repository)

Step 1: Clone or Download the Project
  - Download the project files to your desired location
  - Navigate to the project root directory in your terminal/command prompt

Step 2: Install Dependencies
  Open your terminal/command prompt in the project root directory and run:
  
  npm install
  
  This will install all required dependencies listed in package.json:
  - express
  - ejs
  - mongodb
  - start

Step 3: Ensure MongoDB is Running
  Option A: Local Installation
    - Make sure MongoDB is installed and running on your system
    - Default connection string: mongodb://localhost:27017
    - The application will attempt to connect to the 'employees' database
  
  Option B: Using Docker
    - For detailed Docker setup instructions, see Docker.txt
    - Includes multiple setup options, authentication, persistence, and troubleshooting
    - Quick start: docker run -d --name mongodb -p 27017:27017 mongo:latest

Step 4: Start the Application
  Run the following command in the project root directory:
  
  npm start
  
  Or alternatively:
  
  node src/server.js
  
  You should see output indicating:
  - "Połączono z MongoDB" (Connected to MongoDB)
  - "Server running on http://localhost:3000"

Step 5: Access the Application
  Open your web browser and navigate to:
  
  http://localhost:3000
  
  The application is now ready to use.

TROUBLESHOOTING
================================================================================
- If MongoDB connection fails, ensure MongoDB is running on localhost:27017
- If port 3000 is already in use, modify the PORT variable in src/server.js
- Clear your browser cache if CSS/styling is not loading correctly
- Check console for detailed error messages if any issue occurs

RUNNING THE APPLICATION
================================================================================

Development Mode:
  npm start
  
  The server will start on http://localhost:3000

The application will:
  1. Connect to the MongoDB database at mongodb://localhost:27017
  2. Initialize or use the existing 'employees' collection
  3. Serve the web interface on port 3000
  4. Listen for HTTP requests and route them appropriately

To stop the server:
  Press Ctrl+C in the terminal where the server is running

API ENDPOINTS
================================================================================

1. GET /
   Purpose: Display all employees list with sorting options
   Response: HTML page rendering all employees
   Query Parameters:
     - sort: Optional sorting parameter
       Values: name_asc, name_desc, surname_asc, surname_desc, 
               yow_asc, yow_desc
   Example: http://localhost:3000/?sort=name_asc

2. GET /about
   Purpose: Display the About page
   Response: HTML page with application information

3. GET /add
   Purpose: Display the form to add a new employee
   Response: HTML form page

4. POST /add
   Purpose: Submit a new employee record
   Request Body (form-urlencoded):
     - Name: Employee first name (string)
     - Surname: Employee last name (string)
     - title: Job title (string)
     - yow: Year of work/years of experience (number)
     - description: Employee bio/description (string)
   Response: Redirect to home page (/)

5. GET /edit/:id
   Purpose: Display the form to edit an employee
   Parameters:
     - id: MongoDB ObjectId of the employee (string)
   Response: HTML edit form with current employee data
   Example: http://localhost:3000/edit/507f1f77bcf86cd799439011

6. POST /edit/:id
   Purpose: Submit updated employee information
   Parameters:
     - id: MongoDB ObjectId of the employee (string)
   Request Body (form-urlencoded):
     - Name: Employee first name (string)
     - Surname: Employee last name (string)
     - title: Job title (string)
     - yow: Year of work/years of experience (number)
     - description: Employee bio/description (string)
   Response: Redirect to home page (/)

7. GET /delete/:id
   Purpose: Display confirmation page for employee deletion
   Parameters:
     - id: MongoDB ObjectId of the employee (string)
   Response: HTML confirmation page
   Example: http://localhost:3000/delete/507f1f77bcf86cd799439011

8. POST /delete/:id
   Purpose: Confirm and delete an employee record
   Parameters:
     - id: MongoDB ObjectId of the employee (string)
   Response: HTML page confirming deletion

DATABASE SCHEMA
================================================================================
Collection: employees

Employee Document Structure:
{
  _id: ObjectId,           // Unique identifier (MongoDB generated)
  Name: String,            // Employee first name
  Surname: String,         // Employee last name
  title: String,           // Job title
  yow: Number,             // Years of work / experience
  description: String,     // Employee bio/description
  createdAt: Date          // Timestamp of creation
}

Example Document:
{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  Name: "John",
  Surname: "Doe",
  title: "Software Engineer",
  yow: 5,
  description: "Experienced developer with strong problem-solving skills",
  createdAt: ISODate("2025-12-19T10:30:00.000Z")
}

AUTHOR
================================================================================
Matusiewicz Szymon

VERSION
================================================================================
1.0.0

LICENSE
================================================================================
ISC

KEYWORDS
================================================================================
HR, Employees, Management, Employee Management, CRUD, Workforce Database, 
Management Application, Data Management, Employee Records, 
Workforce Management, Personnel Management

================================================================================
For more information or support, please refer to the project structure 
and code comments within the src/ directory.
================================================================================
