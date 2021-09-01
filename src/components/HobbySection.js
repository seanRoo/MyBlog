import { Typography } from '@material-ui/core'
import HobbyList from './HobbyList'

const HobbySection = ({ isMobile }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        scrollSnapAlign: 'center',
        paddingLeft: isMobile ? 20 : 40,
        paddingRight: isMobile ? 20 : 40,
        minHeight: isMobile ? 500 : 200,
      }}
    >
      <div style={{ marginBottom: 36 }}>
        <div
          style={{
            borderLeft: '6px solid #6c51a4',
            marginBottom: 16,
          }}
        >
          <Typography
            style={{ fontWeight: 'bold', marginLeft: 14 }}
            variant="h4"
          >
            What I like
          </Typography>
        </div>
      </div>
      <HobbyList isMobile={isMobile} />
    </div>
  )
}

export default HobbySection
