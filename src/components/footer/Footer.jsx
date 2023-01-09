import "./Footer.css"
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>

          <div className="d-flex justify-content-around align-items-center wrapper">
            <div className="footer-about">
              <h5 style={{color:'#ffffff'}}>Rahul Services</h5>
              <p style={{color:'#ffffff'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            
            <div className="footer-social">
              <h4 style={{color:'#ffffff'}}>Follow Us</h4>
              <div className="footer-social--icons d-flex justify-content-around">
                <div>
                  <FaDiscord style={{color:'#ffffff'}} className="icons" />
                </div>
                <div>
                  <FaInstagram style={{color:'#ffffff'}} className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube style={{color:'#ffffff'}} className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h5 style={{color:'#ffffff'}}>Call Us</h5>
              <h5 style={{color:'#ffffff'}}>+91 12345678978</h5>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container d-flex justify-content-around align-items-center  ">
              <p style={{color:'#ffffff'}}>
                @{new Date().getFullYear()} Rahul. All Rights Reserved
              </p>
              <div>
                <p style={{color:'#ffffff',fontSize:'small'}}>PRIVACY POLICY</p>
                <p style={{color:'#ffffff',fontSize:'small'}}>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Footer