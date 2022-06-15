import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "Purva", age: 0, email: "jk@gmail.com" };

//  exporting userSlice so that we can have access it outside the file
export const userSlice = createSlice({
  name: "user", // name of the reducer similar to state
  initialState: { value: initialStateValue }, //intail state
  reducers: {
    // State: holds the prev value , it keeps track of the changes
    // action: action has two arguments like type, payload,
    // where type is a string and payload is an object
    // So to chnage the state we need to call an action which can have different types and pass
    //  an object to the payload which will be passed to the state
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialStateValue;
    }
  }
});

// export your actions as a function to use them to change the state.
export const { login, logout } = userSlice.actions;

// exporting our reducers
export default userSlice.reducer;
