import { useState } from 'react'
import { PaperAirplane } from 'assets/svg/ArrowIcons'
import {
  ContactFormBox,
  InputWrapper,
  SubmitButton,
} from 'styles/ContactSectionStyles'
import Lottie from 'lottie-react'
import check from '../../assets/lottie/check.json'

const ContactForm = (): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false)

  const checkAnimation = JSON.parse(JSON.stringify(check))

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    const formData: any = {}
    Array.from(e.currentTarget.elements).forEach((field: any) => {
      if (!field.name) return
      formData[field.name] = field.value
    })
    fetch('api/mail', {
      method: 'post',
      body: JSON.stringify(formData),
    })
    setSuccess(true)
  }

  return (
    <ContactFormBox id="contactForm" method="POST" onSubmit={handleOnSubmit}>
      <InputWrapper>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="John Doe"
          required
        ></input>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="email">Email</label>
        <input
          className="peer"
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@example.com"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="message">Message</label>
        <textarea
          className="peer"
          name="message"
          cols={100}
          rows={7}
          id="message"
          placeholder="Let's work together!"
          required
        />
      </InputWrapper>
      <SubmitButton disabled={success ? 'disabled' : ''}>
        {success ? (
          <span>
            <Lottie animationData={checkAnimation} loop={false} />
          </span>
        ) : (
          <PaperAirplane />
        )}
        <p>{success ? 'Mail sent successfully!' : 'Send message'}</p>
      </SubmitButton>
    </ContactFormBox>
  )
}

export default ContactForm
