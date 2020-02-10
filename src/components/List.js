import React from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

export default function List(props) {
  return (
    <div>
      {!props.user ? (
        <div>
          {" "}
          <h3>Login</h3>
          <LoginFormContainer /> <h3>Sign Up</h3>
          <SignupFormContainer />
        </div>
      ) : (
        <div>
          <h3>Insert New Image</h3>
          <CreateFormContainer />
        </div>
      )}
      {props.images.length > 0
        ? props.images.map(image => {
            return (
              <div key={image.id}>
                <h3>{image.title}</h3>
                <img src={image.url} alt={image.title} />
              </div>
            );
          })
        : "Loading...."}
    </div>
  );
}
