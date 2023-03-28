import myImage1 from '../../images/bank1.jpg';
import myImage2 from '../../images/capsule5.jpg';
import myImage3 from '../../images/capsule8.jpg';
import React from 'react';

function AboutPage() {
  return (
    <div id='about' style={{backgroundColor:'purple'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d83831" fill-opacity="0.2" d="M0,32L48,74.7C96,117,192,203,288,202.7C384,203,480,117,576,90.7C672,64,768,96,864,128C960,160,1056,192,1152,170.7C1248,149,1344,75,1392,37.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div class="tile is-ancestor" style={{height:'50%'}}>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title" style={{marginLeft:'20%'}}>Take your Cash</p>
      <img src={myImage1} alt="My Image" style={{ width: '100%', height: '50%' }} />

    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title" style={{marginLeft:'50%'}}>Invest</p>
      <img src={myImage2} alt="My Image" style={{ width: '100%', height: '50%' }} />

    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title" style={{marginLeft:'50%'}}>Grow</p>
      <img src={myImage3} alt="My Image" style={{ width: '100%', height: '50%' }} />

      {/* <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div> */}
    </article>
  </div>
</div>
</div>
  );
}

export default AboutPage;
