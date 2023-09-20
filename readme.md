# ASMR Sound API

Welcome to the ASMR Sound API! This API serves ASMR sounds to an Android APK designed for sound enthusiasts. It provides endpoints for accessing sounds and managing users.

## Table of Contents

- [Project Overview](#project-overview)
- [Team Members](#team-members)
- [Versioning](#versioning)
- [API Endpoints](#api-endpoints)
- [How to Contribute](#how-to-contribute)

## Project Overview

The ASMR Sound API is a backend service that caters to ASMR (Autonomous Sensory Meridian Response) enthusiasts by delivering a variety of soothing and relaxing sounds. It is designed to work in conjunction with an Android APK, allowing users to access and enjoy ASMR content.

## Team Members

- [@santigalardi](https://github.com/santigalardi) - Project Lead & API Developer
- [@Davidongo93](https://github.com/Davidongo93) - Project Lead & API Developer
- [@Ssamza](https://github.com/Ssamza) - Project Lead & API Developer

Feel free to add more team members and their roles as needed.

## Versioning

We use [Semantic Versioning (SemVer)](https://semver.org/) for versioning this API.

- Current version: **v0.1.0**

-Roadmap versions:

-Current version: **v0.1.0**
-Main features:   **v0.1.9**
-Devs testing:    **v0.2.0-alpha**
-Fixed bugs:      **v0.2.0-alpha.1**
-Users testing:   **v0.2.0-beta**

Please refer to our [Changelog](changelog.md) for version history.

## API Endpoints

### Get Sounds

Endpoint: `GET /sounds/asmr`

Description: Retrieve a list of available ASMR sounds.

Example Request:
```http
GET /sounds/asmr
```

Example Response:
```json
{
[
    {
        "_id": "64f0c1299103fb7588e044f4",
        "published_at": 1681894847021,
        "title": "Fall Asleep Learning about the Weirdest & Worst Inventions",
        "audio": "https://www.listennotes.com/e/p/0a7549332542485c8ef3148936202997/",
        "category": "storytelling",
        "__v": 0,
        "image": "https://res.cloudinary.com/dnrahbx7u/image/upload/v1693933529/categories/storytelling/ziaydkcvxz5neukjvxpg.jpg"
    },
    {
        "_id": "64f0c1299103fb7588e044de",
        "published_at": 1691571600000,
        "title": "The Stream in Finland",
        "audio": "https://www.listennotes.com/e/p/d34ff319ef6d438cb25727fb821f70b5/",
        "category": "water",
        "__v": 0,
        "image": "https://res.cloudinary.com/dnrahbx7u/image/upload/v1693933558/categories/water/kg082d7pk4txy8jduens.jpg"
    }
    ]
}
```

### User Management

#### Register a User

Endpoint: `POST /users/register`

Description: Register a new user.

Example Request:
```http
POST /users/register
Content-Type: application/json

{
  "username": "newuser",
  "password": "securepassword"
}
```

Example Response:
```json
{
  "message": "User registered successfully"
}
```

You can document additional endpoints for user management here.

## How to Contribute

We welcome contributions to improve and expand the ASMR Sound API. To contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a Pull Request (PR) to our develop repository.

Thank you for contributing to the ASMR Sound API! 🎧


# REST API Principles (Delete until complete it)

This README outlines the key principles of our REST API and provides examples for clarity.

## 1. URLs for Everything

- Each resource (data or functionality) should have a unique URL, similar to a web address.

    Example: `/users/1` to retrieve user with ID 1.

## 2. HTTP Verbs

- Use standard HTTP verbs for CRUD operations:
    - GET for reading,
    - POST for creating,
    - PUT for updating, and
    - DELETE for deleting.

    Example: 
    - `GET /users` to retrieve all users.
    - `POST /users` to create a new user.

## 3. JSON in the Body

- Typically, use JSON in request and response bodies to send and receive data. JSON is easy to understand and work with.

    Example Request:
    ```json
    POST /users
    Content-Type: application/json

    {
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

## 4. Hierarchical Structure

- Organize your URLs hierarchically to reflect the structure of your data.

    Example: `/departments/HR/employees` to get HR department employees.

## 5. Stateless

- REST APIs are stateless, meaning each request should carry all necessary information. No server-side state should be maintained between requests.

## 6. Informative Responses

- Include HTTP status codes in responses to indicate success or issues. For instance, use `200 OK` for success and `404 Not Found` for resource not found.

    Example Response:
    ```json
    {
      "message": "User not found",
      "status": 404
    }
    ```

## 7. Versioning

- Consider versioning your API in the URL or headers to ensure future compatibility.

    Example: `/v1/users` for version 1 of the users endpoint.

## 8. Security

- Implement security measures such as authentication and authorization to protect your resources.

## 9. Documentation

- Provide clear and detailed documentation on how to use your API, including request and response examples.

    Example:
    - Check our API documentation [here](https://example.com/api-docs).

## 10. Testing and Monitoring

- Conduct comprehensive testing and establish monitoring systems to ensure API performance and availability.
