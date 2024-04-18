import React from "react";
import {useDataContext} from "../../contexts/DataContext.tsx";
import Checkbox from "../Checkbox/Checkbox.tsx";

const Services: React.FC = () => {
    const {formData, setFormData} = useDataContext();
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        let services = formData[name] as string[];
        if (services == undefined) services = [];

        if (!services.includes(value)) {
            services.push(value);
        } else {
            const index = services.indexOf(value);
            if (index !== -1) {
                services.splice(index, 1);
            }
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
                <Checkbox icon={"images/development.svg"}
                          name={"services"}
                          checked={checkIfChecked("services", "Development")}
                          text={"Development"}
                          onChange={handleCheckboxChange}/>
                <Checkbox icon={"images/web-design.svg"}
                          name={"services"}
                          checked={checkIfChecked("services", "Web Design")}
                          text={"Web Design"}
                          onChange={handleCheckboxChange}/>
                <Checkbox icon={"images/marketing.svg"}
                          name={"services"}
                          checked={checkIfChecked("services", "Marketing")}
                          text={"Marketing"}
                          onChange={handleCheckboxChange}/>
                <Checkbox icon={"images/other.svg"}
                          name={"services"}
                          checked={checkIfChecked("services", "Other")}
                          text={"Other"}
                          onChange={handleCheckboxChange}/>
            </div>
        </div>
    )
}

export default Services;