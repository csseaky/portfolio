import React, {useState} from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isConversationHidden, setIsConversationHidden] = useState(false);
  return (
    <AppContext.Provider value={{ isConversationHidden, setIsConversationHidden }}>{children}</AppContext.Provider>
  );
};
