import Typography from '@mui/material/Typography'
import Carousel from '../components/Carousel'
import AutoSizer from 'react-virtualized-auto-sizer'
import LeftSeparator from './LeftSeparator'
import './Projects.css'

const Projects = ({ isMobile }) => {
  return (
    <div
      className={`projectsContainer ${
        isMobile ? 'projectsContainerMobile' : ''
      }`}
    >
      <LeftSeparator text="What I've done" />
      <Typography variant="body1">
        <span>Ting</span>, a tinnitus management application written in React
        Native and hosted with Firebase. The goal of ting is to help users find
        ways to manage their Tinnitus day to day. Ting allows the user to
        achieve this in a few ways:
        <ul>
          <li>
            Recommending activities and techniques that could provide some
            relief for the users tinnitus, while also allowing them to add their
            own to the app
          </li>
          <li>
            Allows the user to provide daily check ins on their tinnitus each
            day and provides monthly visual representations for this data
          </li>
          <li>
            Users can find their nearest medical consultants with google maps
            integration
          </li>
          <li>
            Discussion boards allow users to talk with one another about their
            tinnitus
          </li>
        </ul>
      </Typography>

      <div className="carouselContainer">
        <AutoSizer className="innerContainer">
          {({ height, width }) => {
            return <Carousel height={height} width={width} />
          }}
        </AutoSizer>
      </div>
    </div>
  )
}

export default Projects
