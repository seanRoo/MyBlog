import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-ui/core'
import { skills } from '../utils'

const SkillList = ({ isMobile }) => (
  <ul
    style={{
      display: 'flex',
      flexDirection: 'row',
      columnGap: 12,
      flexWrap: 'wrap',
      listStyle: 'none',
      paddingLeft: 0,
      marginBottom: 0,
    }}
  >
    {skills.map((skill, index) => (
      <>
        <li
          style={{
            width: isMobile ? '100%' : '32%',
            minHeight: isMobile ? 100 : 200,
            marginBottom: index === skills.length - 1 && isMobile ? 0 : 20,
            height: 'auto',
          }}
        >
          {skill.icons?.map((Icon) =>
            Icon?.isAlternateIcon ? (
              <FontAwesomeIcon icon={Icon.value} color={Icon.color} size="2x" />
            ) : (
              <Icon.value
                size={28}
                color={Icon.color}
                style={{ paddingRight: 4 }}
              />
            )
          )}
          <Typography
            component="h6"
            style={{ fontWeight: 'bold' }}
            gutterBottom
          >
            {skill.title}
          </Typography>
          <Typography
            component="body2"
            style={{ fontSize: 14, fontWeight: 'lighter' }}
          >
            {skill.body || null}
          </Typography>
        </li>
      </>
    ))}
  </ul>
)

export default SkillList
