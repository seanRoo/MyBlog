import Typography from '@mui/material/Typography'
import './LeftSeparator.css'

const LeftSeparator = ({ text }) => (
  <div className="leftSeparatorContainer">
    <Typography variant="h4">{text}</Typography>
  </div>
)

export default LeftSeparator
