import React from 'react';
import Header from '../layouts/Header';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaGraduationCap, FaStar, FaCheck, FaCalendar, FaDoorOpen, FaSchool } from 'react-icons/fa';

const Home = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const imageSources = [
    {
      imgeName: "1.jpeg",
      caption: 'Friendship Day Celebration',
    },
    {
      imgeName: "2.jpeg",
      caption: 'Watermelon Day Celebration',
    },
    {
      imgeName: "3.jpeg",
      caption: 'Yellow Day Celebration',
    },
    {
      imgeName: "4.jpeg",
      caption: 'Navratri Celebration',
    },
  ];

  const cards = [
    {
      heading: 'About Us',
      color: 'rgb(255, 255, 200)',
      para: 'We are deeply committed to mold tiny-tots to be intellectually competent, spiritually mature & morally upright.',
      path: '/aboutUs',
      icon: 'info'
    },
    {
      heading: 'Learning Programs',
      color: 'rgb(200, 255, 230)',
      path: '/aboutUs',
      icon: 'graduationCap',
      para: "We have designed the learning program as per a child's pace of development. Hence we classified the learning into three phases.",
    },
    {
      heading: 'Features',
      path: '/features',
      color: 'rgb(220, 235, 255)',
      icon: 'star',
      para: 'Salient Features of Ramayana Foundation School.',
    },
    {
      heading: `Admissions Open for session ${currentYear} - ${currentYear + 1}`,
      color: 'rgb(255, 230, 200)',
      path: '/contact',
      icon: 'open',
      para: `Admissions are open for session ${currentYear} - ${currentYear + 1}. For inquiries & registration, contact us.`,
    },
  ];

  const displayCardIcon = (icon) => {
    switch (icon) {
      case 'open':
        return <FaDoorOpen className="card-icon"/>;
      case 'star':
        return <FaStar className="card-icon"/>;
      case 'graduationCap':
        return <FaSchool className="card-icon"/>
      case 'info':
        return <FaInfoCircle className="card-icon"/>
    }
  }

  const onNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="carousel-background">
      <Header />
      {/* Carousel */}
      <div>
        <img
          src="./banner.png"
          alt="Background Image"
          className="background-image-behind-crousal"
        />
        <div className="carousel-container mx-auto mt-5" >
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {imageSources.map((_, index) => (
                <li
                  key={index}
                  data-target="#carouselExampleIndicators"
                  data-slide-to={index}
                  className={index === 0 ? "active" : ""}
                ></li>
              ))}
            </ol>
            <div className='paddingTopVisibility'>
            <div className="carousel-inner">
              {imageSources.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <img
                    className="d-block mx-auto img-fluid card images-css"
                    src={src.imgeName}
                    alt={`Slide ${index + 1}`}
                    style={{
                      maxHeight: '100%', maxWidth: '100%',
                    }}
                  />
                  <div className="carousel-caption d-none d-md-block custom-caption">
                    <div className="custom-caption-content m-auto w-50">
                      <h5
                        style={{
                          backgroundColor: 'white',
                          boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
                          padding: '8px',
                          borderRadius: '4px',
                          color: 'black',
                        }}
                      >
                        {src.caption.toUpperCase()}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
        </div>
      </div>

      {/* Cards */}
      <div className="container mt-4 mb-5">
  <div className="row d-flex">
    {cards.map((cardItem, index) => (
      <div className="col-md-3 mb-3 flex-fill" key={index}>
        <div className="card h-100 mt-1 mb-1 mx-1" style={{ backgroundColor: cardItem.color }}>
          <div className="card-body">
            {displayCardIcon(cardItem.icon)}
            <h5 className="card-title orangeBottomBorder">{cardItem.heading}</h5>
            <p className="card-text">{cardItem.para}</p>
            <button className="capsule-button" onClick={() => onNavigation(cardItem.path)}>
              Read More
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      <p className="text-center">Copyright © {currentYear} Ramayana Foundation School</p>
    </div>
  );
};

export default Home;
