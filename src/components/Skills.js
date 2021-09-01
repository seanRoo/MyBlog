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
        I have nearly three years of industry experience but I feel like the
        side projects I work on in my spare time have really helped in raising
        my skill level and familiarity with other popular tech in the industry.
        Take a look below for the (mostly web-dev related) stuff I've gained
        good knowledge in since beginning my Computer Science journey in 2014.
      </Typography>
    </div>
    <SkillList isMobile={isMobile} />
  </div>
)

export default Skills
