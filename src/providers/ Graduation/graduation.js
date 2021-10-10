import { createContext, useState } from "react";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [graduationBag, setGraduationBag] = useState(
    JSON.parse(localStorage.getItem("graduationBag")) || []
  );

  const addToGraduationBag = (item) => {
    const verify = graduationBag.find((product) => product.id === item.id);
    if (verify === undefined) {
      setGraduationBag([...graduationBag, item]);
      localStorage.setItem("graduationBag", JSON.stringify(graduationBag));
    }
  };

  const removeFromGraduationBag = (item) => {
    setGraduationBag(graduationBag.filter((product) => product.id !== item.id));
    localStorage.setItem("graduationBag", JSON.stringify(graduationBag));
  };

  return (
    <GraduationContext.Provider
      value={{ graduationBag, addToGraduationBag, removeFromGraduationBag }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
