import React from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import useVisualMode from "../../hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";


//Appointment component HERE -
const Appointment = function (props) {
  const {time, interview, interviewers, bookInterview } = props;

 const {mode, transition, back} = useVisualMode (
   interview ? SHOW : EMPTY
 );


  return (

    <article className="Appointment">

      <Header time={time} />
      {/* add conditions to support the various modes/views */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
    )}

    {mode === CREATE && (

      <Form
        interviewers={interviewers}
        bookInterview={bookInterview}
        onSave={props.onSave}
        onCancel={() => back()}
      />
    )}





    </article>


  );
}

export default Appointment;