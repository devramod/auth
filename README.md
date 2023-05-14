# MERN Stack User Authentication and Authorization

This project is a full-stack web application that allows users to sign up, log in, and log out securely.
The application uses the MERN stack (MongoDB, Express.js, React, and Node.js) and other technologies such as Vite, Material UI, Redux, Axios, Bcrypt.js, and JWT for user authentication and authorization.

## Table of Contents
- [Features](#features)
- [Front-end Technologies](#front-end-technologies)
- [Back-end Technologies](#back-end-technologies)
- [Setup](#setup)
- [Run](#run)
- [Usage](#usage)
- [Technologies](#technologies)
- [Demo](#demo)
- [Contributing](#contributing)

### Features

This application has the following features:

- User registration and authentication
- User login and logout
- Password hashing and salting with Bcrypt.js
- Token-based authentication with JWT
- Redux store for managing user data
- Material UI components for UI design
- Vite for faster development and hot module replacement

### Installation

1. Clone the repository: `git clone https://github.com/devramod/auth.git`
2. Install the dependencies: `npm install`

### Setup

1. Create a .env file in the client directory with the following variables:
    ```
     VITE_SERVER_BASE_URL = http://localhost:5000
    ```
2. Create a .env file in the server directory with the following variables:
    ```
     MONGODB_URL = "mongodb+srv://ram5sasanga:SglwA2N23HItPHkY@cluster0.0ljjbzu.mongodb.net/?retryWrites=true&w=majority"
     SECRET_KEY =  "e1af984a332b585a5cb085ced157250c174e336578d36b439eaa9b8b1d5bf38558588666d510dabdcbcce8fc42795408792a51d9f7ae7b72ddcaeed142e8af38"
     CLIENT_BASE_URL = http://localhost:5173
    ```

### Run

1. Run the server: `npm start`
2. Run the client: `npm start`

### Usage

1. Open your web browser and go to http://localhost:3000 to see the application running.
2. You can register a new user account, log in, and log out. When you log in, a JSON Web Token is created. This token is used to authenticate requests to the server for protected routes.

This ecommerce application uses the following technologies:

### Front-end Technologies

- React.js: front-end library
- Redux, React-redux, Redux-toolkit: state managing and centralizing
- React-router: routing
- Material ui: ui development
- Axios: make http requests
- Vite: fast and optimized development

### Back-end Technologies

- Node.js: back-end runtime
- Express.js: back-end web framework
- MongoDB: database management
- Mongoose: database connection
- Bcryptjs: password hashing
- JWT: authorization

### Demo

- This application is deployed on Render.
- Please visit this link: <https://client-auth.onrender.com/>

### Contributing

If you would like to contribute to this ecommerce application, feel free to submit a pull request or raise an issue.

