import React, { useState, useEffect } from 'react';

const CreditCardForm = () => {

  const [expiryCountdown, setExpiryCountdown] = useState('');

  useEffect(() => {
    const calculateCountdown = () => {
      if (cardInfo.expiry) {
      }
    };

    calculateCountdown();
    const intervalId = setInterval(calculateCountdown, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [cardInfo.expiry]);

};