import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Experience = () => {
  // useEffect(()=>{
  //   Aos.init({duration:1000})
  // },[])
  return (
    <section id='experience'>
      <h5 >The Languages I Learnt</h5>
      <h2 >Languages and Tools</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3 >Frontend Development</h3>
          <div className="experience_content">
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/html-5.png" alt="avatar" />
              </div>
              <h4>HTML</h4>
              {/* <small className='text_light'>Experienced</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/css-3.png" alt="avatar" />
              </div>
              <h4>CSS</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/js.png" alt="avatar" />
              </div>
              <h4>Javascript</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="data:image/jpeg;base64,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" alt="avatar" />
              </div>
              <h4>Chakra UI</h4>
              {/* <small className='text_light'>Experienced</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/react.png" alt="avatar" />
              </div>
              <h4>React</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://bootstrapmade.com/assets/img/logo-hero.png" alt="avatar" />
              </div>
              <h4>Bootstrap</h4>
              {/* <small className='text_light'>Intermeiate</small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/nodejs.png" alt="avatar" />
              </div>
              <h4>Node JS</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="data:image/png;base64,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" alt="avatar" />
              </div>
              <h4>Express</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/mongodb.png" alt="avatar" />
              </div>
              <h4>MongoDB</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="data:image/png;base64,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" alt="avatar" />
              </div>
              <h4>Atlas</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/postman.png" alt="avatar" />
              </div>
              <h4>Postman</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience