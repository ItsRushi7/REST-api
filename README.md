 # Express.js REST API

This project is a RESTful API built using the Express framework in Node.js. It allows clients to interact with the API via HTTP requests and can be tested using Postman.
for thie we create a db.json file for database.

## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Postman](https://www.postman.com/) (For API testing)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```sh
   npm install nodemon
   ```

## Usage



### Start the Server

To run the server in development mode:
```sh
nodemon index.js
```

### API Endpoints

The API provides the following endpoints:

#### GET user/
Retrieve a list of user.

#### GET /get/user/:id
Retrieve a specific user by ID.

#### POST /create/user
Create a user in postman using body x-www-form-urlencode. Send a data into key value pair request body.

#### PATCH /update/user/:id
Update an existing user by ID.

#### DELETE /delete/user/:id
Delete an user by ID.

## Testing with Postman

1. Open Postman.
2. Import the API collection (if provided) or manually enter the endpoints.
3. Use different HTTP methods (GET, POST, PUT, DELETE) to test API functionalities.
4. Ensure the correct request body format when sending data.

## Technologies Used
- Node.js
- Express.js
- nodemon
- db.json (for database)
- Postman (for API testing)

## License
This project is licensed under the MIT License.

## Author
[itsRushi7]

