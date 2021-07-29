import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFirstNameInput,
  updateLastNameInput,
} from "./redux/userForm/userFormActions";

function App() {
  //useSelector can be used to access the whole Store
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  // to use dispatch in react redux we use useDispatch()
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Input Data</h1>
      <form action="">
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => {
            dispatch(updateFirstNameInput(e.target.value));
          }}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => {
            dispatch(updateLastNameInput(e.target.value));
          }}
        />
      </form>
      <div>
        <h1>Data</h1>
        <h3>First Name : {firstName}</h3>
        <h3>Last Name : {lastName}</h3>
      </div>
    </div>
  );
}

export default App;
