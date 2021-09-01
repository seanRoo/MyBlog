import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faHammer } from '@fortawesome/free-solid-svg-icons'

const HeaderButtonContainer = ({ isMobile }) => (
  <>
    <Button
      variant="contained"
      style={{
        minHeight: 20,
        margin: '15px 8px 0px 0px',
        textTransform: 'none',
        backgroundColor: '#6c51a4',
        color: 'white',
        fontSize: '95%',
      }}
    >
      <a
        href="https://github.com/seanRoo"
        style={{ textDecoration: 'none', color: 'white' }}
      >
        <FontAwesomeIcon
          icon={faHammer}
          size={isMobile ? 'sm' : 'lg'}
          style={{
            marginRight: 12,
            color: 'white',
          }}
        />
        View Projects
      </a>
    </Button>
    <Button
      variant="contained"
      style={{
        height: 40,
        margin: '15px 8px 0px 8px',
        width: 100,
        textTransform: 'none',
        fontSize: 16,
      }}
    >
      <a
        href="/Sean_Rooney_CV.pdf"
        download
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <FontAwesomeIcon
          icon={faFileAlt}
          size="lg"
          style={{
            padding: 4,
            borderRadius: '50%',
            marginRight: 12,
          }}
        />
        CV
      </a>
    </Button>
  </>
)

export default HeaderButtonContainer
