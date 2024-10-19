import React from 'react';
import { useParams } from 'react-router-dom';

const ThankYouPage = () => {
  const { productName } = useParams();

  return (
    <div className="thank-you-page">
      <h1>Thank You!</h1>
      <p>Thank you for your interest in {productName}!</p>
    </div>
  );
};

export default ThankYouPage;
