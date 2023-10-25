import React, { createContext, useState } from "react";

export const adddata = createContext("");
export const deldata = createContext("");

const ContextProvider = ({ children }) => {
  const [udata, setUdata] = useState("");
  const [dltdata, setDLTdata] = useState("");

  return (
    <adddata.Provider value={{ udata, setUdata }}>
      <deldata.Provider value={{ dltdata, setDLTdata }}>
        {children}
      </deldata.Provider>
    </adddata.Provider>
  );
};

export default ContextProvider;
