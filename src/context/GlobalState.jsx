import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4005/products")
      .then((res) => setData(res.data));
  }, []);

  return (
    <GlobalContext.Provider value={{ data, setData, search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};
