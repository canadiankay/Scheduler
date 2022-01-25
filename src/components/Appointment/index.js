import React from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

//Appointment component HERE -
const Appointment = function (props) {

  return (

    <article className="Appointment">

      <Header time={props.time} />
      {props.interview ? <Show interview={props.interview} /> : <Empty />}




    </article>


  );
}

export default Appointment;