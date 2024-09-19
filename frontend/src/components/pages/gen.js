import React, { useState } from 'react';

// Function to generate a random code
const generateRandomCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function SmsLink() {
    // State to store the generated code
    const [code, setCode] = useState(generateRandomCode());

    // Function to handle link click and update the code
    const handleClick = () => {
        setCode(generateRandomCode());
    };

    // Create the SMS link with the generated code
    const smsLink = `sms:+811?&body=skizatume%20${code}`;

    return (
        <div>
            <a href={smsLink} onClick={handleClick}>
                Click here to generate SMS link with code {code}
            </a>
        </div>
    );
}

export default SmsLink;
