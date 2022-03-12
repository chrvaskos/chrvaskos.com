import { ContactForm } from '.'
import {
  ContactFormContainer,
  ContactSectionBox,
} from 'styles/ContactSectionStyles'
import Lottie from 'lottie-react'
import mail from 'assets/lottie/mail.json'

type ContactSectionProps = {
  playAnimate?: boolean
  mainHeading?: boolean
}

const ContactSection = (props: ContactSectionProps): JSX.Element => {
  const { playAnimate = true, mainHeading = false } = props

  const mailAnimation = JSON.parse(JSON.stringify(mail))

  return (
    <ContactSectionBox>
      <ContactFormContainer
        animate={{ opacity: 1 }}
        initial={playAnimate ? { opacity: 0 } : { opacity: 1 }}
        transition={{
          duration: 0.75,
          ease: [0.6, 0.05, -0.01, 0.9],
          delay: 2,
        }}
      >
        <div>
          <span>
            <Lottie animationData={mailAnimation} />
          </span>
          {!mainHeading && <h3>Let's get in touch!</h3>}
          {mainHeading && <h1>Let's get in touch!</h1>}
        </div>
        <ContactForm />
      </ContactFormContainer>
    </ContactSectionBox>
  )
}

export default ContactSection
