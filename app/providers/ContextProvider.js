"use client";
import GlobalProvider from "../context/globalProvider";

const ContextProvider = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default ContextProvider;
