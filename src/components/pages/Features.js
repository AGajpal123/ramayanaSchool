import React from 'react'
import Header from '../layouts/Header'
import { FaStar } from 'react-icons/fa';

const Features = () => {
  const currentYear = new Date().getFullYear();
  const gradientList = [{
    name: 'Colourful and comfortable class rooms for proper learning',
  }, {
    name: 'All rooms are airy and well lit'
  }, {
    name: 'Water filtered through RO filter will be provided to the tiny-tots'
  }, {
    name: 'A small gym for tiny tots for physical development'
  }, {
    name: 'Audio-Visual room for developing participatory and communication skills'
  }, {
    name: 'Individual attention given to every child'
  }, {
    name: 'Splash pool for pleasure'
  }, {
    name: 'Activity room for various learning activities like fun station, slides, etc'
  }, {
    name: 'On demand Transport facility'
  }]
  const ourSelection = [{
    name: 'Delhi Public School',
  }, {
    name: 'Carmel Convent'
  }, {
    name: 'St Joseph\'s Convent'
  }, {
    name: 'Campion School'
  }, {
    name: 'Jawaharlal Nehru School'
  }, {
    name: 'Mount Carmel'
  }, {
    name: 'Sanskar Valley'
  }]

  return (
    <div><Header />
      <div className='mx-5 mt-5'>
        <div className='row mt-3 justify-content-center align-items-center'>
          <div class="container mt-4 marginTopResponsive" style={{textAlign:'center'}}>
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-6 col-12 images-css">
                <img src="./11.png" alt="Image 1" className="img-fluid mb-2" />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-6 col-12 images-css">
                <img src="./22.png" alt="Image 2" className="img-fluid mb-2" />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-6 col-12 images-css">
                <img src="./33.png" alt="Image 3" className="img-fluid mb-2" />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-6 col-12 images-css">
                <img src="./44.png" alt="Image 4" className="img-fluid mb-2" />
              </div>
            </div>
          </div>

        </div>
        <div className='row mt-3 mb-3'>
          <div className='col-md-9 order-md-1 order-1'>
            <h3 className='colorBlue' style={{ borderBottom: '3px solid orange' }}>Our Unique Features</h3>

            <ol className='gradient-list'>
              {gradientList.map((list, index) => (
                <li>{list.name}</li>
              ))}





            </ol>





          </div>
          <div className='col-md-3 order-md-2 order-2'>
            <div className='mt-5 card' style={{ background: 'aliceblue' }}>
              <h3 className='text-center mt-2 mb-3 colorBlue orangeBottomBorder'>Our Selections</h3>
              <ul>
                {ourSelection.map((school, index) => (
                  <li className='mb-2' style={{ listStyleType: 'none' }}>
                    <FaStar className='mx-3' />{school.name}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      <p className="text-center mt-5">Copyright © {currentYear} Ramayana Foundation School</p>
    </div>

  )
}

export default Features