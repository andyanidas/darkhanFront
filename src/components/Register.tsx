import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const auth = getAuth();
  const submitHandler = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, e.target[0].value, e.target[1].value)
      .then((userCredential) => {
        console.log(userCredential, " has registerd successfully ");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="register">
      <form onSubmit={submitHandler}>
        <input name="email" type="email" />
        <input name="passowrd" type="password" />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
}
