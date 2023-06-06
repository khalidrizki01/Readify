# This is API documentation for Bookshelf Project

## Checklist

- [x] Admin API Endpoint Design
- [ ] Admin API Endpoint Implementation
- [x] User API Endpoint Design
- [ ] User API Endpoint Implementation

## Table of Contents

-  [Base URL](#base-url)
- [Admin API Endpoint](#admin-api-endpoint-need-authentication)
  - [x] [GET `/user`](#get-user)
  - [x] [GET `/user/[id]`](#get-userid)
  - [x] [POST `/books`](#post-books)
  - [ ] [PUT `/books/[book_id]`](#put-booksbook_id)

- [User API Endpoint](#general-user-api-endpoint)
    - [x] [POST `/register/user`](#post-registeruser)
    - [x] [POST `/login`](#post-login)
    - [x] [GET `/recommendation`](#get-recommendation)
    - [x] [GET `/books/`](#get-books)
    - [x] [GET `/books/[id]`](#get-booksid)
    - [ ] [POST `/readinglist`](#post-readinglist-books-id)
    - [ ] [PUT `/readinglist/[id]`](#put-readinglistid)


## Base URL

>`https://{deployment-url}/api/v1/`

this API will be divided into 2 section, which is for admin API and for general user API

-----

## Admin API Endpoint (Need Authentication)

-----

### GET `/user`

this will return all user with their encrypted password and their data.

Date created is using <mark>ISO format (YYYY-MM-DDT00:00:00.0000Z)</mark>, for more information about this please visit official javascript documentation.

request :

```query
    GET /user
```

response(200 OK) :

```json
    {    
        {
            "id":"12309124dqw091jfe0"
            "username":"Andi",
            "location":"Sleman, Yogyakarta"
            "email":"andi@example.com",
            "password":"$2a$12$CdFxPDis4W8hU/D8iykK0uo347DL3J2kHVbZXGqlzPJF2e7vJ8Ffq",
            "book_list":"1,201,30,40",
            "createdAt":"2011-10-05T14:48:00.000Z"
        },
        {
            "id":"asdlm1123kjna2002"
            "username":"Ita",
            "location":"Cilacap, Jawa Tengah"
            "email":"ita@example.com",
            "password":"$2a$12$l5C658xFWPT5G1SserRPOu6b7qDJCJMWaExfVkVC4WDyV3wYRa65u",
            "book_list":"3,221,10",
            "createdAt":"2011-10-11T14:48:00.000Z"
        },
    }
```

error :

```json
    {
        "errorCode": "404",
        "errorMessage": "User not found"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```

### GET `/user/[id]`

this will return user by selected `[id]`

Date created is using <mark>ISO format (YYYY-MM-DDT00:00:00.0000Z)</mark>, for more information about this please visit official javascript documentation.

request :

```query
    GET /user/[id]
```

response :

```json
    {
            "id":"12309124dqw091jfe0"
            "username":"Andi",
            "location":"Sleman, Yogyakarta"
            "email":"andi@example.com",
            "password":"$2a$12$CdFxPDis4W8hU/D8iykK0uo347DL3J2kHVbZXGqlzPJF2e7vJ8Ffq",
            "book_list":"1,201,30,40",
            "createdAt":"2011-10-05T14:48:00.000Z"
    }
```

error :

```json
    {
        "errorCode": "404",
        "errorMessage": "User not found"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```


### POST `/books`

this will upload a books to the server. Details :

|attributes|description|
|-----|-----|
|book_id|refer to book_id at goodreads.com, this should in `int`|
|image_url|could be any image URL for book covers, as long as it is not a temporary URL|

request :

```json
    POST /books
    host : {deployment}
    Content-Type : application/json
    Accept : application/json
    Accept-Charset : utf-8
    body :
    {
        "original_title":"50 Shades of Grey",
        "book_id":"10818853",
        "isbn":"9781612130293",
        "authors": "E.L. James",
        "original_publication_year":"2011",
        "language-code":"en-US",
        "image_url":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385207843i/10818853.jpg"
    }
```

response :

```json
    {
            "statusCode":"202"
            "statusMessage":"Data inputed"
    }
```

error :

```json
    {
        "errorCode": "401",
        "errorMessage": "Mohon isi {field yang kosong}"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```
### PUT `/books/[book_id]`

this will edit a books to the server. Details :

|attributes|description|
|-----|-----|
|book_id|refer to book_id at goodreads.com, this should in `int`|
|image_url|could be any image URL for book covers, as long as it is not a temporary URL|

request :

```json
    PUT /books/[book_id]
    host : {deployment}
    Content-Type : application/json
    Accept : application/json
    Accept-Charset : utf-8
    body :
    {
        "original_title":"50 Shades of Grey",
        "book_id":"10818853",
        "isbn":"9781612130293",
        "authors": "E.L. James",
        "original_publication_year":"2011",
        "language-code":"en-US",
        "image_url":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385207843i/10818853.jpg"
    }
```

response :

```json
    {
            "statusCode":"202"
            "statusMessage":"Data inputed"
    }
```

error :

```json
    {
        "errorCode": "401",
        "errorMessage": "Mohon isi {field yang kosong}"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```

### DELETE `/books/[book_id]`

this will delete a books to the server. Details :

|attributes|description|
|-----|-----|
|book_id|refer to book_id at goodreads.com, this should in `int`|

request :

```json
    DELETE /books/[book_id]
    host : {deployment}
    Content-Type : application/json
    Accept : application/json
    Accept-Charset : utf-8
```

response :

```json
    {
            "statusCode":"202",
            "statusMessage":"Data deleted"
    }
```

error :

```json
    {
        "errorCode": "401",
        "errorMessage": "Please provide books_id"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```

-----

except for given methods above, default response for any other method is :

```json
    {
        "errorCode": "405",
        "errorMessage": "Method not permitted"
    }
```


-----

## General User API Endpoints

-----

### POST `/register/user/`

this is for registering user into our database.

request :
```json
    POST /register/user
    Content-Type: application/json

{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "secretpassword"
}
```

response :

```json
{
    "statusCode": "201",
    "message": "User registered successfully"
}
```

error :
```json
{
    "statusCode": "400",
    "error": "Invalid request payload"
}
```

### POST `/login`

this endpoint allow user to authenticate and get their session token.

request :
```json
POST /login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "secretpassword"
}
```
response :
```json
{
    "statusCode": "200",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1MjMxMjMxMjMxLCJpYXQiOjE2MzExNjE5NTYsImV4cCI6MTYzMTI0NTM1Nn0.7C5TpewGVLd3n6ZkDMYF02Pn6hSWu0D3BUsJy0eNyzA"
}
```

error :
```json
{
    "statusCode": "400",
    "error": "Invalid username or password"
}
```
### GET `/recommendation`

this API will get a recommendation based on the user's reading list.
Need username query parameter.

request :

```
    GET /recommendations?uname={{username}}
    Authorization: Bearer <token>
```

response :

```json
{
    "statusCode": "200",
    "recommendations": [
        {
            "id": 1,
            "title": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "genre": "Fiction",
            "description": "The story of Holden Caulfield, a teenager from New York City."
        },
        {
            "id": 2,
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "genre": "Fiction",
            "description": "The story of a young girl and her father, a lawyer, in Alabama."
        }
    ]
}

```

error :

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```


### GET `/books`

this will get all books from the server. Details :

|attributes|description|
|-----|-----|
|book_id|refer to book_id at goodreads.com, this should in `int`|
|image_url|could be any image URL for book covers, as long as it is not a temporary URL|

request :
```
    GET /books
    Authentication: Bearer <token>
```

response :
```json
{ 
    {
        "original_title":"50 Shades of Grey",
        "book_id":"10818853",
        "isbn":"9781612130293",
        "authors": "E.L. James",
        "original_publication_year":"2011",
        "language-code":"en-US",
        "image_url":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385207843i/10818853.jpg"
    },
    {...}
}
```

error :

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```
### GET `/books/[id]`

this will get a book from the server by id. Details :

request :
```
    GET /books/10818853
    Authentication: Bearer <token>
```

response :
```json
{
    "original_title":"50 Shades of Grey",
    "book_id":"10818853",
    "isbn":"9781612130293",
    "authors": "E.L. James",
    "original_publication_year":"2011",
    "language-code":"en-US",
    "image_url":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385207843i/10818853.jpg"
}
```
error :


```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```
```json
    {
        "errorCode": "404",
        "errorMessage": "Not Found"
    }
```
<!-- 
### GET `/books/content/[id]`

request :

    this is req

response :

    asdasd

error :

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
``` -->

### POST Reading List book(s) by `[id]`

this will post a book to user's reading list. Details :

request :

```json
POST /reading-lists
Authentication: Bearer <token>
Content-Type: application/json

    {
        "name": "My Reading List",
        "books": [1, 2, 3]
    }

```
response :
```json
    {
        "statusCode": "201",
        "message": "Reading list created successfully",
        "readingListId": 1
    }
```
error :

```json
    {
        "errorCode": "400",
        "error": "Invalid request payload"
    }
```


```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```


### PUT/EDIT Reading List Book(s) by `[id]`

this allow user to edit its reading list by its id.

request :
```json
PUT /reading-lists/1
Authentication: Bearer <token>
Content-Type: application/json
    {
        "name": "Updated Reading List",
        "books": [1, 4, 5]
    }
```
response :
```json
    {
        "statusCode": "200",
        "message": "Reading list updated successfully"
    }
```

error :

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```

```json
    {
        "errorCode": "404",
        "errorMessage": "Reading list ID Not Found"
    }
```

### DELETE Reading List Book(s) by `[id]`

This endpoint allows users to delete a reading list by its ID.

request :

```json
DELETE /reading-lists/1
Authentication: Bearer <token>
```

response :

```json
    {
        "statusCode": "200",
        "message": "Reading list deleted successfully"
    }
```

error :

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```

```json
    {
        "errorCode": "404",
        "errorMessage": "Reading list ID Not Found"
    }
```
