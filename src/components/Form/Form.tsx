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

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (name: string, value: string | string[]) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value ?? [value]
        }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setLoading(true);

        document.querySelector(".b-button_submit")!.insertAdjacentHTML("afterend", "<span class='b-form_message'>Form has been sent!</span>");

        setFormData({});
        setDisable(0);

        try {
            localStorage.setItem('formData', JSON.stringify(formData));

        } catch (error) {
            throw new Error("Form submission error");
        }

        setLoading(false);
    }

    return (
        <section className="b-form_block">
            <form className="b-form" onSubmit={handleSubmit}>
                {step === 0 && <Contact data={formData} handleChange={handleChange}/>}
                {step === 1 && <Services data={formData} handleChange={handleChange}/>}
                {step === 2 && <Budget data={formData} handleChange={handleChange}/>}
                {step === 3 && <Submit disabled={loading}/>}
            </form>
        </section>
    )
}

export default Form;