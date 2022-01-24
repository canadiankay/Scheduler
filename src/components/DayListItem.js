/* component for ONE specific day
-- each day will display differently depending on what state it's in
--- needs three props:
  --- days:Array ==> a list of day objects (each object has an id, name, spots)
  --- day:String ==> current selected day
  --- setDay: Function ===> accepts the name of the day

*/

import React from 'react';
import classNames from "classnames";
import "components/DayListItem";

const DayListItem = function(props) {

  
  // adds classNames based on props
  const dayClass= classNames("day-list__item",
    {"day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0}
    );
  

  return ( 
  
    // this represents the entire day item 
    <li 
      className= {dayClass} 
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  
  );
  
}

export default DayListItem;

