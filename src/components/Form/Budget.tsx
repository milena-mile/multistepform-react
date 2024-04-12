import React, {useState} from "react";
import RadioButton from "../RadioButton/RadioButton.tsx";
import {FormSteps} from "./types.ts";

const Budget: React.FC<FormSteps> = ({handleChange, data}) => {
    const [selected, setSelected] = useState(data!["budget"] ?? "$5.000 - $10.000");

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setSelected(value);
        handleChange(name, value);
    };

    return (
        <div className="b-form_step">
            <h2 className="b-form_step-title">What’s your project budget?</h2>
            <p className="b-form_step-description">Please select the project budget range you have in mind.</p>
            <div className="b-form_inputs">
                <RadioButton name={"budget"}
                             text={"$5.000 - $10.000"}
                             checked={selected === "$5.000 - $10.000"}
                             onChange={handleRadioChange}/>
                <RadioButton name={"budget"}
                             text={"$10.000 - $20.000"}
                             checked={selected === "$10.000 - $20.000"}
                             onChange={handleRadioChange}/>
                <RadioButton name={"budget"}
                             text={"$20.000 - $50.000"}
                             checked={selected === "$20.000 - $50.000"}
                             onChange={handleRadioChange}/>
                <RadioButton name={"budget"}
                             text={"$50.000 +"}
                             checked={selected === "$50.000 +"}
                             onChange={handleRadioChange}/>
            </div>
        </div>
    )
}

export default Budget;