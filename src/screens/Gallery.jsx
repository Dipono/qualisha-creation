import React, { useState } from 'react';

const GalleryPage = ({ openModal }) => {
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
    setCurrentPage(1);
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
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
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

export default GalleryPage;