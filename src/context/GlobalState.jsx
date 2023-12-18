import { createContext, useState, useEffect } from "react";
import axios from "axios";
import localAllData from '../../data/db.json'

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(localAllData.products);
  const [search, setSearch] = useState("");
  
  // useEffect(() => {

  //       // https://json-serve-jce6.onrender.com/products --render.com
  //   // http://localhost:443/products        --localstorage
  //   axios
  //     .get(import.meta.env.VITE_BACKEND_URL+"products")
  //     .then((res) => setData(res.data));
  // }, []);
// console.log(data);
  return (
    <GlobalContext.Provider value={{ data, setData, search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};
