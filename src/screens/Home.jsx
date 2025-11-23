import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ galleryImages, services, openModal }) => {
  return (
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
                <h5>Welcome to Qualisha Creations, where creativity meets passion! Our mission is to bring your vision to life, transforming ideas into extraordinary experiences.</h5>
                Qualisha Creations was born out of a deep love for creating and designing memorable events. Our story began with a simple dream: to make every moment unforgettable, no matter how big or small. Over the past year,
                we've grown into a brand that combines innovation and heart to create unique experiences for our clients. At Qualisha Creations, we believe in the power of creativity to bring people together. Our core values of excellence, authenticity, and connection guide everything we do. We are committed to making every project uniquely yours, down to the finest detail.
              </p>
              <Link to="/book" className="btn btn-danger btn-lg px-5">
                Book Your Event
              </Link>
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
            <Link to="/gallery" className="btn btn-outline-danger">
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;