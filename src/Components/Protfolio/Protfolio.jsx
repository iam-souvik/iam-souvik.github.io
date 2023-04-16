import React from 'react'
import './protfolio.css'
import IMG1 from "../../Assests/Boat.jpg"
import IMG2 from "../../Assests/Codecov.jpg"
import IMG3 from "../../Assests/fitnes_blender_image.jpg"
import IMG4 from "../../Assests/nifty_website.jpg"
import IMG5 from "../../Assests/Youtube_clone.jpg"
import IMG6 from "../../Assests/stylecraze.jpg"
import IMG7 from "../../Assests/Emi_calculator.jpg"
import IMG8 from "../../Assests/Netflix.jpg"
import IMG9 from '../../Assests/Bmi_calculator.jpg'

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
            <img src={IMG8} alt="portfolio1" />
          </div>
          <h3> Netflix - MERN Project</h3>
          <small className='portofolio_margin'>It’s Solo Project where I've used MERN stack to Build the Clone of Netflix along with frontend and backend integration its Fully Responsive web application that allows you to Watch your favourite award-winning TV shows, movies, anime, documentaries, . It has a variety of categories,</small>
          <p className='bold'>Tech stack :  HTML | CSS | Javascript | Chakra UI | React | Redux | Express | MongoDB</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/iam-souvik/Netflix-original-Clone" className='btn' target="_blank">Github</a>
            <a href="https://ubiquitous-pithivier-562be6.netlify.app/" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>




        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3> Cloning of Fitnes Blender - MERN Project</h3>
          <small className='portofolio_margin'>Fitnes Blender Inc, Its a Group Project Our goal is to make health and fitness attainable, affordable and approachable.</small>
          <p className='bold'>Tech stack :  HTML | CSS | Javascript | Chakra UI | React | Redux | Express | MongoDB</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/HimanshuSingh1407/just-books-7908-Fitness-center" className='btn' target="_blank">Github</a>
            <a href="https://fitnesscenter1.netlify.app/" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>

        {/* <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG9} alt="portfolio1" />
          </div>
          <h3>BMI(Body Mass Index) CALCULATOR - MERN Project  </h3>
          <small className='portofolio_margin'>  Its a Solo Project ,
            BMI (Body Mass Index) calculator is a tool that is used to measure body fat based on an individual's height and weight. It is a simple and easy-to-use tool that provides a quick estimate of whether an individual's weight is in a healthy range or not.</small>
          <p className='bold'>TechStack : HTML | CSS | JavaScript |  React | Chakar Ui | Node-Js | Express | MongoDB-Atlas </p>

          <div className='portfolio_item-cta'>
            <a href="https://github.com/iam-souvik/EMI--CALCULATOR/tree/main/emi-app" className='btn' target="_blank">Github</a>
            <a href="jade-lily-59fb96.netlify.app/" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article> */}

   



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
            <img src={IMG6} alt="portfolio1" />
          </div>
          <h3> Cloning of StyleCraze MERN Project</h3>
          <small className='portofolio_margin'>StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty – it provide answers to women in all spheres to celebrate their unique needs and individuality. Their goal is to empower women from all walks of life and various intersections of identity to lead healthier and happier lives.</small>
          <p className='bold'>Tech stack :  HTML | CSS | Javascript | Chakra UI | React | Redux | express | MongoDB</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/iam-souvik/woman_fashion" className='btn' target="_blank">Github</a>
            <a href="#" className='btn btn_primary' target="_blank">Live Demo</a>
            {/* https://mernstylecraze.netlify.app/ */}
          </div>
        </article>



        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG7} alt="portfolio1" />
          </div>
          <h3>EMI--CALCULATOR </h3>
          <small className='portofolio_margin'>The EMI calculator is a financial tool that helps users calculate the monthly installment amount they need to pay towards a loan, such as a home loan, car loan, or personal loan. It takes into account the loan amount, interest rate, and loan tenure to provide the monthly installment amount.</small>
          <p className='bold'>TechStack : HTML | CSS | JavaScript |  React </p>

          <div className='portfolio_item-cta'>
            <a href="https://github.com/iam-souvik/EMI--CALCULATOR/tree/main/emi-app" className='btn' target="_blank">Github</a>
            <a href="https://magnificent-torte-19b939.netlify.app" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>


        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG5} alt="portfolio1" />
          </div>
          <h3> Youtube Clone</h3>
          <small className='portofolio_margin'>About
            In this YouTube Clone You can search for any Videos also at the time of watching a video you get Recommendation also. You can Do Filter by View, Alphabet, Popularity</small>
          <p className='bold'>Tech stack :  HTML | CSS | Javascript </p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/iam-souvik/Youtube_Clone" className='btn' target="_blank">Github</a>
            <a href=" https://jovial-haupia-6b6685.netlify.app/" className='btn btn_primary' target="_blank">Live Demo</a>
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
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3> Cloning of CodeCov</h3>
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