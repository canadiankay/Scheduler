/* component for ONE specific day
-- each day will display differently depending on what state it's in
--- props:
  -- name:String ==> each item needs the name of the day
  -- spots:Number ==> tells us if the day is full (i.e. props.spots === 0) AND how many spots remaining for display purposes (To display the text "{props.spots} spots remaining")
  -- selected: Boolean ==> true or false depending on whether the day is full or selected
  -- [can be removed] day: String ==> day list item can figure out if we give selected day as a prop -- will check if props.name and props.day are the same 
  -- setDay: Function ==> accepts the name of the day and fires event 
  

*/

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

    //code to display number of available interview posts and if there are 0 or 1 available
    const formatSpots = function(spots) { 
      if (spots === 0) {
        return `no spots remaining`;
      } else if (spots === 1) {
        return `${spots} spot remaining`;
      } else {
        return `${spots} spots remaining`;
      }
    };
  

  return ( 
  
    // this represents the entire day item 
    <li 
      className= {dayClass} 
      onClick={() => setDay(name)}
    >
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  
  );
  
}

export default DayListItem;

