import "./styles.css";
import Profile from "./components/Profile";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <h2>State Management Library</h2>
      <Profile />

      <Login />

      {/* <h3>What is state management?</h3>
      <p>
        <span style={highlight}>State</span> is that changeable variable which
        updates the UI based on the changes. Ex. dark and light in a theme are
        state which changes the UI on user Action.
      </p>

      <p>
        sometimes states need to passed through different components. for ex. a
        login components is responsible for user creation and a profile
        component is responsible for showing/ edit the user information.
        <span style={highlight}>
          React does not allow state sharing between sibling components i.e in
          react SPA all components are rendered inside a root div i.e APP so all
          components acts as siblings so passing states between them is not
          allowed One way to do that is to use props which can be useful for
          small use cases but as the number of states increases the it gets
          hectic pass props to every component so to manage this state passing
          situation redux was introduced which helps in managing the state by
          making them globally available in a <span style={keyword}>store</span>
        </span>
      </p>

      <h2>What are we building?</h2>
      <h3>A user login system</h3>
      <p>
        {" "}
        User Story: user can login with information and can see its information
        on page after login
      </p>
      <h3>depedency: redux, react-redux, @reduxjs /toolkit </h3>
      <ul>
        <li>Create components: Login, Profile</li>
      </ul> */}
    </div>
  );
}
