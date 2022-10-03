import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faR, faHome, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <FontAwesomeIcon icon={faR} color="#d73d30" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/home">
                <FontAwesomeIcon icon={faHome} color="#fff" />
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#fff" />
            </NavLink>
            <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faCode} color="#fff" />
            </NavLink>
            <NavLink activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </NavLink>
        </nav>
        <ul>
        <li>
            <a target="_blank" className="linkedin-link" rel='noreferrer' href='https://www.linkedin.com/in/remy-aguirre-34120b198/'>
                <FontAwesomeIcon icon={faLinkedin} color="#fff" />
            </a>
        </li>
        <li>
            <a target="_blank" className="github-link" rel='noreferrer' href='https://github.com/remyTatTat/'>
                <FontAwesomeIcon icon={faGithub} color="#fff" />
            </a>
        </li>
    </ul>
    </div>
)

export default Sidebar