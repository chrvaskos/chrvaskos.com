import type { NextPage } from 'next'
import { pdfjs, Document, Page } from 'react-pdf'
import Container from 'components/Container'
import {
  ResumeContainer,
  Heading,
  SecondaryHeading,
} from 'styles/SecondaryStyles'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Resume: NextPage = () => {
  return (
    <Container title="Resume - Christoforidis Vasilis">
      <Heading>Resume</Heading>
      <SecondaryHeading>Take a brief look at my resume below.</SecondaryHeading>
      <ResumeContainer>
        <Document
          file={{
            url: 'Christoforidis-Vasileios-CV.pdf',
          }}
          onLoadError={e =>
            console.log('Error while loading document! ' + e.message)
          }
          onSourceError={e =>
            console.log('Error while loading document! ' + e.message)
          }
        >
          <Page pageNumber={1} />
        </Document>
      </ResumeContainer>
    </Container>
  )
}

export default Resume
