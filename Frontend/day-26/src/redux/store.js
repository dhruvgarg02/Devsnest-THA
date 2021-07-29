import { createStore } from "redux";
import { userFormReducer } from "./userForm/userFormReducer";

// It takes Reducer Func. as parameter
const store = createStore(userFormReducer);

export default store;
