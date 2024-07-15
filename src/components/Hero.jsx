import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Earth from '../../public/Earth.jsx'; // Ensure this path is correct
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Hero = () => {
  return (
    <div className="hero" id='hero'>
     
      <div className="hero-content" data-aos="fade-right">
        <h5>Hello, I'm</h5>
        <h2>SHREYA BAKRE</h2>
        <p>Creating Aesthetics with purpose and passion</p>
      </div>
      <div className="hero-image" data-aos="fade-left">
        <Canvas>
          <ambientLight />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
