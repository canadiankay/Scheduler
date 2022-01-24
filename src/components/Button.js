import React from "react";
import "components/Button.scss";
import classNames from "classnames";


export default function Button(props) {
   // this is the base class 
   // let buttonClass = "button";
   // if (props.confirm) {
   //    buttonClass += " button--confirm";
   // }
   // if (props.danger) {
   //    buttonClass += " button--danger";
   // }

   // refactor above if-statements to use classNames to clean up code 
      // if props.confirm is true than we want to access button--confirm
   const buttonClass = classNames("button", 
   {"button--confirm": props.confirm}, 
   {"button--danger":props.danger}
   );

   return (
      <button className={buttonClass} 
      onClick={props.onClick} 
      disabled={props.disabled}
      > 
         {props.children} 

      </button>

   )
}
