import { useContext } from "react";
import Context from "./AuthContext";
import { Route, Redirect } from "react-router-dom";

function Profile() {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        {logger.loginstatus ? <h1>Your Profile</h1> : <Redirect to="/build/" />}
      </Route>
    </div>
  );
}

export default Profile;
