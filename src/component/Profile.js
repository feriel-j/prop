import React from "react";

export const Profile = (props) => {
  return (
    <div>
      <h1 onClick={() => props.alertt(props.person.Fullname)}>NAme:</h1>
      <h1 onClick={() => props.alertt(props.person.Bio)}>Bio:</h1>
      <h1 onClick={() => props.alertt(props.person.Profession)}>profession:</h1>
      {props.children}
      <img src={props.person.imag} style={{ width: 450, height: 450 }} />
    </div>
  );
};
