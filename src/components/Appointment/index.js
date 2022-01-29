import React from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import useVisualMode from "../../hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";




//Appointment component HERE -
const Appointment = function (props) {
  const {time, interview, interviewers, bookInterview, id } = props;
  
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
    }






  return (

    <article className="Appointment">

      <Header time={time} />
      {/* Conditions to support the various modes/views */}

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
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

    {mode === SAVING && <Status />}
    
    </article>
  );
}

export default Appointment;