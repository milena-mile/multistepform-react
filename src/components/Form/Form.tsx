import "./form.scss";
import React, {useState} from "react";
import {useDataContext} from "../../contexts/DataContext.tsx";
import {useFormContext} from "../../contexts/FormContext.tsx";
import saveFormData from "../../services/sendForm.tsx";
import Budget from "./Budget.tsx";
import Contact from "./Contact.tsx";
import Services from "./Services.tsx";
import Submit from "./Submit.tsx";
import {FormState} from "./types.ts";

const Form = (props: { currentStep: number }) => {
    const {setDisable} = useFormContext();
    const {formData, setFormData} = useDataContext();
    const step = props.currentStep;

    const [formAction, setFormAction] = useState<FormState>("none");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setFormAction("loading");

        try {
            await saveFormData(formData);
            setFormData({});
            setDisable(0);
            setFormAction("sent");
            setTimeout(() => setFormAction("none"), 3000);

        } catch (error) {
            setFormAction("error");
            throw new Error("Form submission error");
        }
    }

    return (
        <section className="b-form_block">
            <form className="b-form" onSubmit={handleSubmit}>
                {step === 0 && <Contact/>}
                {step === 1 && <Services/>}
                {step === 2 && <Budget/>}
                {step === 3 && <Submit formAction={formAction}/>}
            </form>
        </section>
    )
}

export default Form;