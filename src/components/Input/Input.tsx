import React, {useState} from "react";
import {useFormContext} from "../../contexts/FormContext.tsx";
import {IInput} from "./types.ts";

const Input: React.FC<IInput> = ({type, name, data, icon, placeholder, onChange}) => {
    const {setDisable} = useFormContext();

    const [value, setValue] = useState(data[name]);
    const [hasError, setError] = useState(false);

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

            setValue(formattedValue);
        } else {
            setValue(event.target.value);
        }
        onChange(event);
    }

    const validateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (type === "tel") {
            if (inputValue.length != 0 && inputValue.length < 14) {
                if (!event.target.classList.contains("error")) setDisable((disable: number) => ++disable);
                setError(true);
            } else {
                setError(false);
                setDisable((disable: number) => --disable);
            }
        } else if (type === "email") {
            if (inputValue.length != 0 && !inputValue.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
                if (!event.target.classList.contains("error")) setDisable((disable: number) => ++disable);
                setError(true);
            } else {
                setError(false);
                setDisable((disable: number) => --disable);
            }
        }
    }

    return (
        <label className="b-form_label">
            <span className="b-form_label-text">{name}</span>
            <input
                className={`b-form_input ${hasError ? 'error' : ''}`}
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={handleInputChange}
                onBlur={validateInput}/>
            <img className="b-form_icon" src={`images/${icon}`} alt={name}/>
            {hasError && <span className="error-message">Invalid input</span>}
        </label>
    )
}

export default Input