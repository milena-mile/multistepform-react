import "./steps.scss";

const Steps = (props: { currentStep: number }) => {
    const step = props.currentStep;

    return (
        <div className="b-steps">
            {[...Array(4).keys()].map((index) => (
                <div className={`b-steps_item ${step === index ? "is-active" : ""}`} key={index}>
                    <span className="b-steps_number">{index + 1}</span>
                    {index < 3 && <div className="b-steps_line"></div>}
                </div>
            ))}
        </div>
    )
}

export default Steps;