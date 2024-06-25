import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretDown,
  faCaretUp,
  faFileAlt,
  faHammer,
} from '@fortawesome/free-solid-svg-icons'
import CVSection from '../CV/CVSection'
import CV from '../../assets/Sean_Rooney_Resume.pdf'

const CVAccordion = ({ expanded = false }) => {
  return (
    <Accordion className="accordion" expanded={expanded}>
      <AccordionSummary
        className="summary"
        id="panel1a-header"
      ></AccordionSummary>
      <AccordionDetails>
        <CVSection />
      </AccordionDetails>
    </Accordion>
  )
}

const HeaderButtons = ({ isMobile }) => {
  const [showAccordion, setShowAccordion] = useState(false)

  return (
    <div>
      <Button variant="contained" className="projectsButton">
        <a href="https://github.com/seanRoo">
          <FontAwesomeIcon icon={faHammer} size={isMobile ? 'sm' : 'lg'} />
          View Projects
        </a>
      </Button>
      <Button
        onClick={() => !isMobile && setShowAccordion(!showAccordion)}
        href={isMobile ? CV : ''}
        download="sean_rooney_CV"
        variant="contained"
        className="cvButton"
      >
        <FontAwesomeIcon icon={faFileAlt} size="lg" />
        Resume
        {!isMobile ? (
          <FontAwesomeIcon
            icon={showAccordion ? faCaretUp : faCaretDown}
            size="lg"
          />
        ) : null}
      </Button>
      <CVAccordion expanded={showAccordion} />
    </div>
  )
}

export default HeaderButtons
