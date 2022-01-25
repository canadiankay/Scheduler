import React from "react";

// allows user to choose a time slot to book an appointment
const Empty = function (props) {

  return (

    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>


  );
}

export default Empty;