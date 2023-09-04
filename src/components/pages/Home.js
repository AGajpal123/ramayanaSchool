import React from 'react'
import Header from '../layouts/Header'

const Home = () => {
  
  const currentYear = new Date().getFullYear() ;

  const imageSources = [
    {
      imgeName: "1.jpeg",
      caption: 'Friendship Day Celebration'
    },
    {
      imgeName: "2.jpeg",
      caption: 'Watermelon Day Celebration'
    },
    {
      imgeName: "3.jpeg",
      caption: 'Yellow Day Celebration'
    },
    {
      imgeName: "4.jpeg",
      caption: 'Navratri Celebration'
    }];

  const cards = [{
    heading: 'About Us',
    color : 'rgb(255, 255, 200)',
    para: 'We are deeply committed to mold tiny-tots to be intellectually competent, spiritually mature & morally upright.'
  },
  {
    heading: 'Learning Programs',
    color : 'rgb(200, 255, 230)',
    para: 'We have designed the learning program as per a child\'s pace of development. Hence we classified the learning into three phases.'
  },
  {
    heading: 'Features',
    color : 'rgb(220, 235, 255)',
    para: 'Salient Features of Ramayana Foundation School.'
  }, {
    heading: `Admissions Open for session ${currentYear} - ${currentYear+1}`,
    color : 'rgb(255, 230, 200)',
    para: `Admissions are open for session ${currentYear} - ${currentYear+1}. For inquiries & registration, contact us.`
  }]

  
  return (
    <div>
      <Header />
      {/* Crousal */}
      <div id="carouselExampleIndicators" className="carousel slide mx-5 mt-3" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {imageSources.map((src, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img className="d-block w-100" src={src.imgeName} alt={`Slide ${index + 1}`} />
              <div className="carousel-caption d-none d-md-block custom-caption">
                <div className='custom-caption-content'>
                  <h5 style={{
                    backgroundColor: 'white',
                    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
                    padding: '8px', borderRadius: '4px',
                    color: 'black'
                  }}>
                    {(src.caption).toUpperCase()}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* cards */}
      <div className="container mt-3 mb-5">
        <div className="row d-flex">
          {cards.map((cardItem, index) => (
            <div className="col-md-3 mb-3 flex-fill"  key={index} >
              <div className="card h-100 mt-1 mb-1 mx-1" style={{backgroundColor:cardItem.color}}>
                <div className="card-body">
                  <h5 className="card-title">{cardItem.heading}</h5>
                  <p className="card-text">{cardItem.para}</p>
                  <button className='capsule-button'>Read More</button>
                </div>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home