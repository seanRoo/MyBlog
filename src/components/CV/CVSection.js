import { useState } from 'react'
import { GlassMagnifier } from 'react-image-magnifiers'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import CV from '../../assets/CV_image.png'
import './CVSection.css'

const largeZIndex = 9999999999

const Download = () => (
  <Button
    variant="contained"
    className="overlayButton"
    style={{
      zIndex: largeZIndex,
    }}
  >
    <a
      href={CV}
      download="sean_rooney_CV"
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      Download
      <FontAwesomeIcon
        icon={faDownload}
        size="lg"
        style={{
          marginLeft: 12,
          color: 'white',
        }}
      />
    </a>
  </Button>
)

const CVSection = ({ isMobile = false }, props) => {
  const [isMagActivated, setIsMagActivated] = useState(false)

  return (
    <div
      style={{
        paddingLeft: isMobile ? 20 : 40,
        paddingRight: isMobile ? 20 : 40,
      }}
    >
      <div
        style={{
          margin: 'auto',
        }}
      >
        <div
          className="container"
          onClick={() => setIsMagActivated(!isMagActivated)}
        >
          <Download />
          {isMagActivated ? (
            <GlassMagnifier
              imageSrc={CV}
              imageAlt="Example"
              largeImageSrc={CV}
              magnifierSize="400px"
              magnifierBorderSize={2}
              magnifierBorderColor="rgba(255, 255, 255, .5)"
              square
            />
          ) : (
            <img src={CV} alt="Example" />
          )}
        </div>
      </div>
    </div>
  )
}

export default CVSection
