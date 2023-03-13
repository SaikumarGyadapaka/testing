import React from 'react';
import{Link} from 'react-router-dom';
import "../styles/home.css";
import BannerImage from '../assets/images/pizza.jpeg'


function Home () {
  return (
    <div className='Home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
      <h1>Pizza</h1>
      <p>pzza to fit any taste</p>
      <Link to='/menu'>
      <button>Order Now</button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
