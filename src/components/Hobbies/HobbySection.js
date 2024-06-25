import HobbyList from './HobbyList'
import LeftSeparator from '../LeftSeparator'
import './HobbySection.css'

const HobbySection = ({ isMobile }) => {
  return (
    <div
      className={`hobbySectionContainer ${
        isMobile ? 'hobbySectionMobile' : ''
      }`}
    >
      <div>
        <LeftSeparator text="What I like" />
      </div>
      <HobbyList isMobile={isMobile} />
    </div>
  )
}

export default HobbySection
