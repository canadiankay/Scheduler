import React from "react";


const Header = function (props) {

  return (


    <header className="appointment__time">
      {/* <h1>This is the header that contains a reference to the time of the appointment and a separator line</h1> */}
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  )
}

export default Header;