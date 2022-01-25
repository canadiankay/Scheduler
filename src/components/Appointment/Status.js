// saving and deleting appts is async, but we need user to see that something is happening so this displays a message using CSS
import React from "react";


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