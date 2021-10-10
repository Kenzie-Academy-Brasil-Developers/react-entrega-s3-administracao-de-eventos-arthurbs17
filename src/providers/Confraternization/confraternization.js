import { createContext, useState } from "react";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [confraBag, setConfraBag] = useState(
    JSON.parse(localStorage.getItem("confraBag")) || []
  );

  const addToConfraBag = (item) => {
    const verify = confraBag.find((product) => product.id === item.id);
    if (verify === undefined) {
      setConfraBag([...confraBag, item]);
      localStorage.setItem("confraBag", JSON.stringify(confraBag));
    }
  };

  const removeFromConfraBag = (item) => {
    setConfraBag(confraBag.filter((product) => product.id !== item.id));
    localStorage.setItem("confraBag", JSON.stringify(confraBag));
  };

  return (
    <ConfraternizationContext.Provider
      value={{ confraBag, addToConfraBag, removeFromConfraBag }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};
