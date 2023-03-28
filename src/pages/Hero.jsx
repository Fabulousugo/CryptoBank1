import React from 'react';
import HeroImage from '../../images/capsule4.jpg';

function Hero() {
  return (
    
    <div  style={{ 
      position: 'relative', 
      backgroundColor: '####', 
      overflow: 'hidden' 
    }}>
      <img 
        src={HeroImage} 
        alt="Hero Image" 
        style={{ 
          width: '100%', 
          height: '30%', 
          objectFit: 'cover' 
        }} 
      /> 
    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor:'#1F6DFF',opacity:'20%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{backgroundColor:'wheat', color: 'black', fontSize: '4rem', marginBottom: '2rem' }}>CRYPTOBANK</h1>
        <p style={{ color: '#FBAF00', fontSize: '2rem', marginBottom: '3rem' }}></p>
        <p style={{ color: '#FBAF00', fontSize: '2rem', marginBottom: '3rem' }}></p>
        <p style={{ color: '#FBAF00', fontSize: '2rem', marginBottom: '3rem' }}></p>
        <a href="#home" style={{ textDecoration: 'underline' }}>
          <button style={{ padding: '1rem 2rem', borderRadius: '50px', background:'purple', color: '#fff', fontSize: '20px' }}>Welcome</button>
        </a>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d83831" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,202.7C384,203,480,117,576,90.7C672,64,768,96,864,128C960,160,1056,192,1152,170.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

    </div>
  );
}

export default Hero;
