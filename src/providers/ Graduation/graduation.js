import { createContext, useState } from "react";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [graduationBag, setGraduationBag] = useState([]);

  const addToGraduationBag = (item) => {
    const verify = graduationBag.find((product) => product.id === item.id);
    if (verify === undefined) {
      setGraduationBag([...graduationBag, item]);
    }
    console.log(graduationBag);
  };

  const removeFromGraduationBag = (item) => {
    setGraduationBag(graduationBag.filter((product) => product.id !== item.id));
  };

  return (
    <GraduationContext.Provider
      value={{ graduationBag, addToGraduationBag, removeFromGraduationBag }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
