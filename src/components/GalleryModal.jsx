import React, { useEffect } from 'react';

const GalleryModal = ({ selectedImage, setShowModal, galleryImages, setSelectedImage }) => {
  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowModal(false);
    } else if (e.key === 'ArrowRight') {
      handleNext(e);
    } else if (e.key === 'ArrowLeft') {
      handlePrev(e);
    }
  };

  // Add event listener for keyboard navigation
  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  if (!selectedImage) return null;

  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
  const nextImage = galleryImages[(currentIndex + 1) % galleryImages.length];
  const prevImage = galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImage(nextImage);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImage(prevImage);
  };

  return (
    <div 
      className="modal show d-block" 
      style={{ backgroundColor: 'rgba(0,0,0,0.9)' }} 
      tabIndex="-1"
      onClick={() => setShowModal(false)}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-transparent border-0">
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close btn-close-white ms-auto"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center position-relative">
            {/* Navigation Arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  className="btn btn-outline-light position-absolute start-0 top-50 translate-middle-y ms-3"
                  onClick={handlePrev}
                  style={{ zIndex: 1050 }}
                >
                  ‹
                </button>
                <button
                  className="btn btn-outline-light position-absolute end-0 top-50 translate-middle-y me-3"
                  onClick={handleNext}
                  style={{ zIndex: 1050 }}
                >
                  ›
                </button>
              </>
            )}
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="img-fluid rounded"
              style={{ maxHeight: '70vh', objectFit: 'contain' }}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white mt-3 fs-5">
              {selectedImage.alt} ({currentIndex + 1} of {galleryImages.length})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;