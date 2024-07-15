import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Among from "../../public/Among.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="cont-left">
        <div className="conthead" data-aos="fade-down">
          <h1>Contact Me</h1>
        </div>
        <div className="contimg" data-aos="fade-left">
        <Canvas>
        <ambientLight />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Among />
          </Suspense>
          
        </Canvas>

        </div>
        
      </div>
      <div className="cont-right" data-aos="fade-right">
        <form className="contact-form" action='https://formspree.io/f/xkgwgrky' method='POST'>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Your Message:
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
