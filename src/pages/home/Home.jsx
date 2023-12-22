import React, { useEffect } from 'react';
import Hero from './Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './About';
import Service from './Service';
AOS.init();

const Home = () => {
  useEffect(() => {
    document.title = 'Tasksync Pro - Empowering Your Productivity Journey';
  }, []);


  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Service/>
      <About/>
    </div>
  );
};

export default Home;
