import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import qclogo from '../assets/aclogo1.png';
import qclogonslogan from '../assets/logonslogan.png';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/story', label: 'Our Story' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/terms', label: 'Terms and Conditions' },
    { path: '/book', label: 'Book Online' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center m-0 p-0">
          <img src={qclogo} alt='qclogo' style={{ height: '50px', width: 'auto', maxHeight: '50px' }} />
          <img src={qclogonslogan} alt='qc logo slogan' className="ms-2" style={{ height: '45px', width: 'auto', maxWidth: '250px', maxHeight: '45px' }} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'text-danger fw-bold' : 'text-dark'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;