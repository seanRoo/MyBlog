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
      alignContent: 'flex-start',
      //   height: '100%',
      //   width: '100%',
    }}
  >
    {hobbies?.map((hobby) => (
      <>
        <li
          style={{
            width: '30%',
            height: 100,
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          {hobby.icons?.map((Icon) => (
            <Icon.value
              size={'50%'}
              style={{ color: 'rgba(108,81,164, .8)' }}
            />
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
