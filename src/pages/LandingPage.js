import LandingGif from '../assets/HowToCenterADiv.gif'

const LandingPage = () => (
  <div
    style={{
      height: '100vh',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      scrollSnapAlign: 'start',
      scrollPadding: '10px',
      backgroundImage: `url(${LandingGif})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
    }}
  >
    <div
      style={{
        fontFamily: 'Futura',
        color: 'white',
        fontSize: 40,
      }}
    >
      Google
    </div>
  </div>
)
export default LandingPage
