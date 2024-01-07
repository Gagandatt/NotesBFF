# Note API

This API provides endpoints for managing user accounts and notes.

## Table of Contents(Postman Curl Commands)
- [Authentication Endpoints](#authentication-endpoints)
  - [Sign Up](#post-apiauthsignup)
  - [Login](#post-apiauthlogin)
- [Note Endpoints](#note-endpoints)
  - [Get All Notes](#get-apinotes)
  - [Get Note by ID](#get-apinotesid)
  - [Create a Note](#post-apinotes)
  - [Update Note by ID](#put-apinotesid)
  - [Delete Note by ID](#delete-apinotesid)
  - [Share a Note](#post-apinotesidshare)
  - [Search Notes](#get-apisearchqquery)
- [Contributing](#contributing)
- [License](#license)

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the server:**

    ```bash
    npm start
    ```

    Now, the API should be running at http://localhost:3000.

## Authentication Endpoints

### POST /api/auth/signup

Create a new user account.

#### Request:
     curl --location 'http://localhost:3000/api/auth/signup' \
      --header 'Content-Type: application/json' \
      --data '{
       "username": "testuser12gaganrke",
       "password": "testpassword12gagaknre"
      }'


### POST /api/auth/login

Log in to an existing user account and receive an access token.

#### Request:
      curl --location 'http://localhost:3000/api/auth/login' \
      --header 'Content-Type: application/json' \
      --data '{
       "username": "testuser12gaganrke",
       "password": "testpassword12gagaknre"
      }'

## Note Endpoints

### GET /api/notes/:id

Get a list of all notes for the authenticated user.

#### Request:
      curl --location 'http://localhost:3000/api/notes' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: put-your-token-here'


### GET /api/notes

Get a note by ID for the authenticated user.

#### Request:
      curl --location 'http://localhost:3000/api/notes/put-note-id-here' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: your token'

### Post /api/notes

Create a new note for the authenticated user.

#### Request:
      curl --location 'http://localhost:3000/api/notes' \
     --header 'Content-Type: application/json' \
     --header 'Authorization: put-your_access_token' \
     --data '{
          "title": "New Note",
          "content": "This is a new note."
          }'

### PUT /api/notes/:id

Update an existing note by ID for the authenticated user.

#### Request:
      curl --location 'http://localhost:3000/api/notes/put-here-notes-id' \
     --header 'Authorization: your_access_token' \
     --header 'Content-Type: application/json' \
     --request PUT \
     --data '{
       "title": "Updated Note Title",
       "content": "Updated note content."
      }'

### DELETE /api/notes/:id

Delete a note by ID for the authenticated user.

#### Request:
      curl --location 'http://localhost:3000/api/notes/put-here-notes-id' \
     --header 'Authorization: put-your_access_token' \
     --request DELETE

### Post /api/notes/:id/share

Share a note to another user by the authenticated user.

#### Request:
      curl --location 'http://localhost:3000/api/notes/put-here-your-notes-id'/share \
     --header 'Authorization: put_your_access_token' \
     --data '{
        "username": "testuser1"  
      }'
     

### GET /api/search/?q=:query:

Search a note based on keyword

#### Request:
     curl --location --request GET 'http://localhost:3000/api/search?q=your%20note%20conten' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: put-your-token-here' \


## Contributing

Thank you for considering contributing to this project! Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the code follows the project's coding standards.
4. Write tests to cover your changes.
5. Submit a pull request.

We appreciate your contributions!

## License

This project is licensed under the [MIT License](LICENSE).




