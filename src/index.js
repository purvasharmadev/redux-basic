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

const store = configureStore({
  // store is a collection of reducers
  reducer: {}
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
