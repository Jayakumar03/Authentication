# Authentication App README

overview:
  description: >
    This is a simple authentication app built using Node.js and MongoDB. It provides basic user registration, login, and dashboard functionality. The app responds with JSON data and does not have a frontend interface.

features:
  - login: Allows existing users to log in using their email and password. The app validates the credentials against the stored user data in the MongoDB database and returns a JSON response with a JWT (JSON Web Token) on successful login.
  - register: Allows new users to register by providing their first name, last name, email, and password. The app securely stores the user details using bcrypt hashing to protect the passwords.
  - dashboard: Upon successful login, users can access their dashboard by making a request with the JWT token provided during login. The app checks for the token in the request cookies before granting access to the dashboard.
  - home route: The app has a home route that can be accessed without authentication. It will respond with a welcome message in JSON format.

dependencies:
  - bcryptjs: For hashing and salting passwords securely.
  - cookie: For parsing and handling cookies in the HTTP requests.
  - cookie-parser: For parsing cookies from the request headers.
  - dotenv: For loading environment variables from a .env file.
  - express: A popular web framework for handling HTTP requests and routing.
  - jsonwebtoken: For generating and verifying JSON Web Tokens (JWT).
  - mongodb: The official MongoDB driver for Node.js.
  - mongoose: An ODM library for MongoDB to simplify database interactions.
  - parser: A utility library for parsing data.

setup:
  steps:
    - name: Clone the repository
    -command: git clone <https://github.com/Jayakumar03/Authentication>
    name: Install dependencies
    -command: npm install
      name: Set up MongoDB database
      -description: 
        Create a MongoDB database and provide the connection URI in a .env file. Example .env:
      -content: |
        MONGODB_URI=mongodb://localhost:27017/authentication_app
    - name: Start the server
      command: npm start
  default_port: 3000

usage:
  register:
    Send a POST request to /register with the user details in the request body (JSON format):
    json
    {
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "password": "your_password_here"
    }
    
  login: 
    Send a POST request to /login with the user's email and password in the request body (JSON format):
    -json
    {
      "email": "john.doe@example.com",
      "password": "your_password_here"
    }

  dashboard: 
    Send a GET request to /dashboard with the JWT token obtained after successful login. Make sure to include the token in the request cookies.
  home_route: Access the home route by sending a GET request to /.

notes: |
  - This app is for learning purposes and does not have a frontend. All responses are in JSON format.
  - Ensure you have MongoDB installed and running before starting the app.

