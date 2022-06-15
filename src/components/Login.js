import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

// to use action of a reducer
// we use a useDispatch hook from react-redux

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: "newName", age: 20, email: "weare7@bts.com" }))
        }
      >
        Login
      </button>

      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
}

export default Login;
