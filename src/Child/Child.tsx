import React, { useContext } from "react";
import { textContext } from '../textContext/textContext';

const ChildText:React.FC = () => {
    const context = useContext(textContext);
    if (!context) return null;
    const {stringData} = context
    const {str} = stringData
    return (
        <div>
            <h4>CHILD</h4>
            <div>show data : {str}</div>
        </div>
    )
}
export default ChildText