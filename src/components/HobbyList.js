import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-ui/core'
import { hobbies } from '../utils'

const HobbyList = () => (
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
            width: '15%',
            minHeight: 200,
            marginBottom: 10 || 'auto',
            height: 'auto',
            textAlign: 'center',
          }}
        >
          {hobby.icons?.map((Icon) => (
            //     Icon?.isAlternateIcon ? (
            //       <FontAwesomeIcon icon={Icon.value} color={Icon.color} size="3x" />
            //     ) : (
            //       <Icon.value
            //         size={Icon?.size || 28}
            //         color={Icon.color}
            //         style={{ paddingRight: 4 }}
            //       />
            //     )
            //   )
            <Icon.value
              size={60}
              //color={'rgba((108,81,164)'}
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
