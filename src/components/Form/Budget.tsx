import React, {useState} from "react";
import {useDataContext} from "../../contexts/DataContext.tsx";
import RadioButton from "../RadioButton/RadioButton.tsx";
import formFiels from "./formFields.json";

const Budget: React.FC = () => {
    const {formData, setFormData} = useDataContext();
    const [selected, setSelected] = useState(formData["budget"]);
    const budget = formFiels["budget"];

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setSelected(value);

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="b-form_step">
            <h2 className="b-form_step-title">What’s your project budget?</h2>
            <p className="b-form_step-description">Please select the project budget range you have in mind.</p>
            <div className="b-form_inputs">
                {budget.map(value => {
                    return (
                        <RadioButton name={"budget"}
                                     text={value}
                                     checked={selected === value}
                                     onChange={handleRadioChange}
                                     key={value}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Budget;