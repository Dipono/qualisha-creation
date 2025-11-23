import React, { useState } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import qclogo from './assets/aclogo1.png'
import qclogowhite from './assets/qcfavicon.png'
import qclogonslogan from './assets/logonslogan.png'
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

import birthday from './assets/birthday.jpg'
import wedding from './assets/wedding.jpg'
import corporate from './assets/corporate.jpg'
import babyShower from './assets/babyShower.jpg'
import anniversary from './assets/anniversary.jpg'
import other from './assets/qc3.jpg'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    serviceType: '',
    location: '',
    deliveryOption: 'pickup',
    paymentOption: 'cash'
  });
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [bookingErrors, setBookingErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Sample gallery images with placeholder URLs
  const galleryImages = [
    { id: 1, src: wedding, alt: 'Wedding Decoration' },
    { id: 2, src: birthday, alt: 'Birthday Setup' },
    { id: 3, src: corporate, alt: 'Corporate Event' },
    { id: 4, src: babyShower, alt: 'Baby Shower' },
    { id: 5, src: anniversary, alt: 'Anniversary' },
    { id: 6, src: other, alt: 'Special Occasion' },
  ];

  // Services data
  const services = [
    {
      icon: '💍',
      title: 'Wedding Decor',
      description: 'Beautiful wedding setups that make your special day unforgettable with personalized themes and elegant arrangements.'
    },
    {
      icon: '🎂',
      title: 'Birthday Parties',
      description: 'Creative and fun birthday decorations tailored to all ages, from children\'s parties to milestone celebrations.'
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Professional decor for corporate functions, conferences, and business celebrations that impress clients and employees.'
    }
  ];

  // Pricing configuration
  const pricing = {
    delivery: {
      '0-10': 0,
      '11-25': 50,
      '26-50': 100,
      '51+': 150
    },
    services: {
      wedding: 1000,
      birthday: 500,
      corporate: 800,
      babyShower: 600,
      anniversary: 700,
      other: 400
    }
  };

  // Header Component
  const Header = () => {
    const navItems = [
      { key: 'home', label: 'Home' },
      { key: 'story', label: 'Our Story' },
      { key: 'gallery', label: 'Gallery' },
      { key: 'termsandconditions', label: 'Terms and Conditions' },
      { key: 'book', label: 'Book Online' },
      { key: 'contact', label: 'Contact' }
    ];

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          {/* Logo */}
          <div
            className="navbar-brand d-flex align-items-center cursor-pointer m-0 p-0"
            onClick={() => setCurrentPage('home')}
            style={{ cursor: 'pointer' }}
          >
            {/* Main Logo - Always visible */}
            <img
              src={qclogo}
              alt='qclogo'
              style={{
                height: '50px',
                width: 'auto',
                maxHeight: '50px'
              }}
            />

            {/* Slogan Logo - Responsive sizing */}
            <img
              src={qclogonslogan}
              alt='qc logo slogan'
              className="ms-2"
              style={{
                height: '45px',
                width: 'auto',
                maxWidth: '250px',
                // Responsive sizing for different screens
                maxHeight: '45px'
              }}
            />
          </div>

          {/* Mobile toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => (
                <li key={item.key} className="nav-item">
                  <button
                    className={`nav-link btn btn-link text-decoration-none ${currentPage === item.key ? 'text-danger fw-bold' : 'text-dark'
                      }`}
                    onClick={() => setCurrentPage(item.key)}
                    style={{ border: 'none', background: 'none' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  // Footer Component
  const Footer = () => {
    return (
      <footer className="bg-dark text-light pt-5 pb-3">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="text-white ">
                  {/* <span className="fw-bold">QC</span> */}
                  <img src={qclogowhite} alt='qc logo' />

                </div>
                <span className="fw-bold fs-4">Qualisha Creations</span>
              </div>
              <p className="text-light mb-4">
                Creating beautiful, memorable events with personalized decor and exceptional service.
                Let us help make your special occasions truly unforgettable.
              </p>
              <div className="d-flex gap-3">
                <a href='https://www.instagram.com/qualishacreations/' ><FaInstagram size={30} /></a>
                <a href='https://www.tiktok.com/@qualisha.creations'><IoLogoTiktok FaInstagram size={30} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><button className="btn btn-link text-light text-decoration-none p-0" onClick={() => setCurrentPage('home')}>Home</button></li>
                <li><button className="btn btn-link text-light text-decoration-none p-0" onClick={() => setCurrentPage('gallery')}>Gallery</button></li>
                <li><button className="btn btn-link text-light text-decoration-none p-0" onClick={() => setCurrentPage('book')}>Book Online</button></li>
                <li><button className="btn btn-link text-light text-decoration-none p-0" onClick={() => setCurrentPage('contact')}>Contact</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="mb-3">Contact Info</h5>
              <ul className="list-unstyled text-light">
                <li className="mb-2">📞 078 869 2460</li>
                <li className="mb-2">✉️ events@qualishacreations.com</li>
                {/* <li className="mb-2">📍 123 Event Street, City, State 12345</li>
                <li>🕒 Mon-Fri: 9AM-6PM</li> */}
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

  // Gallery Modal Component
  const GalleryModal = () => {
    if (!selectedImage) return null;

    return (
      <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.9)' }} tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close btn-close-white ms-auto"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="img-fluid rounded"
                style={{ maxHeight: '70vh' }}
              />
              <p className="text-white mt-3 fs-5">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Booking Form Functions
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (bookingErrors[name]) {
      setBookingErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateBookingForm = () => {
    const newErrors = {};

    if (!bookingFormData.name.trim()) newErrors.name = 'Name is required';
    if (!bookingFormData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(bookingFormData.email)) newErrors.email = 'Email is invalid';
    if (!bookingFormData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!bookingFormData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!bookingFormData.serviceType) newErrors.serviceType = 'Service type is required';
    if (!bookingFormData.location.trim()) newErrors.location = 'Location is required';

    setBookingErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getDeliveryPriceKey = () => {
    const locLength = bookingFormData.location.length;
    if (locLength < 10) return '0-10';
    if (locLength < 20) return '11-25';
    if (locLength < 30) return '26-50';
    return '51+';
  };

  const calculateTotal = () => {
    const serviceCost = pricing.services[bookingFormData.serviceType] || 0;
    const deliveryCost = bookingFormData.deliveryOption === 'delivery' ?
      pricing.delivery[getDeliveryPriceKey()] : 0;

    return serviceCost + deliveryCost;
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (!validateBookingForm()) return;

    setIsSubmitting(true);

    if (bookingFormData.paymentOption === 'online') {
      setShowPaymentModal(true);
    } else {
      setTimeout(() => {
        alert('Booking request submitted successfully! We will contact you soon to confirm details.');
        setIsSubmitting(false);
        setBookingFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          serviceType: '',
          location: '',
          deliveryOption: 'pickup',
          paymentOption: 'cash'
        });
      }, 2000);
    }
  };

  const handlePayment = () => {
    setTimeout(() => {
      setShowPaymentModal(false);
      alert('Payment processed successfully! Your booking is confirmed.');
      setIsSubmitting(false);
      setBookingFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        serviceType: '',
        location: '',
        deliveryOption: 'pickup',
        paymentOption: 'cash'
      });
    }, 3000);
  };

  // Contact Form Functions
  const handleContactChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setContactFormData({ name: '', email: '', message: '' });
  };

  // Modal Functions
  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Page Components
  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="bg-light py-5" style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%)' }}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-dark mb-4">
                Welcome to Qualisha Creations
              </h1>
              <p className="mb-5">
                <h5>Welcome to Qualisha Creations, where creativity meets passion! Our mission is to bring your vision to life, transforming ideas into extraordinary experiences.
                </h5>
                Qualisha Creations was born out of a deep love for creating and designing memorable events. Our story began with a simple dream: to make every moment unforgettable, no matter how big or small. Over the past year,
                we’ve grown into a brand that combines innovation and heart to create unique experiences for our clients. At Qualisha Creations, we believe in the power of creativity to bring people together. Our core values of excellence, authenticity, and connection guide everything we do. We are committed to making every project uniquely yours, down to the finest detai.
              </p>
              <button
                onClick={() => setCurrentPage('book')}
                className="btn btn-danger btn-lg px-5"
              >
                Book Your Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold text-dark">Our Services</h2>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm hover-shadow">
                  <div className="card-body text-center p-4">
                    <div className="text-danger display-6 mb-3">{service.icon}</div>
                    <h3 className="card-title h5 fw-bold text-dark mb-3">{service.title}</h3>
                    <p className="card-text text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold text-dark">Our Work</h2>
          <div className="row g-3">
            {galleryImages.slice(0, 6).map((image) => (
              <div key={image.id} className="col-md-4 col-sm-6">
                <div
                  className="card border-0 shadow-sm position-relative overflow-hidden"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="card-img-top"
                    style={{
                      height: '250px',
                      objectFit: 'cover',
                      width: '100%'
                    }}
                  />
                  {/* Remove the overlay completely or make it very subtle */}
                  <div className="card-img-overlay d-flex align-items-end justify-content-start p-3">
                    <span className="text-white bg-dark bg-opacity-50 rounded px-2 py-1 small">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => setCurrentPage('gallery')}
              className="btn btn-outline-danger"
            >
              View Full Gallery →
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  // Our Story Page
  const OurStoryPage = () => (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center display-4 fw-bold text-dark mb-5">Our Story</h1>

            <div className="card shadow-sm border-0 mb-5">
              <div className="card-body p-5">
                <p className="lead text-muted mb-4">
                  Qualisha Creations was born from a passion for creating beautiful, memorable experiences.
                  What started as a small hobby has blossomed into a full-service event decoration company
                  dedicated to making your special moments truly unforgettable.
                </p>

                <p className="lead text-muted mb-4">
                  Our journey began in 2018 when our founder, Qualisha, decorated her sister's wedding.
                  The overwhelming positive response inspired her to turn this passion into a profession.
                  Since then, we've had the privilege of being part of hundreds of special occasions.
                </p>

                <p className="lead text-muted">
                  We believe that every event tells a story, and we're here to help you tell yours
                  through beautiful decor, attention to detail, and personalized service that exceeds expectations.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card bg-light border-0 h-100">
                  <div className="card-body p-4">
                    <h3 className="card-title h4 fw-bold text-dark mb-3">Our Mission</h3>
                    <p className="card-text text-muted">
                      To create stunning, personalized event experiences that reflect your unique style
                      and create lasting memories for you and your guests.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card bg-light border-0 h-100">
                  <div className="card-body p-4">
                    <h3 className="card-title h4 fw-bold text-dark mb-3">Our Vision</h3>
                    <p className="card-text text-muted">
                      To be the leading event decoration company known for creativity, quality,
                      and exceptional customer service in every celebration we touch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Gallery Page
  const GalleryPage = () => {
    const [selectedYear, setSelectedYear] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 6;

    // Enhanced gallery images with year data
    const galleryImages = [
      { id: 1, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Wedding+2024', alt: 'Wedding Decoration 2024', year: 2024 },
      { id: 2, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Birthday+2024', alt: 'Birthday Setup 2024', year: 2024 },
      { id: 3, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Corporate+2024', alt: 'Corporate Event 2024', year: 2024 },
      { id: 4, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Baby+Shower+2023', alt: 'Baby Shower 2023', year: 2023 },
      { id: 5, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Anniversary+2023', alt: 'Anniversary 2023', year: 2023 },
      { id: 6, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Special+2023', alt: 'Special Occasion 2023', year: 2023 },
      { id: 7, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Wedding+2023', alt: 'Wedding Decoration 2023', year: 2023 },
      { id: 8, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Birthday+2022', alt: 'Birthday Setup 2022', year: 2022 },
      { id: 9, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Corporate+2022', alt: 'Corporate Event 2022', year: 2022 },
      { id: 10, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Baby+Shower+2022', alt: 'Baby Shower 2022', year: 2022 },
      { id: 11, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Anniversary+2021', alt: 'Anniversary 2021', year: 2021 },
      { id: 12, src: 'https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Special+2021', alt: 'Special Occasion 2021', year: 2021 },
    ];

    // Get unique years for dropdown
    const years = ['all', ...new Set(galleryImages.map(image => image.year))].sort((a, b) => b - a);

    // Filter images by selected year
    const filteredImages = selectedYear === 'all'
      ? galleryImages
      : galleryImages.filter(image => image.year === parseInt(selectedYear));

    // Pagination logic
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle year filter change
    const handleYearChange = (year) => {
      setSelectedYear(year);
      setCurrentPage(1); // Reset to first page when filter changes
    };

    return (
      <div className="py-5">
        <div className="container">
          <h1 className="text-center display-4 fw-bold text-dark mb-5">Our Gallery</h1>

          {/* Year Filter Dropdown */}
          <div className="row mb-4">
            <div className="col-md-6 mx-auto">
              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="yearFilter" className="form-label fw-semibold mb-0 me-3">
                  Filter by Year:
                </label>
                <select
                  id="yearFilter"
                  className="form-select"
                  value={selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  style={{ maxWidth: '200px' }}
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="row mb-4">
            <div className="col-12 text-center">
              <p className="text-muted">
                Showing {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''}
                {selectedYear !== 'all' && ` from ${selectedYear}`}
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="row g-4">
            {currentImages.map((image) => (
              <div key={image.id} className="col-lg-4 col-md-6">
                <div
                  className="card border-0 shadow-sm overflow-hidden"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="card-img-top w-100"
                    style={{
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Image caption always visible */}
                  <div className="card-body bg-light">
                    <h6 className="card-title mb-1">{image.alt}</h6>
                    <small className="text-muted">Year: {image.year}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {currentImages.length === 0 && (
            <div className="text-center py-5">
              <h4 className="text-muted">No images found for {selectedYear === 'all' ? 'the selected criteria' : selectedYear}</h4>
              <button
                className="btn btn-outline-danger mt-3"
                onClick={() => handleYearChange('all')}
              >
                Show All Images
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="row mt-5">
              <div className="col-12">
                <nav aria-label="Gallery pagination">
                  <ul className="pagination justify-content-center">
                    {/* Previous Button */}
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                    </li>

                    {/* Page Numbers */}
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      // Show first, last, and pages around current page
                      if (
                        pageNumber === 1 ||
                        pageNumber === totalPages ||
                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                      ) {
                        return (
                          <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(pageNumber)}
                            >
                              {pageNumber}
                            </button>
                          </li>
                        );
                      } else if (
                        pageNumber === currentPage - 2 ||
                        pageNumber === currentPage + 2
                      ) {
                        return (
                          <li key={pageNumber} className="page-item disabled">
                            <span className="page-link">...</span>
                          </li>
                        );
                      }
                      return null;
                    })}

                    {/* Next Button */}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}

          {/* Page Info */}
          {totalPages > 1 && (
            <div className="row mt-3">
              <div className="col-12 text-center">
                <p className="text-muted">
                  Page {currentPage} of {totalPages}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Terms and Conditions Page
  const TermsAndConditionsPage = () => (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="text-center display-4 fw-bold text-dark mb-5">Terms and Conditions</h1>

            <div className="card shadow-sm border-0">
              <div className="card-body p-3">
                <div className="terms-content">
                  <h6 className="mb-4">Agreement between the client and Qualisha Creations (PTY) LTD.</h6>
                  <p className="mb-4"><h6>Welcome and thank you for choosing Qualisha Creations. Our services are offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of Qualisha Creations (www.qualishacreations.com) constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.
                  </h6></p>
                  <p className="mb-4"><h6>Qualisha Creations is a luxury picnics and events service business.</h6></p>
                  <p className="mb-4"><h6>Under this Agreement, I agree to hire Qualisha Creations as a professional luxury picnics and events service</h6></p>
                  <p className="mb-4"><h6><b>Set-ups:</b>
                    <ul>
                      <li>Qualisha Creations will set-up in accordance to the final quotation, should any items be brought on the day of the event that has not been arranged with the team prior to set-up. We will charge an additional set-up fee. *</li>
                      <li>Qualisha Creations reserves the right publish your event on the companies website and social media platforms</li>
                    </ul>
                  </h6></p>

                  <p className="mb-4"><h6><b>Venue and Entrance Fees:</b>
                    <ul><li>Please note that venue and entrance fees are not included in any of our packages unless specifically stated. Clients are responsible for covering all additional costs related to venue bookings, access fees, or
                      any other associated charges unless otherwise agreed upon in writing prior to the event. It is the client's responsibility to ensure that all venue-related costs are paid directly to the venue provider.</li></ul>
                  </h6></p>

                  <p className="mb-4"><h6><b>Booking Confirmation</b>
                    <ul><li>To confirm your booking, a minimum deposit of 50% of the total service fee is required at the time of booking.
                      The remaining balance must be paid in full and reflected on our side at least two (2) days prior to the scheduled service date.</li></ul>
                  </h6></p>

                  <p className="mb-4"><h6><b>Full Payment Requirement</b>
                    <ul><li>The remaining balance must be received and fully reflected in our system no later than two (2) days before the scheduled service date. If the full payment is not received by this deadline, services will not be provided.</li></ul>
                  </h6></p>

                  <p className="mb-4"><h6><b>Non-Refundable Deposit</b>
                    <ul><li>The initial 50% deposit is non-refundable, regardless of cancellation or changes to the booking.</li></ul>
                  </h6></p>

                  <p className="mb-4"><h6><b>Service Denial for Non-Payment</b>
                    <ul><li>If the full payment (remaining balance) is not received as specified, we reserve the right to cancel the booking, and no services will be rendered.</li></ul>
                  </h6></p>

                  <p className="mb-4"><h6><b>Late Payments</b>
                    <ul><li>Payments received after the deadline may result in the rescheduling or cancellation of services. We are not liable for any inconvenience caused due to failure to meet the payment deadline.</li></ul>
                  </h6></p>


                  <p className="mb-4"><h6><b>Cancellation/Refund Policy</b><br />
                    Qualisha Creations does not offer Refunds of any services offered. We understand personal circumstances may change so we allow our clients to reschedule a booking.
                    clients who wish to reschedule a booking must do this in writing and give a 7 day notice to Qualisha Creations team prior to the scheduled booking. The new rescheduled date must be within 90 days of the original booking.
                    <ul><li>On cancellation, the following applies:
                      <ul>
                        <li>After confirmation - 50% is payable.</li>
                        <li>2 days prior to event -100% is payable.</li>
                      </ul>
                    </li></ul>
                    <ul><li>Charges are percentages of the total event cost. These fees will be due even if the deposit has been paid is less than these amounts.</li></ul>
                  </h6></p>

                  <p className="mb-4"><h6><b>Weather and Postponement Conditions:</b><br />
                    Rescheduling is allowed for unpredictable and inclement weather conditions. If the forecast predicts bad weather conditions (extreme colds/winds) on the day of your event, we will allow you to reschedule the booking to any future
                    available date within 90 days of your original booking. Please reach out to us at least 24 hours prior to the scheduled booking to let us know you wish to reschedule.
                    <ul>
                      <li>Should there be adverse weather conditions such as rain which could, in Qualisha Creations sole discretion, result in damage to the equipment, the equipment cannot be operated.</li>
                      <li>Should the client insist on the stock being operated, the client will be liable for any damages.</li>
                      <li>Should the event be cancelled due to adverse weather conditions, full fees will still be due to Qualisha Creations</li>
                      <li>It is the client’s responsibility to arrange a bad weather back-up venue.</li>
                      <li>Should the event be postponed within 2 days before the date, due to bad weather, it will need to be rebooked for no later than 90 days</li>
                      <li>Should the event be postponed then the postponement must be advised in writing at least 7 days in advance, and needs to be rebooked for no later than 90 days after the original date in the same area.​​</li>
                    </ul>
                  </h6></p>

                  <p className="mb-4"><h6><b>Property Damage</b><br />
                    <p>In the event that any damage to equipment or facilities occurs as a result of myself, friends or my family's willful actions, neglect or recklessness, I acknowledge and agree to be held liable for any and all costs associated with any actions of neglect or recklessness.</p>
                    <p>
                      I agree to leave the premise, and all items located thereon, in as good order and condition as they were immediately prior to my use of the premises, and to pay for any damage plus any additional fees that may occur to the premises by me, and/or invitees.</p>
                  </h6></p>

                  <p className="mb-4"><h6><b>Waiver and Release of Liability</b><br />
                    I hereby certify that I understand the risks associated with events and agree that Qualisha Creations shall not be responsible for any injuries or losses during any event and service.
                    <br />
                    Additionally, I agree to be held solely responsible of my negligence, willful misconduct, or disregard for the rules of activity name leads to damage to others or to Qualisha Creations property. I agree to voluntarily give up or waive any right that I otherwise have to bring a legal action against Qualisha Creations for personal injury or property damage. In the event that I should require medical care or treatment, I agree to be financially responsible for any costs incurred as a result of such treatment.
                  </h6></p>

                  <p className="mb-4"><h6><b>Electronic Communications</b><br />
                    Visiting www.qualishacreations.com or sending emails to Qualisha Creations constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.
                  </h6></p>

                  <p className="mb-4"><h6><b>Changes to Terms</b><br />
                    Qualisa Creations reserves the right, in its sole discretion, to change the Terms under which www.qualishacreations.com is offered. The most current version of the Terms will supersede all previous versions. Qualisha Creations encourages you to periodically review the Terms to stay informed of our updates.                  </h6></p>
                  {/* <p className="mb-4"><h6></h6></p> */}
                  {/* <p className="mb-4"><h6><b>Set-ups:</b></h6></p> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Booking Form Page
  const BookingForm = () => {
    const totalCost = calculateTotal();

    return (
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="text-center display-4 fw-bold text-dark mb-5">Book Your Event</h1>

              <div className="card shadow-sm border-0">
                <div className="card-body p-5">
                  <form onSubmit={handleBookingSubmit}>
                    {/* Personal Information */}
                    <div className="row mb-4">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={bookingFormData.name}
                          onChange={handleBookingChange}
                          className={`form-control ${bookingErrors.name ? 'is-invalid' : ''}`}
                          placeholder="Your full name"
                        />
                        {bookingErrors.name && <div className="invalid-feedback">{bookingErrors.name}</div>}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={bookingFormData.email}
                          onChange={handleBookingChange}
                          className={`form-control ${bookingErrors.email ? 'is-invalid' : ''}`}
                          placeholder="your.email@example.com"
                        />
                        {bookingErrors.email && <div className="invalid-feedback">{bookingErrors.email}</div>}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label fw-semibold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={bookingFormData.phone}
                          onChange={handleBookingChange}
                          className={`form-control ${bookingErrors.phone ? 'is-invalid' : ''}`}
                          placeholder="078 869 2460"
                        />
                        {bookingErrors.phone && <div className="invalid-feedback">{bookingErrors.phone}</div>}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="eventDate" className="form-label fw-semibold">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={bookingFormData.eventDate}
                          onChange={handleBookingChange}
                          className={`form-control ${bookingErrors.eventDate ? 'is-invalid' : ''}`}
                        />
                        {bookingErrors.eventDate && <div className="invalid-feedback">{bookingErrors.eventDate}</div>}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="row mb-4">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="serviceType" className="form-label fw-semibold">
                          Service Type *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={bookingFormData.serviceType}
                          onChange={handleBookingChange}
                          className={`form-control ${bookingErrors.serviceType ? 'is-invalid' : ''}`}
                        >
                          <option value="">Select a service</option>
                          <option value="wedding">Wedding Decor</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="babyShower">Baby Shower</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="other">Other</option>
                        </select>
                        {bookingErrors.serviceType && <div className="invalid-feedback">{bookingErrors.serviceType}</div>}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="location" className="form-label fw-semibold">
                          Event Location *
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={bookingFormData.location}
                          onChange={handleBookingChange}
                          className={`form-control ${bookingErrors.location ? 'is-invalid' : ''}`}
                          placeholder="Full event address"
                        />
                        {bookingErrors.location && <div className="invalid-feedback">{bookingErrors.location}</div>}
                      </div>
                    </div>

                    {/* Payment Options */}
                    {/* <div className="mb-4">
                      <label className="form-label fw-semibold">Payment Option</label>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className={`card ${bookingFormData.paymentOption === 'cash' ? 'border-danger' : 'border-light'}`}>
                            <div className="card-body">
                              <div className="form-check">
                                <input
                                  type="radio"
                                  name="paymentOption"
                                  value="cash"
                                  checked={bookingFormData.paymentOption === 'cash'}
                                  onChange={handleBookingChange}
                                  className="form-check-input"
                                />
                                <label className="form-check-label fw-semibold">
                                  Cash on Collection
                                </label>
                                <p className="text-muted small mb-0">Pay when you collect the items</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className={`card ${bookingFormData.paymentOption === 'online' ? 'border-danger' : 'border-light'}`}>
                            <div className="card-body">
                              <div className="form-check">
                                <input
                                  type="radio"
                                  name="paymentOption"
                                  value="online"
                                  checked={bookingFormData.paymentOption === 'online'}
                                  onChange={handleBookingChange}
                                  className="form-check-input"
                                />
                                <label className="form-check-label fw-semibold">
                                  Online Payment
                                </label>
                                <p className="text-muted small mb-0">Secure payment via Stripe</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-danger btn-lg w-100 py-3"
                    >
                      {isSubmitting ? 'Processing...' : 'Book Now'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Complete Payment</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowPaymentModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="mb-4">
                    Total Amount: <span className="fw-bold text-danger">${totalCost}</span>
                  </p>

                  <div className="mb-3">
                    <label className="form-label">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="form-control"
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <label className="form-label">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="form-control"
                      />
                    </div>

                    <div className="col-6">
                      <label className="form-label">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowPaymentModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handlePayment}
                  >
                    Pay ${totalCost}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Contact Page
  const ContactPage = () => (
    <div className="py-5">
      <div className="container">
        <h1 className="text-center display-4 fw-bold text-dark mb-5">Contact Us</h1>

        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-5">
                <h2 className="h3 fw-bold text-dark mb-4">Get In Touch</h2>

                <div className="d-flex align-items-center mb-4">
                  <div className="bg-light rounded-circle p-3 me-4">
                    <span className="text-danger">📍</span>
                  </div>
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1">Address</h3>
                    <p className="text-muted mb-0">123 Event Street, City, State 12345</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="bg-light rounded-circle p-3 me-4">
                    <span className="text-danger">📞</span>
                  </div>
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1">Phone</h3>
                    <p className="text-muted mb-0">078 869 2460</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="bg-light rounded-circle p-3 me-4">
                    <span className="text-danger">✉️</span>
                  </div>
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1">Email</h3>
                    <p className="text-muted mb-0">events@qualishacreations.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="bg-light rounded-circle p-3 me-4">
                    <span className="text-danger">🕒</span>
                  </div>
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1">Business Hours</h3>
                    <p className="text-muted mb-1">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-muted mb-0">Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-5">
                <h2 className="h3 fw-bold text-dark mb-4">Send us a Message</h2>

                <form onSubmit={handleContactSubmit}>
                  <div className="mb-3">
                    <label htmlFor="contactName" className="form-label fw-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      required
                      value={contactFormData.name}
                      onChange={handleContactChange}
                      className="form-control"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="contactEmail" className="form-label fw-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      required
                      value={contactFormData.email}
                      onChange={handleContactChange}
                      className="form-control"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contactMessage" className="form-label fw-semibold">
                      Message *
                    </label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      required
                      rows="5"
                      value={contactFormData.message}
                      onChange={handleContactChange}
                      className="form-control"
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-danger btn-lg w-100 py-3"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Add some custom CSS for hover effects
  const customStyles = `
    .hover-shadow:hover {
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
      transform: translateY(-2px);
      transition: all 0.3s ease;
    }
    .hover-bg-opacity-30:hover {
      background-color: rgba(0,0,0,0.3)!important;
    }
    .hover-opacity-100:hover {
      opacity: 1!important;
    }
    .transition {
      transition: all 0.3s ease;
    }
    .cursor-pointer {
      cursor: pointer;
    }
  `;

  return (
    <div className="min-vh-100 d-flex flex-column">
      <style>{customStyles}</style>
      <Header />

      <main className="flex-grow-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'story' && <OurStoryPage />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'termsandconditions' && <TermsAndConditionsPage />}
        {currentPage === 'book' && <BookingForm />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />

      {showModal && <GalleryModal />}
    </div>
  );
}

export default App;