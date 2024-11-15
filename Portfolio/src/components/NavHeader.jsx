import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function NavHeader() {
    const currentPage = useLocation().pathname;
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
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

export default NavHeader;