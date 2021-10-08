import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const HomeBeersContext = createContext([]);

export const HomeBeersProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomeBeersContext.Provider value={{ products }}>
      {children}
    </HomeBeersContext.Provider>
  );
};
