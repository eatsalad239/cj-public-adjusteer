import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GHLTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views for Go High Level
    if (window.GHL_WEBHOOK_URL) {
      const trackPageView = async () => {
        try {
          await fetch(window.GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              event: 'page_view',
              page: location.pathname,
              timestamp: new Date().toISOString(),
              location_id: window.GHL_LOCATION_ID,
              source: 'website',
            }),
          });
        } catch (error) {
          console.error('GHL tracking error:', error);
        }
      };
      trackPageView();
    }
  }, [location]);

  return null;
};

export default GHLTracker;