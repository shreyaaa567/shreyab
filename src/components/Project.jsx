import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Project = () => {
  return (
    
      <div className='project' id="project" >
        <div className="pro-head" data-aos="fade-down">
          <h1>Projects</h1>
        </div>
        <div className="probox1">
          <div className="probox-left" data-aos="fade-right">
            <img src="./Group 1 (1).png" alt="" />
          </div>
          <div className="probox-right" data-aos="fade-left">
          <p>Built a movie streaming app with a frontend interface inspired by Netflix.
             Implemented API fetching to display the latest movies and TV shows.
             Created login and signup pages. Optimized the user experience with
             intuitive navigation and seamless transitions</p>
          </div>
        
      
         </div>
         <div className="probox2">
          
          <div className="probox-right" data-aos="fade-right">
          <p>Built a movie streaming app with a frontend interface inspired by Netflix.
             Implemented API fetching to display the latest movies and TV shows.
             Created login and signup pages. Optimized the user experience with
             intuitive navigation and seamless transitions</p>
          </div>
          <div className="probox-left" data-aos="fade-left">
            <img src="./Group 1 (1).png" alt="" />
          </div>

          <div className="probox3">
          <div className="probox-left" data-aos="fade-right">
            <img src="./Group 1 (1).png" alt="" />
          </div>
          <div className="probox-right" data-aos="fade-left">
          <p>Built a movie streaming app with a frontend interface inspired by Netflix.
             Implemented API fetching to display the latest movies and TV shows.
             Created login and signup pages. Optimized the user experience with
             intuitive navigation and seamless transitions</p>
          </div>
        
      
         </div>
        
      
         </div>
      </div>
    
  )
}

export default Project

