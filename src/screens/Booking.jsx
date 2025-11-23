import React, { useState } from 'react';

const BookingPage = ({ 
  bookingFormData, 
  setBookingFormData, 
  bookingErrors, 
  isSubmitting, 
  showPaymentModal, 
  setShowPaymentModal,
  handleBookingChange,
  handleBookingSubmit,
  handlePayment,
  calculateTotal 
}) => {
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
                  {/* Your existing booking form content */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">Full Name *</label>
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
                    {/* ... rest of booking form ... */}
                  </div>
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
                  {/* ... rest of payment modal ... */}
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
    </div>
  );
};

export default BookingPage;