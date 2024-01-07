// src/apiDocumentation.js

function generateAPIDocumentation() {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>API Documentation</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  margin: 20px;
              }
  
              h1, h2 {
                  color: #333;
              }
  
              pre {
                  background-color: #f5f5f5;
                  padding: 10px;
                  border-radius: 5px;
              }
          </style>
      </head>
      <body>
      
          <h1>API Documentation</h1>
      
          <h2>Authentication Endpoints:</h2>
          <pre>
            • POST /api/auth/signup: create a new user account.<br>
            • POST /api/auth/login: log in to an existing user account and receive an access token.<br>
          </pre>
      
          <h2>Note Endpoints:</h2>
          <pre>
            • GET /api/notes: get a list of all notes for the authenticated user.<br>
            • GET /api/notes/:id: get a note by ID for the authenticated user.<br>
            • POST /api/notes: create a new note for the authenticated user.<br>
            • PUT /api/notes/:id: update an existing note by ID for the authenticated user.<br>
            • DELETE /api/notes/:id: delete a note by ID for the authenticated user.<br>
            • POST /api/notes/:id/share: share a note with another user for the authenticated user.<br>
            • GET /api/search?q=:query: search for notes based on keywords for the authenticated user.<br>
          </pre>
      
      </body>
      </html>
    `;
}

module.exports = generateAPIDocumentation;
