import React from 'react';
import { Link } from 'react-router-dom';
import qclogowhite from '../assets/qcfavicon.png';
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="text-white">
                <img src={qclogowhite} alt='qc logo' />
              </div>
              <span className="fw-bold fs-4">Qualisha Creations</span>
            </div>
            <p className="text-light mb-4">
              Creating beautiful, memorable events with personalized decor and exceptional service.
              Let us help make your special occasions truly unforgettable.
            </p>
            <div className="d-flex gap-3">
              <a href='https://www.instagram.com/qualishacreations/' target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href='https://www.tiktok.com/@qualisha.creations' target="_blank" rel="noopener noreferrer">
                <IoLogoTiktok size={30} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/gallery" className="text-light text-decoration-none">Gallery</Link></li>
              <li><Link to="/book" className="text-light text-decoration-none">Book Online</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled text-light">
              <li className="mb-2">📞 078 869 2460</li>
              <li className="mb-2">✉️ events@qualishacreations.com</li>
            </ul>
          </div>
        </div>

        <hr className="bg-light" />
        <div className="text-center text-light">
          <p>&copy; 2023 Qualisha Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;