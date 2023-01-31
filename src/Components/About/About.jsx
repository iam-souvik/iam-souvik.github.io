import React from 'react'
import './about.css'
import ME from "../../Assests/Mynew_photo.jpg"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section id='about'>
      <h5 >Get to Know</h5>
      <h2 >About Me</h2>
      <div className='container about_container'>
        <div className="about_content">
          <p >Skilled full stack developer and quick learner <br /> who possesses the ability to adapt with
            new environment quickly.  <br /> Looking forward to working with a company that enables
            me to utilize my knowledge and skills, learn new things and help me achieve personal
            as well  <br /> as  organizational goals.
          </p>
        </div>
      </div>
      <div className='container experience_container about'>
        <div className="my_stats">
          <div data-aos="fade-up" className='stats'>1200+</div>
          <p>Hours of Full Stack Coding</p>
          <div data-aos="fade-up" className='stats'>100+</div>
          <p>Hours of Soft Skill Sessions</p>
        </div>
        <div data-aos="fade-up" className="my_stats">
          <div className='stats'>250+</div>
          <p>DSA Problems</p>
          <div data-aos="fade-up" className='stats'>4+</div>
          <p>Projects Done</p>
        </div>
      </div>
    </section>
  )
}

export default About