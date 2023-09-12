import React from 'react'
import Header from '../layouts/Header'

const AboutUs = () => {
  const currentYear = new Date().getFullYear();
  const programs = [{
    name: 'Pre-Nursery',
    bgColor : '#E26262',
    color : 'white',
    img : './pschool.jpg',
    text : '(2 to 3) years'
  }, {
    name: 'Nursery',
    bgColor : '#FBD15B',
    color : 'black',
    img : './prenursery.jpg',
    text : '(3 to 4) years'
  }, {
    name: 'Kindergarten',
    bgColor : '#00715D',
    color : 'white',
    img : './kindergarten.jpg',
    text : 'Junior KG-I (above 4 years) & Senior KG-II (above 5 years)'
  }]
  return (
    <div>
      <Header />
      <div className='mx-5 mt-5'>
        <div className='row mt-5 justify-content-center align-items-center'>
          <div className='col-md-2 d-flex justify-content-center align-items-center'>
            <img src='./flower.jpg' className='shadow img-fluid mt-3 image' alt='flower.jpg' />
          </div>
          <div className='col-md-8 col-12 images-css'>
            <img src='./5.jpeg' className='shadow card img-fluid' alt='5.jpeg' style={{ width: 'inherit' }} />
          </div>
          <div className='col-md-2 d-flex justify-content-center align-items-center'>
            <img src='./phool.png' className='shadow img-fluid mt-3 image' alt='phool.png' />
          </div>
        </div>
        <div className='row mt-1 mb-3'>
          <div className='col-md-9 order-md-1 order-1'>
            <h3 className='colorBlue' style={{ borderBottom: '3px solid orange' }}>About Us</h3>
            <p>
              The first 3-5 years of your child's life are the formative years & most important in your child's development.​ This is the stage when they begin to form 'meaningful' connection to the world in which they live.</p>

            <p>The important five development areas of your child are : - </p>
            <ul className="attractive-list">
              <li className="list-item">Physical development</li>
              <li className="list-item">Creative development</li>
              <li className="list-item">Mathematical development</li>
              <li className="list-item">Personality development</li>
              <li className="list-item">Knowledge of the world</li>
            </ul>


            <p>
              At Ramayana, our aim is to educate the tint-tots through active exploration and experience of his/her environment and learning activities.  We lay the foundation for basic scale of listing, speaking, reading & writing English for basic concept of numeracy & social as well as creative scales thus preparing your tiny tots for primary grades.
            </p>


            We have designed the learning program as per a child's pace of development. So we have three phases of learning -
          

            <div className="container mt-2">
              <div className="row">
                {programs.map((program, index) => (
                  <div className="col-md-4 mb-2">
                    <div className="card h-100">
                      <img src={program.img} className='img-fluid' alt={program.name} />
                      <div className="card-body" style={{ backgroundColor: program.bgColor, color: program.color }}>
                        <h3 className='h-3-heading-css'>{program.name}</h3>
                       
                          <b>Age Group : </b> {program.text}
                       
                      </div>
                    </div>
                  </div>
                ))}

              
              </div>
            </div>








          </div>
          <div className='col-md-3 order-md-2 order-2'>
            <div className='mt-5 card' style={{ background: 'aliceblue' }}>
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