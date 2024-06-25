import HeaderInfo from './HeaderInfo'
import HeaderButtons from './HeaderButtons'
import Divider from './Divider'
import Me from '../../assets/Me.jpg'
import './Header.css'
import ContactDetails from './ContactDetails'

const Header = ({ isMobile }) => {
  return (
    <div className={`headerContainer ${isMobile ? 'mobile' : ''}`}>
      <div className="innerContainer">
        <div className="headerInfo">
          <HeaderInfo />
          {!isMobile ? <ContactDetails /> : null}
        </div>
        {!isMobile ? (
          <img src={Me} alt="this is me" className="profilePicture" />
        ) : null}
      </div>
      <div className="headerButtons">
        <HeaderButtons isMobile={isMobile} />
      </div>
      <Divider />
    </div>
  )
}

export default Header
