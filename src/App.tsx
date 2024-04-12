import './App.scss'
import {useReducer} from "react";
import Button from "./components/Button/Button.tsx";
import Form from "./components/Form/Form.tsx";
import Steps from "./components/Steps/Steps.tsx";
import {FormProvider} from "./contexts/FormContext.tsx";
import reducer from "./services/reducer.ts";

function App() {
    const initialStep = {count: 0};
    const [state, dispatch] = useReducer(reducer, initialStep);

    return (
        <FormProvider>
            <section className="p-wrapper">
                <h1 className="p-wrapper_title">Get a project quote</h1>
                <p className="p-wrapper_description">Please fill the form below to receive a quote for your project.
                    Feel
                    free to add as much detail as needed.</p>
                <div className="b-form_wrapper">
                    <Steps currentStep={state!.count}/>
                    <hr/>
                    <Form currentStep={state!.count}/>
                </div>
                <div className="b-buttons_wrapper">
                    {state!.count !== 0 &&
                        <Button text={"Previous Step"} type={"previous"} onClick={() => dispatch({type: "dec"})}/>}
                    {state!.count !== 3 &&
                        <Button text={"Next Step"} type={"next"} onClick={() => dispatch({type: "inc"})}/>}
                </div>
            </section>
        </FormProvider>
    )
}

export default App;
