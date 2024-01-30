import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import OtpInput from './OtpInput';
import './../PhoneOtpForm.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useNavigate } from 'react-router-dom';

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  

  const navigate=useNavigate();
  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // Parse the phone number
    const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);

    // Check if the parsed phone number is valid and terms are agreed
    if (!parsedPhoneNumber || !parsedPhoneNumber.isValid() || !agreeTerms) {
      alert('Invalid Phone Number or Terms not Agreed');
      return;
    }

    // Backend APIs can be integrated here

    // Proceed to show OTP input
    setShowOtp(true);
  };

  const onOtpSubmit =(otp) => {
    console.log('Otp Entered Correct', otp);
    // Additional logic for OTP verification can be added here
    alert("OTP Entered Correct, Routing to Home Page");
    navigate('/home');
  };

  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handlePhoneSubmit} className="phone-form">
          <PhoneInput
            placeholder="Enter the Phone Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className='checkboxchecker'
            />
            <label htmlFor="agreeTerms">
              I agree with <span className='terms-label'> terms and conditions</span> & <span className='terms-label'> Privacy Policies </span> of Elda Health
            </label>
          </div>
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
