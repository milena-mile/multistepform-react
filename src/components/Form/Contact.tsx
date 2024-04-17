import React from "react";
import Input from "../Input/Input.tsx";

const Contact: React.FC = () => {

    return (
        <div className="b-form_step">
            <h2 className="b-form_step-title">Contact details</h2>
            <p className="b-form_step-description">Lorem ipsum dolor sit amet consectetur adipisc.</p>
            <div className="b-form_inputs">
                <Input name={"Name"}
                       type={"text"}
                       icon={"name.svg"}
                       placeholder={"John Carter"}/>
                <Input name={"Email"}
                       type={"email"}
                       icon={"mail.svg"}
                       placeholder={"Email address"}/>
                <Input name={"Phone Number"}
                       type={"tel"}
                       icon={"phone.svg"}
                       placeholder={"(123) 456-7890"}/>
                <Input name={"Company"}
                       type={"text"}
                       icon={"company.svg"}
                       placeholder={"Company name"}/>
            </div>
        </div>
    )
}

export default Contact;