import React from 'react';

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

export default OurStoryPage;