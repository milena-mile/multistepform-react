import React, {useState} from "react";
import {InputCheckbox} from "./types.ts";

const Checkbox: React.FC<InputCheckbox> = ({name, icon, checked, text, onChange}) => {
    const [selected, setSelected] = useState(checked);

    function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelected(event.target.checked);
        onChange(event);
    }

    return (
        <div className="b-checkbox" key={text}>
            <input className="b-checkbox_input"
                   type="checkbox"
                   id={text}
                   value={text}
                   name={name}
                   checked={selected}
                   onChange={handleRadioChange}/>
            <label className="b-checkbox_label" htmlFor={text}>
                <div className="b-checkbox_image-wrapper">
                    <img className="b-checkbox_image" src={icon} alt={text}/>
                </div>
                <span className="b-checkbox_text">{text}</span>
            </label>
        </div>
    )
}

export default Checkbox;