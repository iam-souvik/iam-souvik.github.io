import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/souvik-patra-86b2b7166/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/iam-souvik" target="_blank"><FaGithub/></a>
        <a href="mailto:souvikpatramax@gmail.com" target="_blank"><FiDribbble/></a>
        
    </div>
  )
}

export default HeaderSocial