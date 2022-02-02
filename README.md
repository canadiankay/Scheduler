# Interview Scheduler

This single-page web app built using React allows a user to create, edit and delete interview appointments.

This app uses Express and two servers which run at the same time whereby requests are proxied between the two:
* **Scheduler API** which can be found here: https://github.com/canadiankay/scheduler-api
* the Webpack development server to this API server.

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
* axios
* classnames
* normalize.css
* react 




