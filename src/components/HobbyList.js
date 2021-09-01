import { Typography } from '@material-ui/core'
import { hobbies } from '../utils'

const HobbyList = ({ isMobile }) => (
  <ul
    style={{
      display: 'flex',
      flexDirection: 'row',
      columnGap: 12,
      flexWrap: 'wrap',
      listStyle: 'none',
      paddingLeft: 0,
    }}
  >
    {hobbies?.map((hobby) => (
      <>
        <li
          style={{
            width: '28%',
            minHeight: 100,
            marginBottom: 20,
            height: 'auto',
            textAlign: 'center',
          }}
        >
          {hobby.icons?.map((Icon) => (
            <Icon.value size={60} style={{ color: 'rgba(108,81,164, .8)' }} />
          ))}
          <Typography component="h5" gutterBottom>
            {hobby.title}
          </Typography>
        </li>
      </>
    ))}
  </ul>
)

export default HobbyList
