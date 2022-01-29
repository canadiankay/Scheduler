import React from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "../../hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";




//Appointment component HERE -
const Appointment = function (props) {
  const {time, interview, interviewers, bookInterview, id, cancelInterview } = props;
  
  const {mode, transition, back} = useVisualMode (
    interview ? SHOW : EMPTY
    );
    
    
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition (SAVING);
    bookInterview(id, interview)
    .then(() => {
      transition(SHOW)
    })
    .catch((err) => console.log("This is an error", err))
  };

  //delete appt 
  function deleteAppointment() {
    transition(DELETING);
    //this sends the request to the database to delete then takes user to empty when request is successful
    cancelInterview(id).then(() => transition(EMPTY))
    .catch((err) => console.log("This is an error:", err));
  }






  return (

    <article className="Appointment">

      <Header time={time} />
      {/* Conditions to support the various modes/views */}

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          id={id}
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
          
        />
    )}

    {mode === CREATE && (
      <Form
        interviewers={interviewers}
        bookInterview={bookInterview}
        onSave={save}
        onCancel={() => back()}
      />
    )}

    {mode === SAVING && <Status message="Saving" />}

    {mode === DELETING && <Status message="Deleting" />}

    {mode === CONFIRM && (
      <Confirm 
        message="Are you sure you want to cancel this appointment?"
        onConfirm={deleteAppointment}
        onCancel={() => back()}
      />
    )}
    
    {mode === EDIT && (
      <Form 
        student={interview.student}
        interviewer={interview.interviewer}
        interviewers={interviewers}
        bookInterview={bookInterview}
        onCancel={() => transition(SHOW)}
        onSave={save}
      
      
      />

    )}
    </article>
  );
}

export default Appointment;