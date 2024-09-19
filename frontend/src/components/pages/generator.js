import React, { useState } from 'react';

// Function to generate a random numeric code of a specified length
const generateUniqueCode = (length = 6) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
};

// Function to create an SMS link
const createSmsLink = (phoneNumber, messageBody, code) => {
  return `sms:${phoneNumber}?body=${encodeURIComponent(messageBody + ' ' + code)}`;
};

// Component
const SmsLinkGenerator = () => {
  const [link, setLink] = useState('');
  const [code, setCode] = useState('');

  const handleGenerateLink = () => {
    const phoneNumber = '811';
    const messageBody = 'skizatune';

    // Generate a new code and link
    const newCode = generateUniqueCode();
    const newLink = createSmsLink(phoneNumber, messageBody, newCode);

    // Update state with the new link and code
    setCode(newCode);
    setLink(newLink);
  };

  return (
    <div>
      <button onClick={handleGenerateLink}>Generate SMS Link</button>
      {link && (
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
          <br />
          Code: {code}
        </div>
      )}
    </div>
  );
};

export default SmsLinkGenerator;
