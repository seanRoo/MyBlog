import { useRef, useState, useEffect } from 'react'
import { Typography, Button, Divider, List, ListItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faFileAlt,
  faAt,
  faHammer,
  faSearchMinus,
  faSearchPlus,
} from '@fortawesome/free-solid-svg-icons'
import Sidenav from '../components/Sidenav'
import Skills from '../components/Skills'
import Header from '../components/Header'
import HeaderButtonContainer from '../components/HeaderButtonContainer'
import { sidenavTabs } from '../utils'
import HobbySection from '../components/HobbySection'
import MeLol from '../assets/MeLol.png'
import CV from '../assets/Sean_Rooney_CV.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
import CVSection from '../components/CVSection'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const HomePage = () => {
  //const aboutMeRef = useRef(null)
  const refs = {
    aboutMeRef: useRef(null),
    portfolioRef: useRef(null),
    cvRef: useRef(null),
    hobbiesRef: useRef(null),
  }

  const handleSidenavClick = (tab) =>
    refs[`${tab.ref}`].current.scrollIntoView({
      behavior: 'smooth',
    })

  const [width, setWidth] = useState(window.innerWidth)
  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  let isMobile = width <= 768

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        scrollSnapAlign: 'center',
        overflowY: 'none',
      }}
    >
      <div style={{ flex: isMobile ? 0 : 0.15 }}>
        <Sidenav handleClick={handleSidenavClick} isMobile={isMobile} />
      </div>
      <div
        style={{
          flex: isMobile ? 1 : 0.85,
          flexDirection: 'column',
          display: 'flex',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{
            flex: 0.55,
            backgroundColor: '#fafafa',
          }}
        >
          <div
            ref={refs.aboutMeRef}
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: isMobile ? 20 : 40,
            }}
          >
            <div
              style={{
                flex: isMobile ? 1 : 0.65,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ flex: 0.5 }}>
                <Header />
              </div>
              <div style={{ flex: 0.5, display: 'flex' }}>
                <HeaderButtonContainer isMobile={isMobile} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.45 }} ref={refs.portfolioRef}>
          <Skills isMobile={isMobile} />
        </div>
        <div ref={refs.cvRef} style={{ paddingTop: 20 }}>
          <CVSection isMobile={isMobile} />
        </div>
        <div ref={refs.hobbiesRef} style={{ marginBottom: 14 }} />
        <HobbySection isMobile={isMobile} />
      </div>
    </div>
  )
}
export default HomePage
