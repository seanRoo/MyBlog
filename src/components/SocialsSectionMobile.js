import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const SocialsSectionMobile = ({ isMobile }) => {
  return (
    <div
      style={{
        flexDirection: 'column',
        backgroundColor: 'white',
        scrollSnapAlign: 'center',
        paddingLeft: isMobile ? 20 : 40,
        paddingRight: isMobile ? 20 : 40,
        paddingBottom: 40,
        paddingTop: 20,
        marginTop: 30,
        borderTopWidth: 1,
        borderColor: 'lightgray',
        borderTopStyle: 'groove',
      }}
    >
      {/* <div
        style={{
          borderLeft: '6px solid #6c51a4',
          marginBottom: 20,
        }}
      >
        <Typography style={{ fontWeight: 'bold', marginLeft: 14 }} variant="h4">
          Where I am
        </Typography>
      </div> */}
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'center',
          columnGap: 30,
        }}
      >
        <a href="https://www.linkedin.com/in/seanrooneymsc/">
          <FontAwesomeIcon
            icon={faLinkedin}
            color="blue"
            style={{
              backgroundColor: 'white',
              padding: 4,
              borderRadius: '50%',
              fontSize: 45,
            }}
          />
        </a>
        <a href="https://github.com/seanRoo">
          <FontAwesomeIcon
            icon={faGithub}
            inverse
            col
            style={{
              backgroundColor: 'purple',
              padding: 4,
              borderRadius: '50%',
              fontSize: 45,
            }}
          />
        </a>
        <a href="mailto:sean.rooney67@gmail.com?subject=Really%20impressed%20by%20your%20website%20Sean!">
          <FontAwesomeIcon
            icon={faAt}
            style={{
              backgroundColor: 'white',
              padding: 4,
              borderRadius: '50%',
              fontSize: 45,
            }}
          />
        </a>
      </div>
    </div>
  )
}

export default SocialsSectionMobile
