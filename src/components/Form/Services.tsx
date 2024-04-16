import React from "react";
import Checkbox from "../Checkbox/Checkbox.tsx";
import {FormSteps} from "./types.ts";


const Services: React.FC<FormSteps> = ({handleChange, data}) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        let services = data[name] as string[];
        if (services == undefined) services = [];

        if (!services.includes(value)) {
            services.push(value);
        } else {
            const index = services.indexOf(value);
            if (index !== -1) {
                services.splice(index, 1);
            }
        }

        handleChange(name, services);
    };

    const checkIfChecked = (name: string, text: string) => {
        if (data[name]) {
            return data[name].includes(text);
        } else {
            return false;
        }
    }

    return (
        <div className="b-form_step">
            <h2 className="b-form_step-title">Our services</h2>
            <p className="b-form_step-description">Please select which service you are interested in.</p>
            <div className="b-form_inputs">
                <Checkbox icon={"images/development.svg"}
                          name={"services"}
                          checked={() => checkIfChecked("services", "Development")}
                          text={"Development"}
                          onChange={handleCheckboxChange}/>
                <Checkbox icon={"images/web-design.svg"}
                          name={"services"}
                          checked={() => checkIfChecked("services", "Web Design")}
                          text={"Web Design"}
                          onChange={handleCheckboxChange}/>
                <Checkbox icon={"images/marketing.svg"}
                          name={"services"}
                          checked={() => checkIfChecked("services", "Marketing")}
                          text={"Marketing"}
                          onChange={handleCheckboxChange}/>
                <Checkbox icon={"images/other.svg"}
                          name={"services"}
                          checked={() => checkIfChecked("services", "Other")}
                          text={"Other"}
                          onChange={handleCheckboxChange}/>
            </div>
        </div>
    )
}

export default Services;