import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import Context from "./AuthContext";

function Dashboard() {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        {logger.loginstatus ? <h1>Your Dashboard</h1> : <Redirect to="/build/" />}
      </Route>
    </div>
  );
}

export default Dashboard;
