import React from 'react'
import './protfolio.css'
import IMG1 from "../../Assests/Boat.jpg"
import IMG2 from "../../Assests/Codecov.jpg"
import IMG3 from "../../Assests/j_crew.jpg"
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
            <a href="https://glowing-mandazi-4b14bc.netlify.app" className='btn btn_primary' target="_blank">Live Demo</a>
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
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>Cloning Of J.crew</h3>
          <small className='portofolio_margin'>J.Crew Group, Inc., is an American multi-brand, multi-channel, specialty retailer. The company offers an assortment of women's, men's, and children's apparel and accessories, including swimwear, outerwear, lounge-wear, bags, sweaters, denim, dresses, suiting, jewelry, and shoes.</small>
          <p className='bold'>Tech stack :  HTML | CSS | Javascript | LocalStorage</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/iam-souvik/prickly-pot-4724-_____" className='btn' target="_blank">Github</a>
            <a href="#" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        {/* <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio title</h3>
          <small className='portofolio_margin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita dolore quas velit, suscipit unde. Culpa esse repellendus amet ratione porro, sunt ab maiores provident impedit? Laboriosam sunt officia culpa!</small>
          <p>TechStack : Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Protfolio