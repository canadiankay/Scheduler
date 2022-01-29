import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = function() {

    //instead of using multiple UseStates we can combine them into a state object
    const [state, setState] = useState({
      day: "Monday",
      days: [],
      appointments: {},
      interviewers: {}
    });

    //updates the state with the new day 
    const setDay = day => setState(prev => ({ ...prev, day }));

    //update spots with
    const updateSpots = function (add, remove) {
      const updateDay = state.days.find((day) => day.name === state.day);
      const days = [...state.days];
  
      if (remove) {
        updateDay.spots++;
      } else if (add) {
        updateDay.spots--;
      }
  
      days[updateDay.id - 1] = updateDay;
      return days;
    };

    // effect to make a GET request to update the days state with response---- renders data for the days (sidebar)
    useEffect(() => {
      Promise.all([
        Promise.resolve(axios.get('/api/days')),
        Promise.resolve(axios.get('/api/appointments')),
        Promise.resolve(axios.get('/api/interviewers'))
      ])
      .then((all) => {
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
    


    // function taht allows us to create (and save) an interview appt 
    function bookInterview(id, interview) {
      const add = !state.appointments[id].interview;
      console.log(id, interview);
  
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
    
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
  
      return (axios.put(`api/appointments/${id}`, appointment)
      .then( () => setState({ ...state, appointments, days: updateSpots(add) }))
      .catch((err) => console.log("This is an error:", err))
  
    )};

    // function that allows us to cancel/delete an interview appt
    function cancelInterview(id) {
      const appointment = {
        ...state.appointments[id],
        interview: null
      };
    
      const appointments = {
        ...state.appointments[id],
         [id]: appointment
      };
    
      return (axios.delete(`api/appointments/${id}`, appointment)
      .then( () => setState( {...state, appointments, days: updateSpots(null, true)}))
      .catch((error) => console.log("This is an error:", error))
     )
  };



  return (
    { state, setDay, bookInterview, cancelInterview, updateSpots }
  )
}

export default useApplicationData;