import React from 'react'
import './Home.css';
import hero from '../img/hero/hero-1.jpg'
import hero1 from '../img/hero/hero-2.jpg'
import About from './About';
import Classes from './Classes';
import Activites from './Activites';
function Home() {
  return (
    
   <div className='row p-0 m-0 home '>
     <div className='container-fluid p-0 '>
      
     <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={hero} height={"550px"} withd={"100%"} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Shape Your Body</h5>
              <h1>BE STRONG TRAINING HARD</h1>
              <div className=' carsolbtn btn btn-outline-primary '>Get Info</div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={hero1} height={"550px"} withd={"100%"} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Shape Your Body</h5>
              <h1>BE STRONG TRAINING HARD</h1>
              <div className=' carsolbtn btn btn-outline-primary '>Get Info</div>
            </div>
          </div>
         
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  </div>
  <About/>
  <Classes/>

   </div>
  
  )
}

export default Home
