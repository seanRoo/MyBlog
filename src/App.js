import { useRef, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Sidenav from './components/Sidenav'
import HomePage from './pages/HomePage'
import { useTheme, useMediaQuery } from '@material-ui/core'
import MobileAppBar from './components/MobileAppBar'
import { isMobile } from 'react-device-detect'

const App = () => {
  const theme = useTheme()

  const refs = {
    aboutMeRef: useRef(null),
    portfolioRef: useRef(null),
    cvRef: useRef(null),
    hobbiesRef: useRef(null),
  }

  const handleSidenavClick = (tab) => {
    refs[`${tab.ref}`].current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    document.title = 'Sean Rooney - Personal Website'
  }, [])

  const snapSideNavToTop = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div style={{ display: 'flex' }}>
      {!snapSideNavToTop && (
        <div style={{ width: '15%' }}>
          <Sidenav handleClick={handleSidenavClick} />
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row',
        }}
        ref={refs.aboutMeRef}
      >
        {snapSideNavToTop && (
          <div style={{ height: 65 }}>
            <MobileAppBar handleSidenavClick={handleSidenavClick} />
          </div>
        )}
        <div
          style={{
            flex: 1,
            //paddingTop: snapSideNavToTop ? 50 : 0,
            paddingLeft: snapSideNavToTop ? 0 : 10,
          }}
        >
          <HomePage isMobile={snapSideNavToTop} refs={refs} />
        </div>
      </div>
    </div>
  )
}

export default App
