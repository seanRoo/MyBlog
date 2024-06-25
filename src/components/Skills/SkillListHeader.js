import Typography from '@mui/material/Typography'
import LeftSeparator from '../LeftSeparator'

const SkillListHeader = ({ isMobile }) => (
  <div className="skillHeaderContainer">
    <LeftSeparator text="What I do" />
    <Typography variant="body1">
      I've picked up a lot tech skills since the beginning of my Software
      Development career back in 2019. Take a look below for the (mostly front
      end related) stuff I've gained good knowledge in since beginning my
      Computer Science journey in 2014.
    </Typography>
  </div>
)

export default SkillListHeader
