import { useState, useEffect, useCallback, createContext } from "react";

//initialize variable for timer
let logoutTimer;

//create context with initial state values
const AuthContext = createContext({
  token: "",
  login: () => {},
  logout: () => {},
});

//declare function to calculate remaining time of authorization based on the set expiration
const calculateRemainingTime = (exp) => {
  const currentTime = new Date().getTime();
  const expTime = exp;
  const remainingTime = expTime - currentTime;
  return remainingTime;
};

//declare function to retrieve data stored in localStorage or delete if time is out
const getLocalData = () => {
  const storedToken = localStorage.getItem("token");
  const storedExp = localStorage.getItem("exp");

  const remainingTime = calculateRemainingTime(storedExp);

  if (remainingTime <= 1000 * 60 * 30) {
    localStorage.clear();
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  //get local data by calling previously declared function
  const localData = getLocalData();

  //initiallize variables and set if localData exists
  let initialToken;
  if (localData) {
    initialToken = localData.token;
  }

  //initialize state for token and ID
  const [token, setToken] = useState(initialToken);

  //logout function to be called in a component (clears all record of token and userId)
  const logout = useCallback(() => {
    setToken(null);
    console.log('logging out')
    localStorage.clear();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  //login function to be called in a component to login
  const login = (token, exp) => {
    setToken(token);

    localStorage.setItem("token", token);
    localStorage.setItem("exp", exp);

    const remainingTime = calculateRemainingTime(exp);

    //will automatically log out if remainingTime runs out
    logoutTimer = setTimeout(logout, remainingTime);
  };

  //update timer if local data changes or logout function changes
  useEffect(() => {
    if (localData) {
      logoutTimer = setTimeout(logout, localData.duration);
      setToken(localData.token);
    }
  }, [localData, logout]);

  //create object to hold context for use in components
  const contextValue = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
