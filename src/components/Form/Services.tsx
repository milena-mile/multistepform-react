import React from "react";
import {useDataContext} from "../../contexts/DataContext.tsx";
import Checkbox from "../Checkbox/Checkbox.tsx";
import formFields from "./formFields.json";

const Services: React.FC = () => {
    const {formData, setFormData} = useDataContext();
    const services = formFields["services"];

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        let services = formData[name] as string[];
        if (services == undefined) services = [];

        if (services.includes(value)) {
            services = services.filter(item => item != value);
        } else {
            services.push(value);
        }

        setFormData(prevData => ({
            ...prevData,
            [name]: services
        }));
    };

    const checkIfChecked = (name: string, text: string) => {
        if (formData[name]) {
            return formData[name].includes(text);
        } else {
            return false;
        }
    }

    return (
        <div className="b-form_step">
            <h2 className="b-form_step-title">Our services</h2>
            <p className="b-form_step-description">Please select which service you are interested in.</p>
            <div className="b-form_inputs">
                {Object.entries(services).map(([key, value]) => {
                    return (
                        <Checkbox icon={value.icon}
                                  name={"services"}
                                  checked={checkIfChecked("services", key)}
                                  text={key}
                                  onChange={handleCheckboxChange}
                                  key={key}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Services;