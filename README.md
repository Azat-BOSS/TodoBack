# TodosBack
Created project, that includes todo. User can see, create, delete, and update todos. Project is creating using JavaScript with library NodeJS.
All Tech stack on the bottom.
- index.js - main file, includes imports for express, mongoose, and cors policy for connecting with frontend.
- Router - Routes folder url, and endpoints
- Controllers - Main folder entire application logic. Using classes.
- Schema - Folder with schemas for controllers of MongoDB
- Middleware - folder with middlewares


## Tech Stack
- JavaScript
- NodeJS
- Express
- MongoDB

## libraries
- JsonWebToken
- Bcrypt
- Dotenv
- Nodemon
- Mongoose

##  Endpoints

### Todos
 - GET `/api/todos` - get All Todos
 - GET `/api/todos/id` - get Todo | (Get One Todo By Id)
 - POST `/api/todos` - create todo
 - DELETE `/api/todos/id` - delete todo
 - PATCH `/api/todos/id` - update checkbox isDone
 - PATCH `/api/todos/todo/id` - change Todo

All Routers or Requests need in headers __"Authorization"__ with "__Bearer Token__"
### Auth
- GET `/auth/users` - get All users
- POST `/auth/registration` - create User
- POST `/auth/login` - login User

__When user has logined server send jsonwebtoken and         {success: true} for client. In all routers todo's have authMiddleware where client if login get success to have some action. Otherwise client can't interact with system.__


## Shemas
### Todo
- author - required field; type: String
- title - required field; type: String
- content - required field; type: String
- isDone - default: "false"; type: Boolean

### Auth
- name - non required; type: String
- email - required field; type: String
- password - required field; unique: "true"; type: String

## Download Dependencies

```
npm install
```

## Start Project

```
npm start
```
## Developer mode
```
npm run dev
```
Server will work on PORT 3001, or it takes PORT from .env



