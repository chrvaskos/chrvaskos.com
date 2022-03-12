import type { NextPage } from 'next'
import Container from 'components/Container'
import { ContactSection } from 'components/ContactSection'

const Contact: NextPage = () => {
  return (
    <Container title="Contact - Christoforidis Vasilis">
      <ContactSection playAnimate={false} mainHeading={true} />
    </Container>
  )
}

export default Contact
