import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import './SocialsSectionMobile.css'

const SocialsSectionMobile = ({ isMobile }) => {
  return (
    <div className={`socialsMobileContainer ${isMobile ? 'socialMobile' : ''}`}>
      <div className="innerContainer">
        <a href="https://www.linkedin.com/in/seanrooneymsc/">
          <FontAwesomeIcon icon={faLinkedin} color="blue" />
        </a>
        <a href="https://github.com/seanRoo">
          <FontAwesomeIcon
            icon={faGithub}
            inverse
            col
            style={{
              backgroundColor: 'purple',
            }}
          />
        </a>
        <a href="mailto:sean.rooney67@gmail.com?subject=Really%20impressed%20by%20your%20website%20Sean!">
          <FontAwesomeIcon icon={faAt} />
        </a>
      </div>
    </div>
  )
}

export default SocialsSectionMobile
