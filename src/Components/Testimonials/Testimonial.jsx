import React from 'react'
import './testimonial.css'
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar: "https://d27028dliefpk3.cloudfront.net/assets/favicon/favicon-32x32.png",
    name: "Masai School",
    year:"Apr 2022-Dec 2022",
    review: "Masai is an outcome driven career school.It is Intensive and Immersive Program. In a duration of 40 weeks, I have 1200+ hours hands on coding , 100+ Hour on SoftSkills."
  },
  {
    avatar: "image.com",
    name: "Asansol Engineering College(Asansol)",
    year:"2018-2021",
    review: "BBA ( Bachelors of Business Administration ) "
  },
  {
    avatar: "image.com",
    name: "Bankura Hindu High School",
    year:"1016-2017",
    review: "Council of Heigher Secondary Education in Science offers an integrated package in Physics, Chemistry, Biology and Mathematics. I have Studied Physics,Chemistry , Math and other related subjects."
  }

]

const Testimonial = () => {
  return (
    <section>
      <h5>My</h5>
      <h2>Education</h2>
      <Swiper className="container testimonials_container"
         modules={[ Pagination, A11y]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
      >
        {data.map((el, index) => {
          return (
            <SwiperSlide className='testimonial'>
              <div className="client_avtar">
                <img src={el.avatar} alt="avatar" />
              </div>
              <h5 className='client_name'>{el.name}</h5>
              <h5 className='client_name'>{el.year}</h5>
              <small className='client_review'>
                {el.review}
              </small>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  )
}

export default Testimonial