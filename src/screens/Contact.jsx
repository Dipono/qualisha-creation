import React from 'react';

const ContactPage = ({ contactFormData, handleContactChange, handleContactSubmit }) => (
  <div className="py-5">
    <div className="container">
      <h1 className="text-center display-4 fw-bold text-dark mb-5">Contact Us</h1>
      <div className="row g-5">
        {/* Your existing contact page content */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-5">
              <h2 className="h3 fw-bold text-dark mb-4">Get In Touch</h2>
              {/* ... contact info ... */}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-5">
              <h2 className="h3 fw-bold text-dark mb-4">Send us a Message</h2>
              <form onSubmit={handleContactSubmit}>
                {/* ... contact form ... */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;