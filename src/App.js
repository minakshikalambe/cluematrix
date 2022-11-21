import React from 'react';
import './App.css';
import logo from './images/Screenshot (58).png';
import logo1 from './images/Screenshot (61).png';
import logo2 from './images/Screenshot (59).png';
import construction_logo from './images/Screenshot (63).png';
import truck_logo from './images/Screenshot (64).png';
import book_logo from './images/Screenshot (65).png';
import profile1 from './images/Screenshot (81).png';
import profile2 from './images/Screenshot (82).png';
import profile3 from './images/Screenshot (83).png';
import profile4 from './images/Screenshot (84).png';
import profile5 from './images/Screenshot (85).png';
import profile6 from './images/Screenshot (89).png';
import profile7 from './images/Screenshot (90).png';
import profile8 from './images/Screenshot (91).png';
import profile9 from './images/Screenshot (92).png';
import profile10 from './images/Screenshot (93).png';
import profile11 from './images/Screenshot (94).png';
import profile12 from './images/Screenshot (96).png';
import profile13 from './images/Screenshot (97).png';
import profile14 from './images/Screenshot (98).png';
import profile15 from './images/Screenshot (99).png';
import profile16 from './images/Screenshot (113).png';
import profile17 from './images/Screenshot (114).png';
import profile18 from './images/Screenshot (115).png';
import profile19 from './images/Screenshot (116).png';
import profile20 from './images/Screenshot (117).png';
import profile21 from './images/Screenshot (120).png';
import profile22 from './images/Screenshot (121).png';
import profile23 from './images/Screenshot (123).png';
import profile24 from './images/Screenshot (124).png';
import profile25 from './images/Screenshot (125).png';
import profile26 from './images/Screenshot (126).png';
import Carousel from "react-elastic-carousel";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];
const breakPoints1 = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2 },
];
const breakPoints2 = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];
function App() {
  var arr=[profile16,profile17,profile18,profile19,profile20]
  return (
    <div className="App">
    <div className='appContainer1'  style={{backgroundImage: `url("https://d3ib4ot6oar1ep.cloudfront.net/640/50/webp/load_bg_desktop_v1.jpg")`, backgroundRepeat: 'no-repeat', width: '100%', height: '630px',backgroundSize: 'cover'}}> 
    <div className='appContainer1_sub1'>
    <div className='logoimg'><img src={logo}/>
    </div>
    <div></div>
    <div className='dropdown'>
    <button class="dropbtn">services <i class="fa fa-caret-down"></i></button>
  <div class="dropdown-content">
    <a href="#">Online Load Booking</a>
    <a href="#">Online Lorry Booking</a>
    <a href="#">Grow Network</a>
    <a href="#">Logistics Services</a>
    <a href="#">Full Truck Load</a>
    <a href="#">Part Load Booking</a>
    <a href="#">Forum</a>
    <a href="#">Business Card</a>
  </div>
    </div>
    <div className='market_div'>MarketPlace</div>
    <div className='market_div'>Transport Directory</div>
    <div className='dropdown'>
    <button class="dropbtn">Meet Vahak <i class="fa fa-caret-down"></i></button>
  <div class="dropdown-content">
    <a href="#">About Us</a>
    <a href="#">How Vahak Helps</a>
    <a href="#">Why Choose Us</a>
    <a href="#">Careers</a>
    <a href='#'>Contact Us</a>
  </div>
  </div>
  <div className='market_div'>Blogs</div>
    <div className='login_singin'><button class="dropbtn1">Login/Signup</button></div>
    <div className='premium'><img src={logo1}/></div>
    </div> 
    <div className='appContainer1_sub2'>
      <div className='appContainer1_sub2_div1'>
        <h1 className='book_truck'>Book a truck load in your location</h1>
        <h2>Get the best rate for your truck and find return loads easily</h2>
        <div className='liveLoad_Main'>
          <div className='liveLoad_Main_sub1'><p>Live Load Market</p></div>
          <div className='liveLoad_Main_sub2'><p>Live Lorry Market</p></div>
        </div>
        <div className='pickup_main'>
          <div className='pickup_main_sub1'>
            <h5>PICKUP LOCATION</h5>
            <h3>Nagpur, Maharashtra</h3>
          </div>
          <div className='pickup_main_sub2'>
            <h5>DROP LOCATION</h5>
            <h3>Enter your Drop location</h3>
          </div>
          <div className='pickup_main_sub3'>
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className='appContainer1_sub2_div2'><img src="https://d3ib4ot6oar1ep.cloudfront.net/640/75/webp/truck_load_owner.png"/></div>
    </div>
    </div>
    <div className='appContainer2'>
      <h2>What can we do for you?</h2>
      <div className='appContainer2_sub'>
        <div className='appContainer2_sub1'>
          <div className="appContainer2_sub1_sub1">
            <h4>Find loads near you</h4>
            <h5>Choose from 10,000+ loads in preferred routes</h5>
            <p>Search Loads <span>&#129170;</span></p>
            </div>
          <div className="appContainer2_sub1_sub2">
            <img src={construction_logo}/>
          </div>
        </div>
        <div className='appContainer2_sub2'>
        <div className="appContainer2_sub1_sub1">
            <h4>Find trucks near you</h4>
            <h5>Book trucks posted by Aadhaar verified Transporters</h5>
            <p>Search Lorries <span>&#129170;</span></p>
            </div>
          <div className="appContainer2_sub1_sub2">
            <img src={truck_logo}/>
          </div>
        </div>
        <div className='appContainer2_sub3'>
        <div className="appContainer2_sub1_sub1">
            <h4>Grow your transport network</h4>
            <h5>Connect with top transport services providers through our transport directory</h5>
            <p>Search Lorries <span>&#129170;</span></p>
            </div>
          <div className="appContainer2_sub1_sub2">
            <img src={book_logo}/>
          </div>
        </div>
      </div>
    </div>
    <div className='meetIndia'>
      <div className='meetIndia_sub1'>
        <h3>Meet India's top transport services providers</h3>
      </div >
      <div className='meetIndia_sub2'>
        <div className='allIndia'>All India</div>
        <div className='trailers'>Bengaluru</div>
        <div className='trailers'>Mumbai</div>
        <div className='trailers'>chennai</div>
        <div className='trailers'>Delhi</div>
      </div>
      <div className='meetIndia_sub3'>
        <button className='container_load'>View Full List/See More</button>
      </div>
    </div>
    <div className='slider'>
    <Carousel breakPoints={breakPoints}>
          <div className='carousel_div'><img src={profile1}/></div>
          <div className='carousel_div'><img src={profile2}/></div>
          <div className='carousel_div'><img src={profile3}/></div>
          <div className='carousel_div'><img src={profile4}/></div>
          <div className='carousel_div'><img src={profile5}/></div>
          <div className='carousel_div'><img src={profile1}/></div>
          <div className='carousel_div'><img src={profile2}/></div>
          <div className='carousel_div'><img src={profile3}/></div>
        </Carousel>
    </div>
    <div className='meetIndia2'>
      <div className='meetIndia_sub1'>
        <h3>Choose truck type</h3>
      </div >
      <div className='meetIndia_sub2'>
        <div className='allIndia'>All India</div>
        <div className='trailers'>Trailers</div>
        <div className='trailers'>Trucks</div>
        <div className='trailers'>HYVAs</div>
        <div className='trailers'>LCVs</div>
        <div className='trailers'>Tankers</div>
      </div>
      <div className='meetIndia_sub3'>
        <button className='container_load'>View all Container Loads</button>
      </div>
    </div>
    <div className='slider1'>
    <Carousel breakPoints={breakPoints1}>
          <div className='carousel_div1'><img src={profile6}/></div>
          <div className='carousel_div1'><img src={profile7}/></div>
          <div className='carousel_div1'><img src={profile8}/></div>
          <div className='carousel_div1'><img src={profile9}/></div>
          <div className='carousel_div1'><img src={profile10}/></div>
          <div className='carousel_div1'><img src={profile11}/></div>
          <div className='carousel_div1'><img src={profile6}/></div>
          <div className='carousel_div1'><img src={profile7}/></div>
        </Carousel>
    </div>
    <div className='trust_vahak'>
      <h1>Trust Vahak to get the job done!</h1>
      <h6>We deliver a seamless logistics experience</h6>
      <div className='trust_vahak_sub'>
        <div><img src={profile12}/></div>
        <div><img src={profile13}/></div>
        <div><img src={profile14}/></div>
        <div><img src={profile15}/></div>
      </div>
    </div>
    <div className='onlineTransport'>
      <h1>We're India's favourite online transport marketplace</h1>
      <h6>See what our customers say about us</h6>
      <div className='onlineTransport_sub'>
      <Slide>
            {arr.map((slideImage, index) => (
              <div className='each-slide' key={index}>
                <img src={slideImage} alt='' />
              </div>
            ))}
          </Slide>
      </div>
      </div>
      <div className='vahak_news'>
      <h1>Vahak in the news</h1>
      <h6>See us through the media lens</h6>
      <div className='vahak_news_sub'>
      <Carousel breakPoints={breakPoints2}>
          <div className='carousel_div2'><img src={profile21}/></div>
          <div className='carousel_div2'><img src={profile22}/></div>
        </Carousel>
      </div>
     
    </div>
    <div className='footer'>
      <div className='footer_sub'>
        <img src={profile23} className="footer_sub_img1"/>
        <h6>Book trucks, trailers, containers from thousands of trusted transport businesses and lorry owners all across India.</h6>
        <img src={profile24} className="footer_sub_img2"/>
      </div>
      <div className='footer_sub2'><img src={profile25}/></div>
      <div className='footer_sub3'><img src={profile26}/></div>
    </div>
    </div>
  );
}

export default App;
