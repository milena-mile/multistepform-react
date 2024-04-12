import "./button.scss";
import {useFormContext} from "../../contexts/FormContext.tsx";
import {ButtonProps} from "./types.ts";

const Button = (props: ButtonProps) => {

    const {disable} = useFormContext();

    return (
        <button className={`b-button_${props.type} ${disable > 0 ? "error" : ""}`}
                disabled={disable > 0}
                onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;