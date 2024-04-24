import React, {useEffect, useState} from "react";
import {useDataContext} from "../../contexts/DataContext.tsx";
import {useFormContext} from "../../contexts/FormContext.tsx";
import {IInput} from "./types.ts";

const Input: React.FC<IInput> = ({type, name, icon, placeholder, required}) => {
    const {disable, setDisable} = useFormContext();
    const {formData, setFormData} = useDataContext();

    const [value, setValue] = useState(formData[name]);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        setDisable((prevDisable: string[]) => {
            if (required && !prevDisable.includes(name) && !formData[name]) {
                return [...prevDisable, name];
            }
            return prevDisable;
        });
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let formattedValue = '';

        if (type === "tel") {
            const inputValue = event.target.value.replace(/\D/g, '');

            if (inputValue.length < 1) {
                formattedValue = inputValue;
            } else if (inputValue.length < 4) {
                formattedValue = `(${inputValue.slice(0, 3)}`;
            } else if (inputValue.length < 7) {
                formattedValue = `(${inputValue.slice(0, 3)}) ${inputValue.slice(3, 6)}`;
            } else {
                formattedValue = `(${inputValue.slice(0, 3)}) ${inputValue.slice(3, 6)}-${inputValue.slice(6, 10)}`;
            }

            setFormData(prevData => ({
                ...prevData,
                [name]: formattedValue
            }));
            setValue(formattedValue);
        } else {

            setFormData(prevData => ({
                ...prevData,
                [name]: event.target.value
            }));
            setValue(event.target.value);
        }
    }

    const validateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const name = event.target.name;
        const required = event.target.required;

        const errorField = () => {
            setError(true);
            if (!disable.includes(name)) setDisable(prevDisable => [...prevDisable, name]);
        }
    
        const correctField = () => {
            setError(false);
            if (disable.includes(name)) setDisable(prevDisable => prevDisable.filter(item => item != name));
        }

        if (type === "tel") {
            ((required || inputValue.length != 0) && inputValue.length < 14) ? errorField() : correctField();

        } else if (type === "email") {
            ((required || inputValue.length != 0) && !inputValue.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) ? errorField() : correctField();

        } else {
            (required && inputValue.length === 0) ? errorField() : correctField();
        }
    }

    return (
        <label className="b-form_label">
            <span className="b-form_label-text">{`${name}${required ? '*' : ''}`}</span>
            <input
                className={`b-form_input ${hasError ? 'error' : ''}`}
                type={type}
                placeholder={placeholder}
                value={value}
                name={name} 
                required={required}
                onChange={handleInputChange}
                onBlur={validateInput}/>
            <img className="b-form_icon" src={`images/${icon}`} alt={name}/>
            {hasError && <span className="error-message">Invalid input</span>}
        </label>
    )
}

export default Input