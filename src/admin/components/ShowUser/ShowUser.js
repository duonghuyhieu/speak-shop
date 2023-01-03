import React from "react";

const ShowUser = (props) => {
  return (
    <div>
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
