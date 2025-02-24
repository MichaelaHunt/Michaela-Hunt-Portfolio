import myResume from '/resume.pdf';

function Resume() {
    return (
        <>
            <div className='resumePage column'>
                {/* <h1 style={{ textAlign: "center" }}>Coming Soon!</h1> */}
                <h2 style={{margin: "24px 0"}}>Don't see anything? Try opening in another browser, or download it <u><a href="/resume.pdf" download="MichaelaHunt_Resume.pdf">here</a></u></h2>
                <iframe src={myResume}></iframe>
            </div>
        </>
    );
}

export default Resume;