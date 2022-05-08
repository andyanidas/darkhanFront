import React, { Dispatch, SetStateAction } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUser } from "../contexts/UserContext";
import { stringify } from "querystring";

export default function Login() {
  const { user, setUser } = useUser();
  const submitHandler = (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value)
      .then((userCredential) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <input name="email" type="email" />
        <input name="passowrd" type="password" />
        <button type="submit">Login In</button>
      </form>
    </div>
  );
}
