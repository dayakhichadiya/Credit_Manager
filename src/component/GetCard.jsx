
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
      {/* Input fields remain the same */}
    </form>
  );