import React from 'react';
import '../Home.css';
import CardList from '../components/CardList';
const Home = () => {
  const name = "Ms Uma Subramanium";

  return (
    <div className='fulldiv'>
      <div className='upperdiv'>
        <div className='yogaformindtext'>
          <div className='maintext'>
            Yoga for Mind
          </div>
          <div className='secondarytext'>
            Watch our Lead Yoga Therapist <span className='name'>{name}</span> explain yoga for the mind
          </div>
        </div>
        <div className='videodiv'>
          <video width="600" height="350" controls>
            <source src="/../../public/videos/yogaa.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className='middlediv'>Is this for You?</div>
      <div id='belowdiv'>
        <CardList/>
      </div>
    </div>
  );
};

export default Home;

