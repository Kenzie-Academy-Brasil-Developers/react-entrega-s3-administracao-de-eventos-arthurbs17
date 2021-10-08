import { createContext, useState } from "react";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [weddingBag, setWeddingBag] = useState([]);

  const addToWeddingBag = (item) => {
    const verify = weddingBag.find((product) => product.id === item.id);
    if (verify === undefined) {
      setWeddingBag([...weddingBag, item]);
    }
  };

  const removeFromWeddingBag = (item) => {
    setWeddingBag(weddingBag.filter((product) => product.id !== item.id));
  };

  return (
    <WeddingContext.Provider
      value={{ weddingBag, addToWeddingBag, removeFromWeddingBag }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
