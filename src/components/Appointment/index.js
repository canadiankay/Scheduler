import React from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

//Appointment component HERE -
const Appointment = function (props) {
  const {time, interview } = props;

  return (

    <article className="Appointment">

      <Header time={time} />
      {interview ? <Show student={interview.student} interviewer={interview.interviewer} /> : <Empty />}




    </article>


  );
}

export default Appointment;