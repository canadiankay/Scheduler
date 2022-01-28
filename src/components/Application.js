import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import {getAppointmentsForDay, getInterview} from "helpers/selectors";



export default function Application(props) {

  //instead of using multiple UseStates we can combine them into a state object
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });


  //updates the state with the new day 
  const setDay = day => setState({ ...state, day });

  // spread operator to create a new object with all of the existing keys of state then new declared keys will overwrite existing keys
  setState({ ...state, day: "Tuesday" });
  //^creates a new object with the existing days array and a new value for the day.
  
  
  // effect to make a GET request to update the days state with response---- renders data for the days (sidebar)
  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/days')),
      Promise.resolve(axios.get('/api/appointments')),
      Promise.resolve(axios.get('/api/interviewers'))
    ])
    . then((all) => {
      setState(prev => (
        {
          ...prev, 
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }
      ))
      })
      .catch (err => console.log("This is the error:", err));
      
    }, []);
    // ^returning an empty arrays stops browser from constnatly making the request; only makes it when days is updated/changed
    
    //list of appointments for that day
    const dailyAppointments = getAppointmentsForDay(state, state.day);


    //function that reiteraties ovre appointments array, passing down props
    const schedule = dailyAppointments.map((appointment) => {
      const interview = getInterview(state, appointment.interiew);
      return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
      />
    );
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
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

