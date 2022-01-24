/* component that contains all the days -- responsible for rendering a list of DayListItem components
-- this component has no state-- all the data it needs is provided by its parent 
-- props are as follows: 
  days: Array (with individual objects for each day 
    {
      id:1, 
      name:"Monday"
      spots:2)
    }
  day:String (e.g. "Monday")
  setDay:Function (e.g. function setDay(day) {};)

-- decision has to be made as to what gets passd to DayListItem
  -- name:String ==> each item needs the name of the day
  -- spots:Number ==> tells us if the day is full (i.e. props.spots === 0) AND how many spots remaining for display purposes (To display the text "{props.spots} spots remaining")
  -- selected: Boolean ==> true or false depending on whether the day is full or selected
  -- [can be removed] day: String ==> day list item can figure out if we give selected day as a prop -- will check if props.name and props.day are the same 
  -- setDay: Function ==> accepts the name of the day and fires event 
  

*/
import React from 'react';

const DayList = function(props) {

  return (
    <div></div>


  );
  
}


export default DayList;