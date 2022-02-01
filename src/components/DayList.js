// component that contains all the days -- container responsible for rendering a list of DayListItem components

import React from 'react';
import DayListItem from 'components/DayListItem.js';

export default function Daylist(props) {

  // function that maps over days array to return <DayListItem> compoents as children
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
