import { forwardRef } from 'react'
import Skills from '../components/Skills'
import Header from '../components/Header'
import HeaderButtonContainer from '../components/HeaderButtonContainer'
import HobbySection from '../components/HobbySection'
import { pdfjs } from 'react-pdf'
import CVSection from '../components/CVSection'
import './HomePage.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const HomePage = forwardRef(({ isMobile, isIpad, refs }) => {
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        overflowY: 'scroll',
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
      <div ref={refs.portfolioRef} style={{}}>
        <Skills isMobile={isMobile} />
      </div>
      <div ref={refs.cvRef} style={{ paddingTop: 20 }}>
        <CVSection isMobile={isMobile} />
      </div>
      <div
        className="hobbySection"
        ref={refs.hobbiesRef}
        // style={{
        //   // marginBottom: 30,
        //   minHeight: isMobile && '60vh',
        // }}
      >
        <HobbySection isMobile={isMobile} />
      </div>
    </div>
  )
})
export default HomePage
