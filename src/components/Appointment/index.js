//main Appointment component
import React, {useEffect} from "react";
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  // console.log("these are props:", props)
  
  const {mode, transition, back} = useVisualMode (
    props.interview ? SHOW : EMPTY
  );

  useEffect(() => {
    if (!props.interview && mode === SHOW) {
      transition(EMPTY);
    }
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
  }, [props.interview, transition, mode])
  
    
  function save(student, interviewer) {

    const interview = {
      student,
      interviewer
    };
    transition (SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW)) 
    .catch(() => transition(ERROR_SAVE, true));
  };

  //delete appt 
  function deleteAppointment() {
    transition(DELETING, true);
    //this sends the request to the database to delete then takes user to empty when request is successful
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true));
  }

  return (
    <article className="Appointment">
      <Header time={props.time} />

      {/* Conditions to support the various modes/views */}

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={()=> back()}
        />
      )}

      {mode === SAVING && <Status message="Saving" />}

      {mode === DELETING && <Status message="Deleting" />}

      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you want to cancel this appointment?"
          onConfirm={deleteAppointment}
          onCancel={()=> back()}
        />
       )}
    
      {mode === EDIT && (
        <Form 
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={() => transition(SHOW)}
          onSave={save}
        />
      )}

      {/* This is the error handling modes */}

      {mode === ERROR_SAVE && (
        <Error
          message="Your request to save this could not be completed. Please try again!"
          onClose={()=> back()}
        />
      )}

      {mode === ERROR_DELETE && (
        <Error
          message="Your request to delete this could not be completed. Please try again!"
          onClose={()=> back()}
        />
      )}
    </article>
  );
}