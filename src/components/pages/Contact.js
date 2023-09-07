import React, { useRef, useState } from 'react';
import Header from '../layouts/Header';
import { FaSearchLocation, FaPhone, FaMobile, FaClosedCaptioning, FaTimes } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [state, handleSubmit] = useForm("xpzgropl");
  const currentYear = new Date().getFullYear();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    formRef.current.reset();
    setShowSuccessMessage(true);
  }

 const toggleTimes = ()=>{
    setShowSuccessMessage(false)
  }

  const formRef = useRef(null);

  return (
    <div>
      <Header />
      <section className="ftco-section">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5 mt-4">
              <h2 className="heading-section colorBlue"></h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row mb-0">
                  <div className="col-md-4">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FaSearchLocation className='icon-css mb-2' />
                      </div>
                      <div className="text">
                        <p><span style={{ fontWeight: 'bold' }}>Address: </span> Principal - Ms. Kanchan Thakral
                          "Om Bhawan"
                          71/F, Sector-1, Shakti Nagar, Bhopal-462024</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FaPhone className='icon-css mb-2' />
                      </div>
                      <div className="text">
                        <p><span style={{ fontWeight: 'bold' }}>Contact No: </span> <a href="tel://1234567920">0755 - 2452444</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FaMobile className='icon-css mb-2' />
                      </div>
                      <div className="text">
                        <p><span style={{ fontWeight: 'bold' }}>Mobile : </span> <a href="tel://1234567920">9827391101</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100">
                      <h3 className="mb-2 colorBlue orangeBottomBorder">Contact Us</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className={`mb-2 card alert alert-success text-dark ${showSuccessMessage ? 'd-block' : 'd-none'}`}>
                        Your message was sent, thank you! <FaTimes style={{float:'right'}} onClick={toggleTimes}/>
                      </div>
                      <form ref={formRef} onSubmit={handleFormSubmit} id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name"><span style={{ color: 'red' }}>* </span>Full Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                                required
                              />
                              <ValidationError
                                prefix="name"
                                field="name"
                                errors={state.errors}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="email"><span style={{ color: 'red' }}>* </span>Email Address</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"

                                required
                              />
                              <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">Subject</label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"

                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="message">Message</label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"

                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                disabled={state.submitting}
                                className='btn primary btnHover'
                                style={{ backgroundColor: '#005391', color: 'white' }}
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <img src='./plants.jpg' className='image' style={{ maxWidth: '110%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="text-center">Copyright © {currentYear} Ramayana Foundation School</p>
    </div>
  )
}

export default Contact;
