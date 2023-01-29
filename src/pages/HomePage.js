import { forwardRef } from 'react'
import Skills from '../components/Skills'
import Header from '../components/Header'
import HeaderButtonContainer from '../components/HeaderButtonContainer'
import HobbySection from '../components/HobbySection'
import { pdfjs } from 'react-pdf'
import CVSection from '../components/CVSection'
import './HomePage.css'
import SocialsSectionMobile from '../components/SocialsSectionMobile'
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
      <div
        style={{
          backgroundColor: '#fafafa',
          flex: 0.9,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: isMobile ? 20 : 40,
            paddingRight: 10,
          }}
        >
          <div
            style={{
              flex: 1,
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
      <div ref={refs.portfolioRef}>
        <Skills isMobile={isMobile} />
      </div>
      {/* <div ref={refs.cvRef} style={{ paddingTop: 20, scrollMargin: 60 }}>
        <CVSection isMobile={isMobile} />
      </div> */}
      <div ref={refs.hobbiesRef}>
        <HobbySection isMobile={isMobile} />
      </div>
      {isMobile && (
        <div>
          <SocialsSectionMobile isMobile={isMobile} />
        </div>
      )}
    </div>
  )
})
export default HomePage
