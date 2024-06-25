import SkillListHeader from './SkillListHeader'
import SkillList from './SkillList'
import './SkillList.css'

const Skills = ({ isMobile }) => (
  <div className={`skillListContainer ${isMobile ? 'mobile' : ''}`}>
    <SkillListHeader />
    <SkillList isMobile={isMobile} />
  </div>
)

export default Skills
