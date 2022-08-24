import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine,RiWhatsappLine} from 'react-icons/ri'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x6a04ij', 'template_81hjplv', form.current, '1y42B4B9zcXLgnp6p')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
          <div className='contact__options'>
            <section className='contact__option'>
              <HiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>willyrosaramirezc1@gmail.com</h5>
              <a href="mailto:willyrosaramirezc1@gmail.com" target="_blank">Send a message</a>
            </section>
            <section className='contact__option'>
              <RiWhatsappLine className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+503 76252217</h5>
              <a href="https://api.whatsapp.com/send?phone=+76252217" target="_blank">Send a message</a>
            </section>
            <section className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>willyrosaramirezc1@gmail.com</h5>
              <a href="https://m.me/willianadonay.rosaramirez" target="_blank">Send a message</a>
            </section>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button className='btn btn-primary' type='submit'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact