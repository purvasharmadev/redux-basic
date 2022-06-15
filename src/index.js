import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// index. js is the highest level of our application
// because this is where we are rendering our app

// So to create anything global or accessable
// to all the components we will define it here

// To create a store: a global object container which holds all the states

// step-1 ; configure a store using @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// step-2: provide store to app
import { Provider } from "react-redux";

// step-3: import the created Reducers to make them available to all App
import userReducer from "./features/user";
import themeReducer from "./features/theme";
// Creating a store
const store = configureStore({
  // store is a collection of reducers
  //  reducer is a function that takes in some information
  //  about the current state so, reducer takes the previous value of the state
  //  and also some sort of action that you want to perform
  // and return  the updated  value
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
});

// to provide the above store and collection of reducer througout out app we use <Provider> from react-redux and pass store as prop

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// for each faeture you create a slice and reducer
// if needed and than add that reducer to the store to
// make it accessible
