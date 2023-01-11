# TodosBack
Created project, that includes todo. User can see, create, delete, and update todos. Project is creating using JavaScript with library NodeJS.
All Tech stack on the bottom.
- index.js - main file, includes imports for express, mongoose, and cors policy for connecting with frontend.
- Router - Routes folder url, and endpoints
- Controllers - Main folder entire application logic. Using classes.
- Schema - Folder with schemas for controllers of MongoDB

## Tech Stack
- JavaScript
- NodeJS
- Express
- Nodemon
- Mongoose
- MongoDB

##  Endpoints
 - GET `/api/todos` - get All Todos
 - GET `/api/todos/id` - get All Todos | (Get One Todo By Id)
 - POST `/api/todos` - create todo
 - DELETE `/api/todos/id` - delete todo
 - PATCH `/api/todos/id` - update checkbox isDone
 - PATCH `api/todos/todo/id` - change Todo

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

