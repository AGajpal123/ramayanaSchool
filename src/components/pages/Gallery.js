import React, { useState } from 'react';
import Header from '../layouts/Header';
import Modal from 'react-modal';

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalIsOpen(true);
  };


  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  const modalStyles = {
    content: {
      maxWidth: '90%', // Set a maximum width for the modal content
      margin: 'auto', // Center the modal horizontally
    },
    closeButton: {
      position: 'absolute',
      top: 0,
      right: 0,
      margin: '1rem',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
  };

  const images = [
    { imgName: './g1.jpeg', caption: 'Holi Celebration' },
    { imgName: './g2.jpeg', caption: 'Racing Competition' },
    { imgName: './g3.jpeg', caption: 'Exercise Sessions' },
    { imgName: './g4.jpeg', caption: 'Fancy Dress Competition' },
    { imgName: './g5.jpeg', caption: 'Art and Craft Activity' },
    { imgName: './g6.jpeg', caption: 'Handprint Activity' },
    { imgName: './g7.jpeg', caption: 'Drawing Class' },
    { imgName: './g8.jpeg', caption: 'Teacher\'s Day Celebration' },
    { imgName: './g9.jpeg', caption: 'Purple Day Celebration' },
    { imgName: './1.jpeg', caption: 'Friendship Day Celebration' },
    { imgName: './2.jpeg', caption: 'Watermelon Day Celebration' },
    { imgName: './3.jpeg', caption: 'Yellow Day Celebration' },
    { imgName: './4.jpeg', caption: 'Navratri Celebration' },
    { imgName: './g10.jpeg', caption: 'Christmas Celebration' },
    // { imgName: './g11.jpeg' , caption : 'Picnic' },
    // { imgName: './g12.jpeg' , caption : 'Birthday Celebration' },
    { imgName: './g13.jpeg', caption: 'Beach Day Celebration' },
  ];

  const renderImageCard = (img, index) => (
    <div key={index} className='col-md-4 mb-3'>
      <div className='card mt-5' onClick={() => openModal(img)}>
        <img src={img.imgName} className='card-img-top' alt={`Image ${index + 1}`} />
        <div className='card-body'>
          <p className='card-text text-center' style={{ fontWeight: 'bold' }}>{img.caption}</p>
        </div>
      </div>
    </div>
  )



  return (
    <div>
      <Header />
      <div className='row col-md-12' style={{ marginTop: '4.5rem!important' }}>
        {images.map((img, index) => renderImageCard(img, index))}
      </div>

      {/* Modal for displaying the selected image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Image Modal'
        ariaHideApp={false} // Prevents a warning in some environments
        style={modalStyles}
      >
        {selectedImage && (
          <div>
            <div className='mt-3'>
              <button onClick={closeModal} style={modalStyles.closeButton} >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
              </button>
            </div>
            <div className='mt-4'>
              <img src={selectedImage.imgName} alt={selectedImage.caption}
                style={{ maxWidth: '100%', height: 'auto' }} className='mx-5' />
              <p className='text-center mt-3' style={{ fontWeight: 'bold' }}>{selectedImage.caption}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
