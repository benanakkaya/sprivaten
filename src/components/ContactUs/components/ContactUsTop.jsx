import React from 'react'
import PrimaryButton from '../../shared/PrimaryButton'

const ContactUsTop = () => {
  return (
<div className="contact-us-top">
        <div className="contact-us-cover">
        <div className="contact-us-row container">
            <div className="contact-us-header">
                <h6 className="contact-us-subtitle">Contact Us</h6>
                <h5 className="contact-us-header-title">Make an Appointment</h5>
            </div>
            <form className="contact-us-form">
                <input className='contact-us-form-input' type="text" placeholder="Full Name" />
                <input className='contact-us-form-input' type="email" placeholder="name@mail.com" />
                <select className='contact-us-form-input'>
                    <option selected disabled>Please Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <select className='contact-us-form-input'>
                    <option>13:00 Avaible</option>
                    <option>15:00 Unavaible</option>
                    <option>17:00 Avaible</option>
                </select>
                <textarea className='contact-us-form-textarea' name="message" id="" cols="30" rows="10" />
            </form>
            <PrimaryButton text="Book Appointment" />
        </div>
        </div>
        </div>
  )
}

export default ContactUsTop
