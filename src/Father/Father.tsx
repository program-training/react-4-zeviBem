import React, { useState,  useContext } from 'react';
import { textContext } from "../textContext/textContext";
import ChildText from "../Child/Child";

const Father: React.FC = () => {
    const context = useContext(textContext);
    if (!context) return null;
    const { setData } = context;
    const [inputValue, setInputValue] = useState("");

    const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };
      const ButtonClick = () => {  if (setData) {
          setData({ str: inputValue });
        }
      };
    return (
        <div>
            <ChildText />
            <input 
                type='text'
                value={inputValue}
                onChange={Change}
                className="myInput"
                placeholder="please enter"
                 />
            <button type="button" 
            onClick={ ButtonClick }>changa text</button>
        </div>
    )
    }
export default Father