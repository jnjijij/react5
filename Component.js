// Example in a component
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const MyComponent = () => {
  useEffect(() => {
    ReactGA.initialize('YOUR_TRACKING_ID');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // Rest of your component
};

export default MyComponent;
