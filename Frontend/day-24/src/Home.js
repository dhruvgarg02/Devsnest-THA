import { useContext } from "react";
import Context from "./AuthContext";

function Home() {
  const logger = useContext(Context);

  return (
    <div>
      <h1>Home</h1>
      {!logger.loginstatus ? (
        <h2>Login to access Profile and Dashboard !!</h2>
      ) : (
        <h2>You can access Profile and Dashboard !!</h2>
      )}
      {logger.loading ? (
        <h4>loading...</h4>
      ) : logger.loginstatus ? (
        <button onClick={logger.logout}>Logout</button>
      ) : (
        <button onClick={logger.login}>Login</button>
      )}
    </div>
  );
}

export default Home;
