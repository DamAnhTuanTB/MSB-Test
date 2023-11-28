# **MSB Test Website**
### **1. Introduce**
This project is a web application built using ReactJS in front-end.
##### Key features
- ***Homepage***: This is the first page that appears when users access the website. Here information is displayed such as header, banner, product list, footer,...
- ***Login***: Allow users to log in to the system.
- ***Submit a consultation request***: Allows users to submit information to request consultation.
- ***Account management***: This is the page that manages users' personal information as well as information products.

### **2. Main Technology Used**
+ **ReactJS**: ReactJS is a JavaScript library for building user interfaces, known for its component-based structure, reusability, and efficient rendering, simplifying the development of interactive web applications. 
+ **TypeScript**: TypeScript is a statically typed superset of JavaScript that offers enhanced code quality, better tooling, and improved maintainability.
+ **React Router Dom**: React Router Dom is a library that helps manage routing in React applications, providing flexible navigation between components and pages, enhancing the user experience.
+ **Redux Toolkit**: Redux Toolkit is a toolset that efficiently manages state and performs Redux operations in React applications, providing flexibility and reducing complexity in state management. 
+ **React Query**: React Query is a library that helps manage data in React applications, offering an easy-to-use and efficient approach to interact with APIs and handle state management.
+ **Axios**: Axios is a JavaScript HTTP client library that facilitates easy and flexible handling of HTTP requests in applications, enhancing communication with APIs.
+ **Ant Design**: Ant Design is a popular UI library for React that offers a wide range of pre-designed, customizable components, streamlining the development of visually appealing and responsive web applications.
+ **Styled Component**: Styled Components is a CSS-in-JS library that enables component-based styling in React applications, enhancing code maintainability and allowing dynamic styling based on props.
+ **Json Server**: JSON-SERVER is a tool that creates a mock server with JSON data from a db.json file, facilitating app development without an actual backend and enhancing the front-end development process.

### **3. Instructions For Installing And Running The Project Locally**
> **Prerequisites**: Before you begin, make sure you have the following technologies installed on your personal computer: git, node.js. npm
-  Download the project to your personal computer:
```bash
git clone https://github.com/DamAnhTuanTB/MSB-Test.git
```
- Open the downloaded project using ide software, type the following command to install the necessary packages:
```bash
npm install
```
- Run the project locally using the command below. After, you can access http://localhost:3000 to view the system.
```bash
npm start
```
### **4. Online Link To Use**
In addition to using the system locally as in part 3, you can access the following link to use the system: 
https://msb-test.vercel.app

### **5. Detailed Instructions On How To Use The Features**
##### Homepage
- On this page, users can view introductory information about the website such as product list, reasons for choosing the system's products,...
##### Log in
- User logs in with username: kminchelle and password: 0lelplR to successfully log in to the system.
##### Log out
- Users can log out of the system.
##### Submit a consultation request
- Users fill out all fields that appear in the form. After filling out all the information, press the Confirm button to send the consultation request to the system.
##### Account Management
- On this page, users can view personal information and product information.

### **6. Troubleshooting**
- If you are having trouble loading the page, please make sure you have the best network connection.
- If you run local the project with problems, please make sure your computer has the latest node.js installed. You also need to make sure you have the .env file set up with the correct values.