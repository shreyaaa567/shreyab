import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();

const Titlecards = () => {
  return (
    <div className='container1'>
     
      <div className="tilt-box-wrap" >
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        
        <div className="tilt-box title-box" 
        Q>
          <img src="./download (7).png" alt="" />
          <strong>Web Devlopment</strong>
          <p>I specialize in frontend development using HTML, CSS, JavaScript, React, Tailwind CSS, and React+Vite. I create responsive and interactive websites that deliver an excellent user experience.</p>
          </div>

      </div>
      <div className="tilt-box-wrap">
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        
        <div className="tilt-box title-box">
          <img src="./titlecard2.jpg" alt="" />
          <strong>Graphic Designer</strong>
          <p>With expertise in Figma, prototyping, logo design, and poster design, I craft visually appealing and user-friendly interfaces. I focus on creating designs that are both functional and aesthetically pleasing</p>
          </div>
          
       
      </div>
      <div className="tilt-box-wrap">
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <div className="tilt-box title-box" >
          <img src="./titlecard3.png" alt="" />
          <strong>Social Media Marketing</strong>
          <p>I help businesses grow their online presence through strategic social media marketing. My services include content creation, campaign management, and audience engagement</p>
          </div>
      </div>
      <div className="tilt-box-wrap">
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <span className='t_over' />
        <div className="tilt-box title-box" >
          <img src="./titlecard4.png" alt="" />
          <strong>SEO Optimization</strong>
          <p>I improve website visibility and search engine rankings through effective SEO strategies. My approach includes keyword research, on-page optimization, and link building.</p>
          </div>
      </div>

      
    </div>
  );
};

export default Titlecards;
