import { useState, createContext } from "react";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const placeholder = user ? user.user : null;
  console.log(placeholder);
  const [currentUser, setCurrentUser] = useState(placeholder);

  const values = { currentUser, setCurrentUser };

  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};
