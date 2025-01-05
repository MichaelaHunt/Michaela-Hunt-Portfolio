function ContactMe() {
    return (
        <>
            <div className="contactBody">
                <div className="contactContainer card column">
                    <h1>Contact Me</h1>
                    <h3>Your Name:</h3>
                    <input></input>
                    <h3>Your Email Address:</h3>
                    <input></input>
                    <h3>Your Message:</h3>
                    <textarea className="longInput"></textarea>
                    <button className="contactMeButton">Submit</button>
                </div>
            </div>
        </>
    )
}
export default ContactMe;