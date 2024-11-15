function NavHeader() {
    return (
        <>
            <div className='headerContainer card'>
                {/*Logo link to home page here...*/}
                <ul>
                    <li><a href='#aboutMeSection'>About Me</a></li>
                    <li><a href='#portfolioSection'>Portfolio</a></li>
                    <li><a>Contact Me</a></li>
                    <li><a>Resume</a></li>
                </ul>
            </div>
        </>
    )
}

export default NavHeader;