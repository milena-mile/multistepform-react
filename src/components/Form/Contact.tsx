import React from "react";
import Input from "../Input/Input.tsx";
import formFields from "./formFields.json";

const Contact: React.FC = () => {
    const inputs = formFields["inputs"];

    return (
        <div className="b-form_step">
            <h2 className="b-form_step-title">Contact details</h2>
            <p className="b-form_step-description">Lorem ipsum dolor sit amet consectetur adipisc.</p>
            <div className="b-form_inputs">
                {Object.entries(inputs).map(([key, value]) => {
                    return (
                        <Input name={key}
                               type={value.type}
                               icon={value.icon}
                               placeholder={value.placeholder}
                               key={key}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Contact;