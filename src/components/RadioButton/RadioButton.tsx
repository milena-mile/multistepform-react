import React from "react";
import {InputRadio} from "./types.ts";

const RadioButton: React.FC<InputRadio> = ({name, text, checked, onChange}) => {

    function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
        onChange(event);
    }

    return (
        <div className="b-radio" key={text}>
            <input className="b-radio_input"
                   type="radio"
                   id={text}
                   value={text}
                   name={name}
                   checked={checked}
                   onChange={handleRadioChange}/>
            <label className="b-radio_label" htmlFor={text}>
                <div className="b-radio_circle"></div>
                <span className="b-radio_text">{text}</span>
            </label>
        </div>
    )
}

export default RadioButton;