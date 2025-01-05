import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
    const currentPage = useLocation().pathname;
    const location = useLocation();

    useEffect(() => {
        // Function to scroll to a section with smooth behavior
        const scrollToSection = (hash) => {
            const sectionId = hash.substring(1); // Remove the '#' symbol
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView();
            }
        };

        // Trigger scroll on hash change
        if (location.hash) {
            scrollToSection(location.hash);
        }
    }, [location]);

    return (
        <>
            <div className='headerContainer card'>
                {/*Logo link to home page here...*/}
                <ul>
                    <li><a href={currentPage === '/' ? '#aboutMeSection' : '/#aboutMeSection'}>About Me</a></li>
                    <li><a href={currentPage === '/' ? '#portfolioSection' : '/#portfolioSection'}>Portfolio</a></li>
                    <li><Link to="/ContactMe">Contact Me</Link></li>
                    <li><a>Resume</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header;