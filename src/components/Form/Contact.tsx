import React from "react";
import Input from "../Input/Input.tsx";
import {FormSteps} from "./types.ts";

const Contact: React.FC<FormSteps> = ({handleChange, data}) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        handleChange(name, value);
    };

    return (
        <div className="b-form_step">
            <h2 className="b-form_step-title">Contact details</h2>
            <p className="b-form_step-description">Lorem ipsum dolor sit amet consectetur adipisc.</p>
            <div className="b-form_inputs">
                <Input name={"Name"}
                       type={"text"}
                       data={data}
                       icon={"name.svg"}
                       placeholder={"John Carter"}
                       onChange={handleInputChange}/>
                <Input name={"Email"}
                       type={"email"}
                       data={data}
                       icon={"mail.svg"}
                       placeholder={"Email address"}
                       onChange={handleInputChange}/>
                <Input name={"Phone Number"}
                       type={"tel"}
                       data={data}
                       icon={"phone.svg"}
                       placeholder={"(123) 456-7890"}
                       onChange={handleInputChange}/>
                <Input name={"Company"}
                       type={"text"}
                       data={data}
                       icon={"company.svg"}
                       placeholder={"Company name"}
                       onChange={handleInputChange}/>
            </div>
        </div>
    )
}

export default Contact;