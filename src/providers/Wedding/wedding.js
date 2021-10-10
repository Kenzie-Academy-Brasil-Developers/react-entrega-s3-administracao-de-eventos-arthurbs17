import { createContext, useState } from "react";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [weddingBag, setWeddingBag] = useState(
    JSON.parse(localStorage.getItem("weddinBag")) || []
  );

  const addToWeddingBag = (item) => {
    const verify = weddingBag.find((product) => product.id === item.id);
    if (verify === undefined) {
      setWeddingBag([...weddingBag, item]);
      localStorage.setItem("weddingBag", JSON.stringify(weddingBag));
    }
  };

  const removeFromWeddingBag = (item) => {
    setWeddingBag(weddingBag.filter((product) => product.id !== item.id));
    localStorage.setItem("weddingBag", JSON.stringify(weddingBag));
  };

  return (
    <WeddingContext.Provider
      value={{ weddingBag, addToWeddingBag, removeFromWeddingBag }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
