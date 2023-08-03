import React from 'react'
import PrimaryButton from '../../shared/PrimaryButton'

const ContactUsBottom = () => {
  return (
    <div className='contact-us-bottom'>
      <div className="contact-us-row container">
        <div className="contact-us-col-left">
            <h6 className="contact-us-col-left-title">
            Consulting Agency For Your Business
            </h6>
            <p className="contact-us-col-left-text">
            The quick fox jumps over the lazy dog
            </p>
        </div>
        <PrimaryButton text="Contact Us" />
      </div>
    </div>
  )
}

export default ContactUsBottom
