// import { createSlice } from "@reduxjs/toolkit";

// export const themeSlice = () => {
//   createSlice({
//     name: "theme",
//     initialState: { value: "" },
//     reducers: {
//       changeColor: (state, action) => {
//         state.value = action.payload;
//       }
//     }
//   });
// };

// // export const { changeColor } = themeSlice.action;

// export default themeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

//  exporting themeSlice so that we can have access it outside the file
export const themeSlice = createSlice({
  name: "theme", // name of the reducer similar to state
  initialState: { value: initialStateValue }, //intail state
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    }
  }
});

// export your actions as a function to use them to change the state.
export const { changeColor } = themeSlice.actions;

// exporting our reducers
export default themeSlice.reducer;
