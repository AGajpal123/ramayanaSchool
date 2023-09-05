import React from 'react'
import Header from '../layouts/Header'

const AboutUs = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Header />
      <div className='mx-5 mt-5'>
        <div className='row mt-3 justify-content-center align-items-center'>
          <div className='col-md-2 d-flex justify-content-center align-items-center'>
          <img src='./flower.jpg' className='shadow img-fluid mt-3' alt='Image' />
          </div>
          <div className='col-md-8 col-12'>
            <img src='./5.jpeg' className='shadow card img-fluid' alt='Image' style={{width:'inherit'}}/>
          </div>
          <div className='col-md-2 d-flex justify-content-center align-items-center'>
          <img src='./phool.png' className='shadow img-fluid mt-3' alt='Image' />
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col-md-9 order-md-1 order-1'>
            <h3 className='colorBlue' style={{ borderBottom: '3px solid orange' }}>About Us</h3>
            <p>
              The first 3-5 years of your child's life are the formative years & most important in your child's development.​ This is the stage when they begin to form 'meaningful' connection to the world in which they live.</p>

            <p>The important five development areas of your child are : -
              <br />
              <ul class="attractive-list">
                <li class="list-item">Physical development</li>
                <li class="list-item">Creative development</li>
                <li class="list-item">Mathematical development</li>
                <li class="list-item">Personality development</li>
                <li class="list-item">Knowledge of the world</li>
              </ul>

            </p>
            <p>
              At Ramayana, our aim is to educate the tint-tots through active exploration and experience of his/her environment and learning activities.  We lay the foundation for basic scale of listing, speaking, reading & writing English for basic concept of numeracy & social as well as creative scales thus preparing your tiny tots for primary grades.
            </p>

            <p>
              We have designed the learning program as per a child's pace of development. So we have three phases of learning -
              <br />
              <ol>
                <li>Pre-Nursery (2 to 3) years</li>
                <li>Nursery (3 to 4)years</li>
                <li>Kindergarten - Junior KG-I(above 4 years) & Senior KG-II(above 5 years)</li>
              </ol>
            </p>








          </div>
          <div className='col-md-3 order-md-2 order-2'>
            <div className='mt-5 card'>
              <h3 className='text-center mt-2 mb-2 colorBlue orangeBottomBorder'>Aim & Achievements</h3>
              <p className='mx-3 mt-2'>
                The Aim of Ramayana Foundation School is to quicken the natural development of tiny-tots through an organized, systematic, child centric program of learning. Our focus is on the holistic formation of your child by way of providing modern teaching aids.
              </p>

              <span className='mx-3 mb-2'> Our Achievements -</span>
              <ul>
                <li cl>In a very short period, Ramayana Foundation School has made its own place amongst other renowned Foundation Schools.</li>
                <li>Excellent results in admission to renowned schools of Bhopal.</li>
              </ul>



            </div>

          </div>
        </div>
      </div>
      <p className="text-center mt-5">Copyright © {currentYear} Ramayana Foundation School</p>
    </div>
  )
}

export default AboutUs