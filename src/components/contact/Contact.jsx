import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '../../context'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs // code copied from emailjs react doc
      .sendForm(
        'service_rqs95le',
        'template_boolbfj',
        formRef.current,
        'nCvhKlRUjkRycNipT'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Contact</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <PhoneInTalkOutlinedIcon className='c-icon' />
              +971 50 8522 537
            </div>
            <div className='c-info-item'>
              <EmailOutlinedIcon className='c-icon' />
              rifkirifaath@gmail.com
            </div>
            <div className='c-info-item'>
              <LocationOnOutlinedIcon className='c-icon' />
              Sharjah, U.A.E
            </div>
            <div className='c-info-item'>
              <LinkedInIcon className='c-icon' />
              linkedin.com/in/rifaath/
            </div>
            <div className='c-info-item'>
              <GitHubIcon className='c-icon' />
              github.com/rifaath101
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>
              Thanks for taking the time to reach out. How can I help you today
              ?
            </b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              type='text'
              placeholder='Name'
              name='user_name'
            />
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              type='text'
              placeholder='Email'
              name='user_email'
            />
            <textarea
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              rows='5'
              placeholder='Message'
              name='message'
            />
            <button>Submit</button>
            {done && (
              <b className='response'>
                Thanks, I'll get back to you as soon as I can.
              </b>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
