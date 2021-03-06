# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code structure

Code structure and tidyness checked with ESLint. Every component has it's own folder with it's respective sass file. Most states are set to global for ease of use, but some states that aren't required are kept locally in the components. App doesn't use Bootstap or any other css framework, every responsive part is done from scratch, with limited use of breakpoints, but mostly just flex. State is managed by redux, and the reducers are in the reducer folder, while they are combine in the store folder via combineReducers function from redux. Routing is managed locally with react-router-dom react package. Api used to fetch and search the movies is the tmdb api. React version used in the time of makjing this is version 17.0.2.
App is not done, Next thing on the todo list is adding reviews.

## Purpose of the app

This app is made as a test project in a hiring process, but it was and still is an opportunity for learning and growth, just like any other learning endevour. I hope that this project can be use by other people getting into react and some basics to help them get a hang of this great JavaScript library.
