import React from "react";
import { useState } from "react";

const Context = React.createContext();

export default Context;

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export function AuthContext({ children }) {
  const [loginstatus, setloginstatus] = useState(false);
  const [loading, setloading] = useState(false);
  const logger = {
    loginstatus: loginstatus,
    loading: loading,
    login: () => {
      setloading(true);
      wait(1000).then(() => {
        setloginstatus(true);
        setloading(false);
      });
    },
    logout: () => {
      setloading(true);
      wait(1000).then(() => {
        setloginstatus(false);
        setloading(false);
      });
    },
  };
  return <Context.Provider value={logger}>{children}</Context.Provider>;
}
