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
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>  );
}

export default InterviewerList;