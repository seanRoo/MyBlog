import { useState } from 'react'
import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import CV from '../assets/Sean_Rooney_CV.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const CVSection = ({ isMobile }) => {
  const [pdfDimensions, setPdfDimensions] = useState(1)
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
          marginBottom: isMobile ? 0 : 20,
        }}
      >
        <Typography style={{ fontWeight: 'bold', marginLeft: 14 }} variant="h4">
          What I've done
        </Typography>
      </div>

      {/* button div */}
      <div
        style={{
          width: '100%',
          textAlign: 'right',
          display: 'inline-block',
        }}
      >
        <button
          style={{
            backgroundColor: 'white',
            padding: 4,
          }}
          onClick={() =>
            pdfDimensions < 1 && setPdfDimensions(pdfDimensions + 0.05)
          }
        >
          <FontAwesomeIcon icon={faSearchPlus} size="lg" />
        </button>
        <button
          style={{
            backgroundColor: 'white',
            padding: 4,
            marginLeft: 4,
            // borderRadius: '50%',
          }}
          onClick={() =>
            pdfDimensions > 0.5 && setPdfDimensions(pdfDimensions - 0.05)
          }
        >
          <FontAwesomeIcon icon={faSearchMinus} size="lg" />
        </button>
      </div>

      {/* PDF div */}
      <div
        style={{
          height: `${pdfDimensions * 100}%`,
          width: `${pdfDimensions * 100}%`,
          position: 'relative',
          margin: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          minWidth: '50%',
          minHeight: '50%',
        }}
      >
        <Document
          file={CV}
          onLoadSuccess={() => console.log('yo')}
          style={{ display: 'inline' }}
        >
          <Page pageNumber={1} style={{ display: 'inline' }} />
        </Document>
      </div>
    </div>
  )
}

export default CVSection
