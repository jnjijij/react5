// Example in a component
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyComponent = () => (
  <div>
    <Helmet>
      <title>Page Title</title>
      <meta name="description" content="Page description" />
      {/* Add more meta tags as needed */}
    </Helmet>
    {/* Rest of your component */}
  </div>
);

export default MyComponent;
