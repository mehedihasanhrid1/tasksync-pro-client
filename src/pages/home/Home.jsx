import React, { useEffect } from 'react';
import Hero from './Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
  useEffect(() => {
    document.title = 'Tasksync Pro - Empowering Your Productivity Journey';
  }, []);


  return (
    <div className='overflow-hidden'>
      <Hero/>
    </div>
  );
};

export default Home;
