import "./form.scss";
import React, {useState} from "react";
import {useFormContext} from "../../contexts/FormContext.tsx";
import Budget from "./Budget.tsx";
import Contact from "./Contact.tsx";
import Services from "./Services.tsx";
import Submit from "./Submit.tsx";

const Form = (props: { currentStep: number }) => {
    const {setDisable} = useFormContext();
    const step = props.currentStep;

    const [formAction, setFormAction] = useState("none");
    const [formData, setFormData] = useState({});

    const handleChange = (name: string, value: string | string[]) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setFormAction("loading");

        try {
            localStorage.setItem('formData', JSON.stringify(formData));
            setFormData({});
            setDisable(0);
            setTimeout(() => setFormAction("sent"), 0);
            setTimeout(() => setFormAction("none"), 3000);

        } catch (error) {
            throw new Error("Form submission error");
        }
    }

    return (
        <section className="b-form_block">
            <form className="b-form" onSubmit={handleSubmit}>
                {step === 0 && <Contact data={formData} handleChange={handleChange}/>}
                {step === 1 && <Services data={formData} handleChange={handleChange}/>}
                {step === 2 && <Budget data={formData} handleChange={handleChange}/>}
                {step === 3 && <Submit formAction={formAction}/>}
            </form>
        </section>
    )
}

export default Form;