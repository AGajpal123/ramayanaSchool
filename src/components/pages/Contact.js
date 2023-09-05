import React from 'react'
import Header from '../layouts/Header'

const Contact = () => {
  return (
    <div><Header />
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
              <h2 class="heading-section colorBlue">''</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="wrapper">
                <div class="row mb-0">
                  <div class="col-md-4">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-map-marker"></span>
                      </div>
                      <div class="text">
                        <p><span style={{fontWeight:'bold'}}>Address: </span> Principal - Ms. Kanchan Thakral

                          "Om Bhawan"

                          71/F, Sector-1, Shakti Nagar, Bhopal-24</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-phone"></span>
                      </div>
                      <div class="text">
                        <p><span style={{fontWeight:'bold'}}>Contact No: </span> <a href="tel://1234567920">0755 - 2452444</a></p>
                       


                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-phone"></span>
                      </div>
                      <div class="text">

                        <p><span style={{fontWeight:'bold'}}>Mobile : </span> <a href="tel://1234567920">9827391101</a></p>


                      </div>
                    </div>
                  </div>
                  {/* <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-paper-plane"></span>
                      </div>
                      <div class="text">
                        <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                      </div>
                    </div>
                  </div> */}
                  {/* <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-globe"></span>
                      </div>
                      <div class="text">
                        <p><span>Website</span> <a href="#">yoursite.com</a></p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div class="row no-gutters">
                  <div class="col-md-7">
                    <div class="contact-wrap w-100 p-md-5 p-4">
                      <h3 class="mb-4 colorBlue orangeBottomBorder">Contact Us</h3>
                      <div id="form-message-warning" class="mb-4"></div>
                      <div id="form-message-success" class="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="label" for="name">Full Name</label>
                              <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="label" for="email">Email Address</label>
                              <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="label" for="subject">Subject</label>
                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="label" for="#">Message</label>
                              <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input type="submit" value="Send Message" className='btn primary btnHover'  
                              style={{backgroundColor:'#005391',color:'white'}}/>
                              <div class="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-5 d-flex align-items-stretch">
                    {/* <div class="info-wrap w-100 p-5 img" style="background-image: url(images/img.jpg);">
			          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact