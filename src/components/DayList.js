/* component that contains all the days -- container responsible for rendering a list of DayListItem components
-- this component has no state-- all the data it needs is provided by its parent 
-- accepts 3 props which are as follows: 
  days: Array (with individual objects for each day 
    {
      id:1, 
      name:"Monday"
      spots:2)
    }
  day:String ==> the currently selected day
  setDay:Function==> sets the currently selected day and accepts the name of the day

*/


import React from 'react';
import DayListItem from 'components/DayListItem.js';

const DayList = function(props) {

  // function that maps over days array to return <DayListItem> compoents as children
  const days = props.days.map((day) => 
    <DayListItem
    key={day.id}
    name={day.name} 
    spots={day.spots} 
    // We have to update value and onChange to reflect the change in App.js
    // selected={day.name === props.day}
    selected={day.name === props.value}
    // setDay={props.setDay}
    // setDay={() => props.setDay(props.id)}
    setDay={() => props.onChange}
    />
  );

  return (
    <ul>
      {days}
    </ul>
  );
}


export default DayList;