import { useRef, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import HomePage from './pages/HomePage'

const App = () => {
  const theme = useTheme()

  const refs = {
    aboutMeRef: useRef(null),
    portfolioRef: useRef(null),
    cvRef: useRef(null),
    hobbiesRef: useRef(null),
  }

  useEffect(() => {
    document.title = 'Sean Rooney - Personal Website'
  }, [])

  const snapSideNavToTop = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        flexDirection: 'column',
      }}
      ref={refs.aboutMeRef}
    >
      <div style={{ height: 20, width: '100%', backgroundColor: '#6c51a4' }} />
      <div
        style={{
          flex: 0.9,
        }}
      >
        <HomePage isMobile={snapSideNavToTop} refs={refs} />
      </div>
    </div>
  )
}

export default App
