import { forwardRef } from 'react'
import Skills from '../components/Skills/Skills'
import HobbySection from '../components/Hobbies/HobbySection'
import { pdfjs } from 'react-pdf'
import './HomePage.css'
import SocialsSectionMobile from '../components/SocialsSectionMobile'
import Header from '../components/Header/Header'
import Projects from '../components/Projects'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const HomePage = forwardRef(({ isMobile, isIpad, refs }) => {
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        overflowX: 'hidden',
      }}
    >
      <Header isMobile={isMobile} />
      <div ref={refs.portfolioRef}>
        <Skills isMobile={isMobile} />
      </div>
      <Projects isMobile={isMobile} />
      <div ref={refs.hobbiesRef}>
        <HobbySection isMobile={isMobile} />
      </div>
      <div>
        <SocialsSectionMobile isMobile={isMobile} />
      </div>
    </div>
  )
})
export default HomePage
