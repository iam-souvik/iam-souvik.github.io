import React from 'react'
import './protfolio.css'
import IMG1 from "../../Assests/Boat.jpg"
import IMG2 from "../../Assests/Codecov.jpg"
import IMG3 from "../../Assests/fitnes_blender_image.jpg"
import IMG4 from "../../Assests/nifty_website.jpg"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Protfolio = () => {
  // useEffect(()=>{
  //   Aos.init({duration:1000})
  // },[])
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Cloning Of boAt Website</h3>
          <small className='portofolio_margin'>BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables.
          </small>
          <p className='bold'>TechStack : JavaScript | HTML | CSS | Javascript | LocalStorage</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/ujjwalpaul005/boat-lifestyle_clone" className='btn' target="_blank">Github</a>
            <a href="https://voluble-marigold-c72fc5.netlify.app" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG4} alt="portfolio1" />
          </div>
          <h3>Cloning of Nifty :Project management</h3>
          <small className='portofolio_margin'>Nifty is one of the most beautiful looking management tools on the market! This matters because customers are usually charmed by its aesthetics and intuitiveness. !</small>
          <p>TechStack : HTML | CSS | JavaScript |  Font Awesome </p>

          <div className='portfolio_item-cta'>
            <a href="https://github.com/iam-souvik/newwebsite/tree/main/cared-eggs" className='btn' target="_blank">Github</a>
            <a href="https://transcendent-stardust-28067d.netlify.app" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3> Cloing of Fitnes Blender</h3>
          <small className='portofolio_margin'>Fitnes Blender Inc, Our goal is to make health and fitness attainable, affordable and approachable.</small>
          <p className='bold'>Tech stack :  HTML | CSS | Javascript | Chakra UI | React | Redux | MongoDB</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/HimanshuSingh1407/just-books-7908-Fitness-center" className='btn' target="_blank">Github</a>
            <a href="https://fitnesscenter1.netlify.app/" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3> Cloing of CodeCov</h3>
          <small className='portofolio_margin'>What is Codecov used for..?
            Codecov provides metrics and insights into the results of tests through code coverage reports. Coverage reports are used to determine which lines of code were tested and which lines were not tested, which may contain bugs and syntax errors.</small>
          <p className='bold'>Tech stack :  HTML | CSS | Javascript | React | Chakra UI</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/iam-souvik/fortunate-ship-9511" className='btn' target="_blank">Github</a>
            <a href="https://iam-souvik-makes-great-sites.netlify.app" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        
       
      </div>
    </section>
  )
}

export default Protfolio