import React from "react";
import "./styles.scss";

//Appointment component HERE -
const Appointment = function (props) {

  return (

    <article className="Appointment">

      {props.time}


    </article>


  );
}

export default Appointment;