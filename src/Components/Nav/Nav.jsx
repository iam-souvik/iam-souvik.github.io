import React from 'react'
import './nav.css'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import CV from '../../Assests/Souvik-Patra_Resume.pdf'
import { useState } from 'react'

const Nav = () => {
  const [activenav, setActivenav] = useState("#")
  const [activemenu,setActivemenu] = useState(false)
  const handleClick = () => {
    setActivemenu(!activemenu)
  }
  const handleHide = (e) =>{
    setActivenav(e)
    setActivemenu(false)
  }
  return (
    <div className='topnav'>
    <nav>
      <a href="#" className='dp'>SOUVIK</a>
      <div>
        <ul id='navbar' className={activemenu ? "#navbar active" : "#navbar"}>
          <li><a href="#" onClick={()=>handleHide("#")} className={activenav==="#" ? "active" : ""}>Home</a></li>
          <li><a href="#about" onClick={()=>handleHide("#about")} className={activenav==="#about" ? "active" : ""}>About</a></li>
          <li><a href="#projects"  onClick={()=>handleHide("#projects")} className={activenav==="#projects" ? "active" : ""}>Projects</a></li>
          <li><a href="#experience" onClick={()=>handleHide("#experience")} className={activenav==="#experience" ? "active" : ""}>Skills</a></li>
          <li><a href="#contact" onClick={()=>handleHide("#contact")} className={activenav==="#contact" ? "active" : ""}>Contact</a></li>
          <li><a href={CV}  download="Souvik-Patra-Resume.pdf" ><button className='resume_btn' 
           
          > Resume  </button></a></li>
        </ul>
      </div>
        <div id='mobile'>
          {
            activemenu ? <BsChevronDoubleRight onClick={handleClick} className="nav_icon "/>  : <AiOutlineMenuFold  className="nav_icon" onClick={handleClick} />
          }

        </div>
    </nav>
    </div>
  )
}

export default Nav