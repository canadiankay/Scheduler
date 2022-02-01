import React from 'react';
import 'components/InterviewerListItem.scss';
import classNames from 'classnames';

//shows us the images/names of all the available interviewers for appointments
export default function InterviewerListItem(props) {

  const { name, avatar, selected, setInterviewer } = props;

  // add classnames based on props
  const interviewerClass= classNames("interviewers__item",
    {"interviewers__item--selected": selected}
  );

  return (
    <li className={interviewerClass} onClick={setInterviewer} data-testid={name}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
}

