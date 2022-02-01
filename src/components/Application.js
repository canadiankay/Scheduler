import React from "react";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {

  const { 
    state, 
    setDay, 
    bookInterview, 
    cancelInterview

  } = useApplicationData();

  //list of appointments and interviewers for that day
  const interviewers = getInterviewersForDay(state, state.day);
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  //function that reiteraties ovre appointments array, passing down props
  const appointmentSchedule = dailyAppointments.map((appointment) => {
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={getInterview(state, appointment.interiew)}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    )
  });
      
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList
        days={state.days}
        day={state.day}
        setDay={setDay}
      
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>

      {/* The schedule-- a list of all of our appointment components */}
      <section className="schedule">
        {appointmentSchedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

