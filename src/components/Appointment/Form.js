import React, { useState } from 'react';
import Button from "components/Button.js";
import InterviewerList from "components/InterviewerList.js";


// user input their info, saves it and edits it
/* 
-- has two visual states: 1) if user is creating a new appt 2) editing an exisitng appt 
-- the name and interviewer id needs to be updated as per user so we need to use state

*/
const Form = function (props) {

  const [studentName, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  // reset the inputs
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

    const save = () => {
    props.onSave(props.student, interviewer);
  }

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
            value={studentName}
            onChange={(event) =>setStudent(event.target.value)}

          />
        </form>

        {/* interviewer list array that shows all the interviewers */}
        <InterviewerList 
          interviewers={props.interviewers}
          value= {interviewer}
          onChange={setInterviewer}
        />
      </section>


      {/* THIS IS THE PART THAT EDITS AN EXISTING APPT */}
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={save} >Save</Button>
        </section>
      </section>
    </main>
  )
}

export default Form;