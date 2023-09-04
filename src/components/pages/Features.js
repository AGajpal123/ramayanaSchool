import React from 'react'
import Header from '../layouts/Header'

const Features = () => {
  return (
    <div><Header />
      <div className='mx-5'>
        <div className='row mt-3 justify-content-center align-items-center'>
          <div className='col-md-8'>
            <img src='./5.jpeg' className='shadow card img-fluid' alt='Image' />
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col-md-9 order-md-1 order-1'>
            <h3 className='colorBlue' style={{ borderBottom: '3px solid orange' }}>Our Unique Features</h3>
            <ol>
              <li> Colourful and comfortable class rooms for proper learning.​</li>
              <li>All rooms are airy and well lit.​</li>
              <li>Water filtered through RO filter will be provided to the tiny-tots.</li>
              <li>A small gym for tiny tots for physical development.​</li>
              <li>Audio-Visual room for developing participatory and communication skills.​</li>
              <li>Individual attention given to every child.​</li>
              <li>Splash pool for pleasure.​</li>
              <li>Activity room for various learning activities like fun station, slides, etc.</li>
              <li> On demand Transport facility.</li>





            </ol>





          </div>
          <div className='col-md-3 order-md-2 order-2'>
            <div className='mt-5 card'>
              <h3 className='text-center mt-2 mb-2 colorBlue orangeBottomBorder'>Our Selections</h3>
              <ul>
                <li>Delhi Public School</li>
                <li>Carmel Convent</li>
                <li> St Joseph's Convent</li>
                <li>Campion School</li>
                <li>Jawaharlal Nehru School</li>
                <li>Mount Carmel</li>
                <li>Sanskar Valley</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Features