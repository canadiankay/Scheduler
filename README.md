# Interview Scheduler

This single-page web app built using React allows a user to create, edit and delete interview appointments.

The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application. Both servers run concurrently; requests are proxied from the Webpack development server to the API server. **Scheduler API** which can be found here: https://github.com/canadiankay/scheduler-api

This app has undergone testing using Storybook, Jest and Cypress.

### The Finished Product
![Home page](https://raw.githubusercontent.com/canadiankay/Scheduler/master/docs/HomeScreen.png)

![A run through the entire application](https://raw.githubusercontent.com/canadiankay/Scheduler/master/docs/schedulerApp-runThrough.gif)


#### Error Handling Messages

![If name is blank](https://raw.githubusercontent.com/canadiankay/Scheduler/master/docs/EnterName-ErrorMessage.png)

![If interviewer not chosen](https://raw.githubusercontent.com/canadiankay/Scheduler/master/docs/SelectInterviewer-ErrorMessage.png)

![If a user wants to delete a message a confirmation message will pop up](https://raw.githubusercontent.com/canadiankay/Scheduler/master/docs/DeleteAppt-WarningMesasge.png)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

npm start


## Running Jest Test Framework

npm test

## Running Storybook Visual Testbed

npm run storybook

## Dependencies
* Axios
* classnames
* normalize.css
* React 
* Webpack
* Babel
* Storybook 
* Webpack Dev Server
* Jest 
* Testing Library



