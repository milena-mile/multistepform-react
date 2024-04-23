const Submit = (props: { formAction: string }) => {

    return (
        <div className="b-form_step b-submit">
            <div className="b-submit_image-wrapper">
                <img className="b-submit_image" src={"images/submit.svg"} alt="submit"/>
            </div>
            <h2 className="b-form_step-title">Submit your quote request</h2>
            <p className="b-form_step-description">Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</p>
            <input className="b-button_submit"
                   value={props.formAction === "loading" ? "Submitting..." : "Submit"}
                   type="submit"
                   disabled={props.formAction === "loading"}/>
            {props.formAction === "sent" ? <span className='b-form_message'>Form has been sent!</span> : props.formAction === "error" && <span className='b-form_message error'>Form hasn't been sent! Try later.</span>}
        </div>
    )
}

export default Submit;