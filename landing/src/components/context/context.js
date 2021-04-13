import React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ a: "b" }}>{children}</AppContext.Provider>
  );
};
