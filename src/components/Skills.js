import { Typography } from '@material-ui/core'
import SkillList from './SkillList'

const Skills = ({ isMobile }) => (
  <div
    style={{
      padding: isMobile ? 20 : 40,
      paddingBottom: 0,
    }}
  >
    <div style={{ marginBottom: 36, marginTop: isMobile ? 10 : 0 }}>
      <div
        style={{
          borderLeft: '6px solid #6c51a4',
          marginBottom: 16,
        }}
      >
        <Typography style={{ fontWeight: 'bold', marginLeft: 14 }} variant="h4">
          What I do
        </Typography>
      </div>
      <Typography variant="body1">
        I've picked up a lot tech skills since the beginning of my Software
        Development career back in 2019. Take a look below for the (mostly front
        end related) stuff I've gained good knowledge in since beginning my
        Computer Science journey in 2014.
      </Typography>
    </div>
    <SkillList isMobile={isMobile} />
  </div>
)

export default Skills
