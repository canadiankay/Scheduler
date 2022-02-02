import React, { useState } from 'react';
import Button from "components/Button.js";
import InterviewerList from "components/InterviewerList.js";


// user input their info, saves it and edits it
/* 
-- has two visual states: 
1) if user is creating a new appt 2) editing an exisitng appt 
-- the name and interviewer id needs to be updated as per user so we need to use state

*/
export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  // reset the inputs
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  //function to validate form -- both student and interview must be selected or else we get an error
  function validate() {
    // check if user has entered a name
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }

    //check if user has chosen interviewer
    if (!interviewer) {
      setError("Please select an interviewer before proceeding");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
    console.log({student, interviewer});
  }


  return (
    <main className="appointment__card appointment__card--create">

    {/* THIS IS THE PART THAT CREATES AN EXISTING APPT */}
    <section className="appointment__card-left">
      <form onSubmit={event => event.preventDefault()} autoComplete="off">
        <input
          className="appointment__create-input text--semi-bold"
          student="student"
          type="text"
          placeholder="Enter Student Name"
          value={student}
          onChange={e =>setStudent(e.target.value)}
          data-testid="student-name-input"

        />
      </form>

        <section className="appointment__validation">{error}</section>

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
          <Button confirm onClick={validate} >Save</Button>
        </section>
      </section>
    </main>
  );
}

