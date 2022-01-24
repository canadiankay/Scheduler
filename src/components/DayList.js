/* component that contains all the days -- container responsible for rendering a list of DayListItem components
-- this component has no state-- all the data it needs is provided by its parent 
-- props are as follows: 
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

  // map over days array to return <DayListItem> compoents as children
  const days = props.days.map((day) => 
    <DayListItem
    key={day.id}
    name={day.name} 
    spots={day.spots} 
    selected={day.name === props.day}
    setDay={props.setDay}
    />
  );

  return (
    <ul>
      {days}
    </ul>
  );
}


export default DayList;