import { useRef, useState, useEffect } from 'react'
import Sidenav from './components/Sidenav'
import HomePage from './pages/HomePage'

const App = () => {
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
  const [height, setHeight] = useState(window.innerHeight)
  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  let isMobile = width <= 768
  let isIpad = width > 768 && width <= 1370
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
    >
      {!isMobile && (
        <div style={{ flex: 0.18, height: '100vh' }}>
          <Sidenav handleClick={handleSidenavClick} />
        </div>
      )}
      <div
        style={{
          flex: isMobile ? 1 : 0.82,
          overflowY: 'scroll',
          display: 'flex',
        }}
      >
        <HomePage isMobile={isMobile} isIpad={isIpad} refs={refs} />
      </div>
    </div>
  )
}

export default App
