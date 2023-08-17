import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // https://json-serve-jce6.onrender.com/ --render.com
    axios
      .get("https://json-serve-jce6.onrender.com/products")
      .then((res) => setData(res.data));
  }, []);

  return (
    <GlobalContext.Provider value={{ data, setData, search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};
