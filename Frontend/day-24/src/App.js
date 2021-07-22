import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import { AuthContext } from "./AuthContext";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <AuthContext>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
          </AuthContext>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
