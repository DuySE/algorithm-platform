### Introduction
This is a website that hosts competitive programming contests to horn problem solving and technical interview of developers.

It is bootstraped with Create React App with additional modifications.

### App structure
![App structure](structure.png)

### Folder structure
A root folder named `algorithm-platform` contains two separated folders:
* `client`: frontend development (ReactJS + Redux-saga)
* `server`: backend development (ExpressJS + MongoDB)

Each folder has its own `node_modules` and `package.json`.

### Getting started
1. Install dependencies: `yarn install`
2. Start server: `cd server && node index.js`
3. Open another cmd and start client: `cd client && yarn start`

### Additional packages
`nodemon`: keep track of file change.<br>
`concurrently`: start both your frontend and backend at the same time.