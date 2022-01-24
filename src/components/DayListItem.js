/* component for ONE specific day
-- each day will display differently depending on what state it's in
--- needs three props:
  --- days:Array ==> a list of day objects (each object has an id, name, spots)
  --- day:String ==> current selected day
  --- setDay: Function ===> accepts the name of the day

*/

import React from 'react';
import classNames from "classnames";
import "components/DayListItem.scss";

const DayListItem = function(props) {

  const { name, spots, selected, setDay } = props;

  
  // adds classNames based on props
  const dayClass= classNames("day-list__item",
    {"day-list__item--selected": selected,
    "day-list__item--full": spots === 0}
    );
  

  return ( 
  
    // this represents the entire day item 
    <li 
      className= {dayClass} 
      onClick={() => setDay(name)}
    >
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{spots} spots remaining</h3>
    </li>
  
  );
  
}

export default DayListItem;

