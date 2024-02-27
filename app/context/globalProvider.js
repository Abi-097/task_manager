"use client";

import { createContext, useState, useContext } from "react";
import themes from "./themes";
export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

const GlobalProvider = ({ children }) => {
  const [selectTheme, setSelectTheme] = useState(0);

  const theme = themes[selectTheme];
  return (
    <GlobalContext.Provider value={{ theme }}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
