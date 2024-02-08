# Note-App API

## API endpoints with thier respective routes

### Users

General path: /api/users

| Request Type | Endpoint           | Variables                 |
| ------------ | ------------------ | ------------------------- |
| POST         | api/users/register | email, username, password |
| POST         | api/users/login    | email, username, password |
| GET          | api/users/logout   |                           |

### Notes

General path: /api/notes

| Request Type | Endpoint         | Variables              |
| ------------ | ---------------- | ---------------------- |
| POST         | api/notes/post   | note_text, user_id     |
| POST         | api/notes/update | note_text, id, user_id |
| GET          | api/notes/get    | user_id                |
| DELETE       | api/notes/delete | id, user_id            |
