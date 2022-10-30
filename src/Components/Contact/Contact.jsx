import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5q1h19k', 'template_dciz76e', form.current, '5RoRq3Vq10tPXGDnp')
     e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='coi' />
            <h4>Email</h4>
            <h5>souvikpatramax@gmail.com</h5>
            <a href="mailto:souvikpatramax@gmail" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='coi' />
            <h4>Whatsapp</h4>
            <h5>{"+91"} 9064760184</h5>
            <a href="https://api.whatsapp.com/send?phone=9064760184" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='coi' />
            <h4>LinkedIn</h4>
            <h5>Souvik Patra</h5>
            <a href="https://www.linkedin.com/in/souvik-patra-86b2b7166/" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required style={{background:"white"}} />
          <input type="email" name='email' placeholder='Your Email' required style={{background:"white"}} />
          <textarea name="name" placeholder='Your Message' rows="7" required style={{background:"white"}}></textarea>
          <button type='submit' className='btn btn_primary' style={{ marginLeft:"150px"}} >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact