# User Registration API

This document explains the process of registering a user in the database, including the required fields, middleware validations, and the final output.

## Endpoint

**POST** `/api/v1/users/register`

## Required Fields

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
