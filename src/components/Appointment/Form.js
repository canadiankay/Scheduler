import React from "react";
import Button from "components/Button.js";
import InterviewerList from "components/InterviewerList.js";

// user input their info, saves it and edits it
/* 
-- has two visual states: 1) if user is creating a new appt 2) editing an exisitng appt 

*/
const Form = function (props) {
  return (
    <main className="appointment__card appointment__card--create">

      {/* THIS IS THE PART THAT CREATES AN EXISTING APPT */}
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            /* This must be a controlled component */
            value={props.name}
          />
        </form>

        {/* interviewer list array that shows all the interviewers */}
        <InterviewerList 
          interviewers={props.interviewers}
          value={props.interviewer}
          onChange={props.setInterviewer}
        />
      </section>


      {/* THIS IS THE PART THAT EDITS AN EXISTING APPT */}
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onSave} >Save</Button>
        </section>
      </section>
    </main>
  )
}

export default Form;