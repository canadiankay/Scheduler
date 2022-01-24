/* represents ONE interviewer and has two states: 
1. when it is not selected it only has their image
2. when it is selected, it will highlight item with a white background + show name of interviewer

A single interview object looks as follows: 
const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

Thus needs the following props: 
  --- id:number ==> id of interviewer
  --- name:string ==>  the name of the interviewer
  --- avatar:url ==> a url to an image of the interviewer
  --- selected:boolean - determines if an interviewer is selected or not and displays the name and applies appropriate styles if selected.
  --- setInterviewer:function - is run when the InterviewerListItem is clicked. This function receives the interviewer's id as an argument. It sets the selected interviewer.


*/

import React from 'react';
import 'components/InterviewerListItem.scss';
import classNames from 'classnames';

const InterviewerListItem = function (props) {

  const { name, avatar, selected, setInterviewer } = props;

  // add classnames based on props
  const interviewerClass= classNames("interviewers__item",
  {"interviewers__item--selected": selected}
  );

  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>

    
  );
}

export default InterviewerListItem;