
import React from "react";

// since saving and deleting appts is async, we need to inform user  that something is happening (displays message)
const Status = function (props) {

  return (

    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{props.message}</h1>
    </main>


  );
}

export default Status;