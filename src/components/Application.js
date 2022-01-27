import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";


// list of hardcoded appointments- will use API later
const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  }
];

export default function Application(props) {

  //instead of using multiple UseStates we can combine them into a state object
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // appointments: {}
  });


  //updates the state with the new day 
  const setDay = day => setState({ ...state, day });
  const setDays = days => setState(prev => ({ ...prev, days }));

  const state = { day: "Monday", days: [] };
  // spread operator to create a new object with all of the existing keys of state then new declared keys will overwrite existing keys
  setState({ ...state, day: "Tuesday" });
  //^creates a new object with the existing days array and a new value for the day.


  // effect to make a GET request to update the days state with response---- renders data for the days (sidebar)
  useEffect(() => {
    axios.get("/api/days")
    .then(response => {
      setDays(() => response.data ); 
      console.log("this is the response:", response.data)
    });
  }, []);
  // ^returning an empty arrays stops browser from constnatly making the request; only makes it when days is updated/changed


  //function that reiteraties ovre appointments array, passing down props
  const schedule = appointments.map((appointment) => {
    return (
      <Appointment
        key={appointment.id}
        {...appointment}
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

