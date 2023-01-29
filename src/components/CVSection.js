import { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import CV from '../assets/CV_image.png'
import ReactImageMagnify from 'react-image-magnify'
import ReactSlick from 'react-slick'

const CVSection = ({ isMobile }, props) => {
  const [cvLoaded, setCVLoaded] = useState(false)

  const { rimProps, rsProps } = props
  const frontSrcSet = [
    { src: CV, setting: '500w' },
    { src: CV, setting: '779w' },
    { src: CV, setting: '1020w' },
    { src: CV, setting: '1200w' },
    { src: CV, setting: '1426w' },
  ]
  //     .map(item => `${item.src} ${item.setting}`)
  //     .join(', ');

  const dataSource = [
    {
      srcSet: frontSrcSet,
      small: CV,
      large: CV,
    },
  ]

  return (
    <div
      style={{
        paddingLeft: isMobile ? 20 : 40,
        paddingRight: isMobile ? 20 : 40,
      }}
    >
      <div
        style={{
          borderLeft: '6px solid #6c51a4',
          marginBottom: 20,
        }}
      >
        <Typography style={{ fontWeight: 'bold', marginLeft: 14 }} variant="h4">
          What I've done
        </Typography>
      </div>
      <div
        style={{
          maxWidth: '80%',
          maxHeight: '80%',
          margin: 'auto',
        }}
      >
        <ReactSlick
          {...{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
          {...rsProps}
        >
          <div>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Wristwatch by Versace',
                  isFluidWidth: true,
                  src: CV,
                  srcSet: dataSource.srcSet,
                  sizes:
                    '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                },
                largeImage: {
                  src: CV,
                  width: 1426,
                  height: 2000,
                },
                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
              }}
              {...rimProps}
            />
          </div>
        </ReactSlick>
      </div>
    </div>
  )
}

export default CVSection
