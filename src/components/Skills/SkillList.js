import Typography from '@mui/material/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { skills } from '../../utils'
import './SkillList.css'

const SkillList = ({ isMobile }) => (
  <ul className="skillList">
    {skills.map((skill, index) => (
      <>
        <li
          className="item"
          style={{
            marginBottom: index === skills.length - 1 && isMobile ? 0 : 20,
          }}
        >
          {skill.icons?.map((icon) =>
            icon?.isAlternateIcon ? (
              <FontAwesomeIcon icon={icon.value} color={icon.color} size="2x" />
            ) : (
              <icon.value size={28} color={icon.color} />
            )
          )}
          <Typography component="h6" gutterBottom>
            {skill.title}
          </Typography>
          <Typography component="body2">{skill.body || null}</Typography>
        </li>
      </>
    ))}
  </ul>
)

export default SkillList
