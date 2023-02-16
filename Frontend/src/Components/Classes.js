import React from 'react'
import class1 from '../img/classsection/class-1.jpg'
import class2 from '../img/classsection/class-2.jpg'
import class3 from '../img/classsection/class-3.jpg'
import class4 from '../img/classsection/class-4.jpg'
import class5 from '../img/classsection/class-5.jpg'
import class6 from '../img/classsection/class-6.jpg'
import class7 from '../img/classsection/class-7.jpg'
import class8 from '../img/classsection/class-8.jpg'
import class9 from '../img/classsection/class-9.jpg'
import './Home.css';
function Classes() {
  return (
   <div className='container-fluid p-0 m-0 '>
     <div className='contanier-fluid classes'>
      <section className="classes-section container-fluid p-0 spad">
        <div className="container-fluid p-0 m-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h5 className='text-center text-white'>Our Classes</h5>
                <marquee width="100%" direction="right" height="50px"> <h2 className='text-center text-white'>WHAT WE CAN OFFER</h2> </marquee>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="class-item">
                <div className="ci-pic">
                  <img src={class1} alt="" />
                </div>
                <div className="ci-text">
                  <h6 className=' text-white'>STRECHING</h6>
                  <h5 className=' text-white'>CURE STRUCH</h5>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="class-item">
                <div className="ci-pic">
                <img src={class2} alt="" />
                </div>
                <div className="ci-text">
                  <h6 className=' text-white'>Weight Lifting</h6>
                  <h5 className='text-white'>Weight</h5>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="class-item">
                <div className="ci-pic">
                <img src={class3} alt="" />
                </div>
                <div className="ci-text">
                  <h6 className='text-white'>Rest</h6>
                  <h5 className='text-white'>Rest Body</h5>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="class-item">
                <div className="ci-pic">
                <img src={class4} alt="" />
                </div>
                <div className="ci-text">
                  <h6 className='text-white'>Hand lift</h6>
                 <div className='lineicon'>
                 <h4 className='text-white'>Hand lift</h4>
                  <a href="#" className='secondrow'><i class="bi bi-arrow-right-circle"></i></a>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 ">
              <div className="class-item">
                <div className="ci-pic">
                <img src={class5} alt="" />
                </div>
                <div className="ci-text">
                  <h6 className='text-white'>Running</h6>
                  <div className='lineicon'><h4 className='text-white'>Fast Run Exercise</h4>
                  <a href="#" className='secondrow'><i class="bi bi-arrow-right-circle"></i></a></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="class-item">
                <div className="ci-pic">
                  <img src={class6} alt="" />
                </div>
                <div className="ci-text">
                  <h6 className=' text-white'>STRECHING</h6>
                  <h5 className=' text-white'>CURE STRUCH</h5>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="class-item">
                <div className="ci-pic">
                <img src={class7} alt="" />
                </div>
                <div className="ci-text">
                  <h6 className=' text-white'>Weight Lifting</h6>
                  <h5 className='text-white'>Weight</h5>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="class-item">
                <div className="ci-pic">
                <img src={class8} alt="" />
                </div>
                <div className="ci-text">
                  <h6 className='text-white'>Rest</h6>
                  <h5 className='text-white'>Rest Body</h5>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   </div>
  )
}

export default Classes
