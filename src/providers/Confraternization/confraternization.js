import { createContext, useState } from "react";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [confraBag, setConfraBag] = useState([]);

  const addToConfraBag = (item) => {
    const verify = confraBag.find((product) => product.id === item.id);
    if (verify === undefined) {
      setConfraBag([...confraBag, item]);
    }
  };

  const removeFromConfraBag = (item) => {
    setConfraBag(confraBag.filter((product) => product.id !== item.id));
  };

  return (
    <ConfraternizationContext.Provider
      value={{ confraBag, addToConfraBag, removeFromConfraBag }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};
