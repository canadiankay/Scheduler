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
          // ^returning an empty arrays stops browser from constnatly making the request; only makes it when days is updated/changed


          // function taht allows us to create (and save) an interview appt 
      function bookInterview(id, interview) {
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
        .then( () => setState({ ...state, appointments }))
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
        .then( () => setState( ...state, appointments ))
        .catch( (error) => console.log("This is an error:", error) )
      )
    }



  return (
    { state, setDay, bookInterview, cancelInterview }
  )
}

export default useApplicationData;