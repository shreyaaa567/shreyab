import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <div className='about' id ="about" data-aos="fade-right">
        <h5>About me</h5>
        <h1>Overview</h1>
      
      <h3>I am a second-year B.Tech student at VIT Vellore, specializing in Electronics and Communication.
         I am passionate about learning and continuously expanding my skill 
         set. In addition to my core studies, I have a foundational understanding of web development and possess 
         skills in UI/UX design and social media marketing.</h3>
    </div>
  )
}

export default About
