  // function that will return an Array of appointments for the given day 
 export const getAppointmentsForDay = function(state, day) {
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
    const appointsmentsPerDay = apptsArray.map((id) => {
      //using the appointments array, find the correspeonding appointments (state.appointments) (id = each appointment)
      return state.appointments[id];
    })

    // return array of the appointments     
    return appointsmentsPerDay;

  };