import React from "react";
import "./ShowUser.css";

const ShowUser = (props) => {
  return (
    <div class="su__container">
      <div>{props.id}</div>
      <div>
        {props.firstName}
        {props.lastName}
      </div>
      <div>{props.email}</div>
      <div>{props.password}</div>
    </div>
  );
};

export default ShowUser;
