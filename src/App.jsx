import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContractorPartnerPage from './pages/ContractorPartnerPage';
import CommercialServicesPage from './pages/CommercialServicesPage';
import PartnerPortal from './pages/PartnerPortal';
import AppointmentBooking from './pages/AppointmentBooking';
import Act144Resources from './pages/Act144Resources';
import ContactPage from './pages/ContactPage';
import LegalDisclaimer from './pages/LegalDisclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contractor-partners" element={<ContractorPartnerPage />} />
        <Route path="commercial-services" element={<CommercialServicesPage />} />
        <Route path="partner-portal" element={<PartnerPortal />} />
        <Route path="book-appointment" element={<AppointmentBooking />} />
        <Route path="act-144-resources" element={<Act144Resources />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="legal-disclaimer" element={<LegalDisclaimer />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;