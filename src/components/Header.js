import { Typography } from '@material-ui/core'

const Header = () => (
  <>
    <Typography style={{ fontWeight: 'bold' }} variant="h3">
      Sean Rooney
    </Typography>
    <Typography style={{ fontSize: 20 }} variant="subtitle1" gutterBottom>
      Software Engineer
    </Typography>
    <Typography variant="body1" gutterBottom>
      I'm a young software engineer currently mastering my craft and working in
      front-end development but would be interested in going full-stack at some
      point in my career. I'm a huge advocate of learning by doing and tend to
      pick up new skills quickly, whether it's new techniques, languages or
      frameworks. Check out my list of projects or CV below!
    </Typography>
  </>
)

export default Header
