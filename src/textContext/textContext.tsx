import React, { createContext, useState } from "react";
interface ContextProviderProps {
  children: React.ReactNode;
}
interface Data {
  str: string;
}
interface ContextType {
  stringData: Data;
  setData: React.Dispatch<React.SetStateAction<Data>> | null;
}
export const textContext = createContext<ContextType | null>(null);
const ContextProvider: React.FC<ContextProviderProps> = (props) => {
  const [stringData, setData] = useState<Data>({ str: "hello world my name is zevi" });
  return (
    <textContext.Provider value={{ stringData, setData }}>
      {props.children}
    </textContext.Provider>
  );
};
export default ContextProvider;