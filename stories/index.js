import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";
import DayList from "components/DayList";
import InterviewerListItem from "components/InterviewerListItem";
import InterviewerList from "components/InterviewerList";

import Appointment from "components/Appointment/index.js";
import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
import Confirm from "components/Appointment/Confirm.js";
import Status from "components/Appointment/Status.js";
import Error from "components/Appointment/Error.js";
import Form from "components/Appointment/Form.js";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  // default button
  .add("Base", () => <Button>Base</Button>)

  // uses confirm prop to apply the .button--confirm modifier class 
  // this JSX will generate a button that is passed confirm = true as a prop but instead of writing confirm={true} we can jutst write confirm
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  // this is the resulting HTML
  // <button class="button button--confirm">Confirm</button>
  
  // uses danger prop to apply the .button--danger modifier class 
  .add("Danger", () => <Button danger>Cancel</Button>)
  
  // uses onClick prop to handle the button click event 
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  
  // uses the disabled prop to apply the disabled attribute to the button element
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));


  storiesOf("DayListItem", module) //Initiates Storybook and registers our DayListItem component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) // Provides the default background color for our component

  // To define our stories, we call add() once for each of our test states to generate a story
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />) 
  

  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />) 

  .add("Full", () => <DayListItem name="Monday" spots={0} />)

  // action() allows us to create a callback that appears in the actions panel when clicked
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} /> 
  ));


/* stories for DayList-- we are using array of object days as mock data to test:
1. Each item in the list should display the correct selected day name.
2. The setDay action should be run for the selected day when we click it.
 */

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Monday", () => (
    <DayList days={days} value={"Monday"} onChange={action("setDay")} />
  ))
  .add("Tuesday", () => (
    <DayList days={days} value={"Tuesday"} onChange={action("setDay")} />
  ))
  .add("Wednesday", () => (
      <DayList days={days} value={"Wednesday"} onChange={action("setDay")} />
  ));

  //test Interviewer list item component (+mockdata)
  const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

storiesOf("InterviewerListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
    />
  ))
  .add("Selected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected
    />
  ))
  .add("Clickable", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={action("setInterviewer")}
    />
  ));




//test InterviewerList component (+mockdata)
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

storiesOf("InterviewerList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Initial", () => (
    <InterviewerList
      interviewers={interviewers}
    />
  ))
  .add("Selected", () => (
    <InterviewerList
      interviewers={interviewers}
      value={3}
    />
  ))
  .add("Clickable", () => (
    <InterviewerListItem
      name={interviewer.name}
      avatar={interviewer.avatar}
      onChange={() => action("setInterviewer")}
    />
  ));


// stories for testing the Appointment component
storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => (
    <Appointment/>
  ))

  .add("Appointment with Time", () => (
  <Appointment 
    time="12pm"
    />
  ))
  // stories for testing the Appointment- Header component since its a child of Appointment
  .add("Header", () => (
    <Header
      time="12pm"
    />
  ))

  //testing the Appointment- Empty component
  .add("Empty", () => (
    <Empty
    onAdd={action("onAdd")}
    />
  ))

  //testing the Appointment- Show component
  .add("Show", () => (
    <Show
    onEdit={action("onEdit")}
    onDelete={action("onDelete")}
    />
  ))

  //testing the Appointment- Show component
  .add("Confirm", () => (
    <Confirm
    message= "Delete the appointment?"
    onCancel={action("onCancel")}
    onConfirm={action("onConfirm")}
    />
  ))

  //testing the Appointment- Status component
  .add("Status", () => (
    <Status
    message= "Deleting"
    />
  ))
  //testing the Appointment- Error component
  .add("Error", () => (
    <Error
    message= "Could not delete appointment"
    onClose={action("onClose")}
    />
  ))

  //testing the Appointment- Form Edit component
  .add("Edit", () => (
    <Form
    // when a person is editing an appointment, student name and interviewer needs to be pre-filled with existing data 
      studentName=""
      interviewer={interviewer.id}
      interviewers={interviewers}
      onSave={action("onSave")}
      onCancel={action("onCancel")}
    />
  ))

  //testing the Appointment- Form Create component
  .add("Create", () => (
    <Form
      interviewers={interviewers}
      onSave={action("onSave")}
      onCancel={action("onCancel")}
    />
  ))
  .add("Appointment Empty", () => (
    <Fragment>
      <Appointment 
        id={1} 
        time="4pm" 
        interview={{ student: "Lydia Miller-Jones", interviewer }}
      />
      <Appointment time="5pm" />
    </Fragment>
  ))

  .add("Appointment Booked", () => (
    <Fragment>
      <Appointment
        id={1}
        time="4pm"
        interview={{ student: "Lydia Miller-Jones", interviewer }}
      />
      <Appointment time="5pm" />
    </Fragment>
  ))




