import React from "react";

// once we book an interview, we want to show it to users that
// when show view is visible, user can hover over it revealing edit + delete buttons


const Show = function (props) {

  return (

  <main className="appointment__card appointment__card--show">
    <section className="appointment__card-left">
      <h2 className="text--regular">Lydia Miller-Jones</h2>
      <section className="interviewer">
        <h4 className="text--light">Interviewer</h4>
        <h3 className="text--regular">Sylvia Palmer</h3>
      </section>
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <img
          className="appointment__actions-button"
          src="images/edit.png"
          alt="Edit"
          onClick={props.onEdit}
        />
        <img
          className="appointment__actions-button"
          src="images/trash.png"
          alt="Delete"
          onClick={props.onDelete}
        />
      </section>
    </section>
  </main>


  );
}

export default Show;