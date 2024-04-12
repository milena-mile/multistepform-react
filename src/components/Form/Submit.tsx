const Submit = (props: { disabled: boolean }) => {
    return (
        <div className="b-form_step b-submit">
            <div className="b-submit_image-wrapper">
                <img className="b-submit_image" src={"images/submit.svg"} alt="submit"/>
            </div>
            <h2 className="b-form_step-title">Submit your quote request</h2>
            <p className="b-form_step-description">Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</p>
            <input className="b-button_submit"
                   value={props.disabled ? "Submitting..." : "Submit"}
                   type="submit"
                   disabled={props.disabled}/>
        </div>
    )
}

export default Submit;