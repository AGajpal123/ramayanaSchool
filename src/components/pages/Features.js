import React from 'react'
import Header from '../layouts/Header'

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
          <div className='col-md-12 mt-3'>
            {/* <img src='./5.jpeg' className='shadow card img-fluid' alt='Image' /> */}
            <div class="image-grid">
              <div class="image-item">
                <img src="./11.png" alt="Image 1"/>
              </div>
              <div class="image-item">
                <img src="./22.png" alt="Image 2"/>
              </div>
              <div class="image-item">
                <img src="./33.png" alt="Image 3"/>
              </div>
              <div class="image-item">
                <img src="./44.png" alt="Image 4"/>
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
            <div className='mt-5 card'>
              <h3 className='text-center mt-2 mb-2 colorBlue orangeBottomBorder'>Our Selections</h3>
              <ul>
                {ourSelection.map((school, index) => (
                  <li className='mb-2'>{school.name}</li>
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