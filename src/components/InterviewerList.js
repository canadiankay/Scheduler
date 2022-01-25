/* holds all of the InterviewerListItem components together

array of interviewers looks like this:
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

--- receives three props:
  --- interviewers:array - an array of objects as seen above
  --- setInterviewer:function - a function that accepts an interviewer id. This function will simply be passed down to the InterviewerListItem
  --- interviewer:number - a number that represents the id of the currently selected interviewer

*/




import React from 'react';
import InterviewerListItem from 'components/InterviewerListItem';
import 'components/InterviewerList.scss';

const InterviewerList = function (props) {

    // function that maps over interviewers array to return <InterviewerListItem> components as children
    const interviewers = props.interviewers.map((interviewer) => {
      return (
        <InterviewerListItem
          key={interviewer.id}
          name={interviewer.name} 
          avatar={interviewer.avatar} 
          // selected={interviewer.id === props.interviewer}
          selected={interviewer.id === props.value}
          // setInterviewer={() => props.setInterviewer(interviewer.id)}
          setInterviewer={() => props.onChange(interviewer.id)}
        />
      );
    });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className={interviewers}></ul>
    </section>  );
}

export default InterviewerList;