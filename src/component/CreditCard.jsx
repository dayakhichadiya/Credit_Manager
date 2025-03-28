import React, { useState } from 'react';

const CreditCard = () => {
  const [cardInfo, setCardInfo] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };


  return (
    <form>
      <input
        type="text"
        name="number"
        value={cardInfo.number}
        onChange={handleInputChange}
        placeholder="Card Number"
      />
      <input
        type="text"
        name="name"
        value={cardInfo.name}
        onChange={handleInputChange}
        placeholder="Cardholder Name"
      />
      <input
        type="text"
        name="expiry"
        value={cardInfo.expiry}
        onChange={handleInputChange}
        placeholder="Expiry Date"
      />
      <input
        type="text"
        name="cvc"
        value={cardInfo.cvc}
        onChange={handleInputChange}
        placeholder="CVC"
      />
    </form>
  );
};


const getCardType = (number) => {
    const cardTypes = {
      visa: /^4/,
      mastercard: /^5[1-5]/,
      amex: /^3[47]/,
    };
  
    return Object.keys(cardTypes).find((type) => cardTypes[type].test(number)) || 'unknown';
  };
  
  const cardType = getCardType(cardInfo.number);
  
  return (
    <form className={`credit-card-form ${cardType}`}>
    </form>
  );

  const validateCardNumber = (number) => {
  };
  
  const formatCardNumber = (number) => {
    const numberWithoutSpaces = number.replace(/\s+/g, '');
    return numberWithoutSpaces.replace(/(\d{4})/g, '$1 ').trim();
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
  
    if (name === 'number') {
      if (!validateCardNumber(value)) {
      }
      formattedValue = formatCardNumber(value);
    }
  
  
    setCardInfo({ ...cardInfo, [name]: formattedValue });
  };
  


export default CreditCard;