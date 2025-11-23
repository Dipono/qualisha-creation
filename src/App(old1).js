import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GalleryModal from './components/GalleryModal';
import HomePage from './screens/Home';
import OurStoryPage from './screens/OurStory';
import GalleryPage from './screens/Gallery';
import TermsAndConditionsPage from './screens/TermsAndConditions';
import BookingPage from './screens/Booking';
import ContactPage from './screens/Contact';

// Import your assets
import birthday from './assets/birthday.jpg';
import wedding from './assets/wedding.jpg';
import corporate from './assets/corporate.jpg';
import babyShower from './assets/babyShower.jpg';
import anniversary from './assets/anniversary.jpg';
import other from './assets/qc3.jpg';

function App() {
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

  // Gallery images data
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

  // Modal function
  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Your existing booking functions...
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
    // Your validation logic
    setBookingErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!validateBookingForm()) return;
    setIsSubmitting(true);
    // Your submission logic
  };

  const handlePayment = () => {
    // Your payment logic
  };

  const calculateTotal = () => {
    // Your calculation logic
    return 0;
  };

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
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        <style>{customStyles}</style>
        <Header />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={
              <HomePage 
                galleryImages={galleryImages}
                services={services}
                openModal={openModal}
              />
            } />
            <Route path="/story" element={<OurStoryPage />} />
            <Route path="/gallery" element={<GalleryPage openModal={openModal} />} />
            <Route path="/terms" element={<TermsAndConditionsPage />} />
            <Route path="/book" element={
              <BookingPage
                bookingFormData={bookingFormData}
                setBookingFormData={setBookingFormData}
                bookingErrors={bookingErrors}
                isSubmitting={isSubmitting}
                showPaymentModal={showPaymentModal}
                setShowPaymentModal={setShowPaymentModal}
                handleBookingChange={handleBookingChange}
                handleBookingSubmit={handleBookingSubmit}
                handlePayment={handlePayment}
                calculateTotal={calculateTotal}
              />
            } />
            <Route path="/contact" element={
              <ContactPage
                contactFormData={contactFormData}
                handleContactChange={handleContactChange}
                handleContactSubmit={handleContactSubmit}
              />
            } />
          </Routes>
        </main>

        <Footer />
        
        {showModal && (
          <GalleryModal 
            selectedImage={selectedImage}
            setShowModal={setShowModal}
            galleryImages={galleryImages}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>
    </Router>
  );
}

export default App;