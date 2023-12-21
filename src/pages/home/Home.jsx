import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Tasksync Pro - Empowering Your Productivity Journey';
  }, []);


  return (
    <div>
      Hello
    </div>
  );
};

export default Home;
