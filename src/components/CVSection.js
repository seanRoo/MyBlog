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
          marginBottom: 20,
        }}
      >
        <Typography style={{ fontWeight: 'bold', marginLeft: 14 }} variant="h4">
          What I've done
        </Typography>
      </div>

      {/* PDF div */}
      <div
        style={{
          margin: 'auto',
          maxWidth: '80%',
          maxHeight: '80%',
        }}
      >
        <Document file={CV} onLoadSuccess={() => console.log('yo')}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  )
}

export default CVSection
