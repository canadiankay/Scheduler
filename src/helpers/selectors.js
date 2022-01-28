  // function that will return an Array of appointments for the given day 
 export function getAppointmentsForDay(state, day) {
    //start by finding the object in our state.days array who's name matches the provided day.  
    const appointmentsArray = state.days.filter(singleDay => {
      return singleDay.name === day;
    });

    //Validation check-- If there are no appointments on the given day, our days data will be empty = return an empty array 
    if (appointmentsArray.length === 0 || !day) {
      return [];
    }

    //appointments array for given day 
    const apptsArray = appointmentsArray[0].appointments
    // iterate trhough appointments array for given day, find the correspeonding appointments (state.appointments)
    const appointsmentsPerDay = apptsArray.map((appointment) => {
      //using the appointments array, find the correspeonding appointments (state.appointments) (id = each appointment)
      return state.appointments[appointment];
    })

    // return array of the appointments     
    return appointsmentsPerDay;

  };


// function that will return an object containing interview data 
export function getInterview(state, interview) {
  const { interviewers } = state;

  if (interview) {
    const interviewer = interviewers[interview.interviewer];
    return { 
      "student": interview.student,
      "interviewer": interviewer
    };
    
  } else {
    return null;
  }



};

