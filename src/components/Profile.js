import React from "react";
import { useSelector } from "react-redux";
// How to acces state from redux store
// 1. you use useSelector hook to basically select
// the state you want to use in that particular component

function Profile() {
  // useSelector takes a function that allows you to specify which state you want to access
  // so you grab the whole state than by using dot notion you select the specific state/value you want to access
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: theme }}>
      <h1>Profile</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
}

export default Profile;
