# User Authentication API

This document explains the process of registering and logging in a user in the database, including the required fields, middleware validations, and the final output.

---

## **User Registration**

### Endpoint

**POST** `/api/v1/users/register`

### Required Fields

The following fields are required in the request body:

- **fullname.firstname**: A string with a minimum length of 3 characters.
- **fullname.lastname**: A string (optional) with a minimum length of 3 characters.
- **email**: A valid email address.
- **password**: A string with a minimum length of 6 characters.

### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Process Flow

1. **Validation**:

   - The request body is validated using `express-validator`.
   - If validation fails, a `400 Bad Request` response is returned with the validation errors.

2. **Password Hashing**:

   - The password is hashed using the `bcrypt` library before being stored in the database.

3. **User Creation**:

   - The user is created in the database using the `createUser` function.

4. **Token Generation**:

   - A JWT token is generated for the user using the `generateAuthToken` method in the `User` model.

5. **Response**:
   - A `200 OK` response is returned with the user data and the generated token.

### Success Response

**Status Code**: `200 OK`

**Response Body**:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f9c8e9e4b0a5d6f8e9c8e9",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "message": "User created successfully"
}
```

### Error Response

**Status Code**: `400 Bad Request`

**Response Body**:

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

## **User Login**

### Endpoint

**POST** `/api/v1/users/login`

### Required Fields

The following fields are required in the request body:

- **email**: A valid email address.
- **password**: A string with a minimum length of 6 characters.

### Example Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Process Flow

1. **Validation**:

   - The request body is validated using `express-validator`.
   - If validation fails, a `400 Bad Request` response is returned with the validation errors.

2. **User Lookup**:

   - The user is searched in the database using the provided email.
   - If the user does not exist, a `401 Unauthorized` response is returned.

3. **Password Verification**:

   - The provided password is compared with the hashed password stored in the database using the `comparePassword` method.
   - If the password is incorrect, a `401 Unauthorized` response is returned.

4. **Token Generation**:

   - A JWT token is generated for the user using the `generateAuthToken` method in the `User` model.

5. **Response**:
   - A `200 OK` response is returned with the user data and the generated token.

### Success Response

**Status Code**: `200 OK`

**Response Body**:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f9c8e9e4b0a5d6f8e9c8e9",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "message": "Login successfully"
}
```

### Error Responses

#### Invalid Email or Password

**Status Code**: `401 Unauthorized`

**Response Body**:

```json
{
  "message": "Invalid email or password"
}
```

#### Validation Errors

**Status Code**: `400 Bad Request`

**Response Body**:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

---

## Notes

- Ensure the `.env` file is properly configured with the following variables:
  - `CORS_ORIGIN`
  - `DB_URI`
  - `DB_NAME`
  - `PORT`
  - `JWT_SECRET`
- The `asyncHandler` utility is used to handle asynchronous errors gracefully.
- The `bcrypt` library is used for password hashing, and `jsonwebtoken` is used for token generation.

## How to Test

1. Start the server:

   ```bash
   npm run dev
   ```

2. Use a tool like Postman or cURL to send a `POST` request to the `/api/v1/users/register` or `/api/v1/users/login` endpoint with the required fields.

3. Verify the response and ensure the user is created or logged in successfully.

---

## **User Logout**

### Endpoint

**GET** `/api/v1/users/logout`

### Description

Logs out the authenticated user by blacklisting the current JWT token and clearing the authentication cookie.

### Process Flow

1. **Authentication**:
   - The route is protected by the `verifyJwt` middleware. The user must provide a valid JWT token in the `Authorization` header or as a cookie.
2. **Token Blacklisting**:
   - The token is added to the blacklist in the database to prevent further use.
3. **Cookie Clearing**:
   - The authentication cookie (`token`) is cleared from the client.
4. **Response**:
   - A `200 OK` response is returned with a success message.

### Success Response

**Status Code**: `200 OK`

**Response Body**:

```json
{
  "message": "Logout successfully"
}
```

**Error Response**:  
If the token is missing, invalid, or already blacklisted, a `401 Unauthorized` response is returned.

---

## **Get User Profile**

### Endpoint

**GET** `/api/v1/users/profile`

### Description

Fetches the profile of the currently authenticated user.

### Process Flow

1. **Authentication**:
   - The route is protected by the `verifyJwt` middleware. The user must provide a valid JWT token in the `Authorization` header or as a cookie.
2. **User Retrieval**:
   - The user is fetched from the database using the ID from the decoded JWT token.
3. **Response**:
   - A `200 OK` response is returned with the user data.

### Success Response

**Status Code**: `200 OK`

**Response Body**:

```json
{
  "user": {
    "_id": "64f9c8e9e4b0a5d6f8e9c8e9",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "message": "User profile fetched successfully"
}
```

**Error Response**:  
If the token is missing, invalid, or blacklisted, a `401 Unauthorized` response is returned.

---
