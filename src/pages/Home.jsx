import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Home.css';

const Home = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
    return (
      <div>
        <header>
          <img src='./images/logoo.png'/>
          <nav ref={navRef}>
            <a href='#'>Home</a>
            <a href='#about'>About Us</a>
            <a href='#wcu'>Why Choose Us?</a>
            <a href='#contact'>Contact</a>
            <FontAwesomeIcon icon={faTimes} className='nav-btn nav-close-btn' onClick={showNavBar}/>
            <a className="login-but" id="login-but" href="/register">Register</a>

          </nav>
          <FontAwesomeIcon icon={faBars} className='nav-btn' onClick={showNavBar} />
        </header>
  
        <div className="home">
          <div className="gradient"></div>
          <div className="main-home">
            <div className="home-inner-content">
            </div>
  
            <div className="home-inner-content">
            <img src='images/cover.png' className='cover'/>
              <div className="home-text-content">
                <h1>Welcome to </h1>
                <h1>Water on Wheels </h1>
                <p>Get Fresh, Clean Water </p>
                  <p>Delivered Straight To Your Door</p>
                <a href="/register"> Order Now</a>
                
              </div>
            </div>
          </div>
        </div>
  
        <div id="about" className="about">
          <div className="main-about">
            <div className="about-content">
              <div className="about-inner-content">
                <img src="images/about.png" alt="about" />
              </div>
  
              <div className="about-content">
                <div className="about-inner-content">
                  <div className="about-text-content">
                    <h1>About Us</h1>
                    <p>At Water On Wheels, we ensure that everyone has access to clean, refreshing water whenever they need it. Whether you're a homeowner topping off your pool before a summer barbeque, a contractor needing a reliable source for a construction project, or a business ensuring your daily operations run smoothly, Water On Wheels is here to keep the lifeblood flowing.</p>
  
                    <p>We believe in quality that goes beyond convenience. We source our water from trusted providers who adhere to the strictest safety and quality standards. Every tank that leaves our facility is filled with crystal-clear, refreshing water you can trust for your family, your projects, and your peace of mind.</p>
  
                    <p>So, if you're tired of running low on water at the most inconvenient times, or simply want a reliable partner to keep your hydration needs covered, look no further than Water On Wheels. We're here to deliver more than just water – we deliver peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div id="wcu" className="wcu">
          <div className="main-wcu">
            <div className="wcu-content">
              <div className="wcu-inner-content">
                <img src="images/choose.png" alt="wcu" />
              </div>
  
              <div className="wcu-content">
                <div className="wcu-inner-content">
                  <div className="wcu-text-content">
                    <h1>Why Choose Us?</h1>
                    <p>Here's why you should choose us for all your water tank truck delivery needs:
                      <li><span>Crystal Clear Quality:</span> We take pride in delivering the highest quality drinking water. Our water undergoes rigorous testing to ensure it meets all safety and purity standards.</li>
                      <li><span>Dependable Deliveries:</span> You can count on us! We offer prompt and efficient scheduling, so you'll never be left high and dry. Our experienced drivers ensure timely deliveries, wherever you need them.</li>
                      <li><span>Flexible Service:</span> Whether you need a one-time delivery for a construction project or a regular top-up for your pool, we can customize a plan to fit your needs. We offer a variety of tank sizes to accommodate any size job.</li>
                      <li><span>Competitive Prices:</span> We believe everyone deserves access to clean, affordable water. That's why we offer competitive pricing without compromising on quality or service.</li>
                      <li><span>Exceptional Customer Support:</span> Our friendly and knowledgeable staff is always here to answer your questions and help you choose the right water delivery solution.</li></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div id="contact" className="contact">
          <div className="main-contact">
            <div className="contact-content">
              <h1>Contact Us</h1>
              <p>Questions? We're here to help! Contact us today.</p>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;