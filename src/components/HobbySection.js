import { Typography, Button, Divider, List, ListItem } from '@material-ui/core'
import HobbyList from './HobbyList'

const HobbySection = (ref) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        scrollSnapAlign: 'center',
        padding: 40,
        paddingTop: 0,
        paddingBottom: 0,
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
      <HobbyList />
    </div>
  )
}

export default HobbySection
