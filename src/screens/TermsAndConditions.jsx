import React from 'react';

const TermsAndConditionsPage = () => (
  <div className="py-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="text-center display-4 fw-bold text-dark mb-5">Terms and Conditions</h1>
          <div className="card shadow-sm border-0">
            <div className="card-body p-3">
              <div className="terms-content">
                {/* Your existing Terms and Conditions content */}
                <h6 className="mb-4">Agreement between the client and Qualisha Creations (PTY) LTD.</h6>
                {/* ... rest of your terms content ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TermsAndConditionsPage;