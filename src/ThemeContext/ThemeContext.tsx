import React ,{ createContext, useContext, useState, } from "react";
interface ContextProviderProps {
    children: React.ReactNode;
  }
type Word  =  "dark" | "light"

interface ContextType {
    str: Word;
    setData: React.Dispatch<React.SetStateAction<Word>> | null;
}


const contextTheme = createContext<ContextType | null>(null);

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
    const [stringWord, setData] = useState<Word>("");
}
const contextProviderValue: ContextType = {
    str: stringWord,
    setData: setWord,
  };


