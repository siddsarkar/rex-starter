# Documentation - REX

> barebones full-stack app featuring nodejs-express backend and webpack-react frontend connected to mongodb/azurecosmosdb database

## TODOS

- [x] multiple database support
- [x] discrimintor models
- [ ] deployment
- [ ] linting/formatting in server

## Folder Structure

- **/client** - react front-end configured with webpack
- **/controllers** - performs action on requests
- **/models** - mongoose models to be stored to database
- **/disciminators** - mongoose models to be stored to database to store multiple type of models into a collection
- **/middlewares** - helpers functions such as auth, validation
- **/routes** - routes are defined here and connected to specified controller
- **app.js** - entry to server-backend
- **db.js** - database functions based on provider (azure cosmos db, mongo db atlas)
- **.rest** - api testing (POST,PUT,etc)

## Usage

- pick database provider and set credentials according to .env.sample into a new file named `.env`
- update app.js to use specified credentials into `db.connectXxxYyyDb`

## Environment Setup

- developing backend (api)

  - `yarn dev` the backend server
  - test api using `.rest`

- developing frontend

  - `yarn start` the backend server
  - `yarn client` to start the react frontend
