'use client'; // Ensure this component is treated as a client component

import React, { useState, useEffect, useRef } from 'react'; // Make sure to import React
import Image from 'next/image';
import wood from '@/public/woodenbg.svg';
import step2 from '@/public/step2.svg';
import logoAndText from '@/public/surveyquestlogoandtext.svg';
import Only from '@/public/onlylogo.svg'
import Link
 from 'next/link';
const Second: React.FC = () => {
const [otp, setOtp] = useState<string[]>(Array(6).fill('')); // Array to hold OTP inputs
const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Type for refs

const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
const value = event.target.value;


// Ensure only one character is entered
if (/^[0-9]{0,1}$/.test(value)) {
  const newOtp = [...otp];
  newOtp[index] = value; // Update the OTP state
  setOtp(newOtp); // Update the state to re-render
  
  // Move to next input if value is entered
  if (value && index < 5) {
    inputRefs.current[index + 1]?.focus(); // Use optional chaining to handle null
  }
}
};

const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
// Move to previous input if backspace is pressed
if (event.key === 'Backspace' && index > 0 && !otp[index]) {
inputRefs.current[index - 1]?.focus(); // Use optional chaining to handle null
}
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
alert(`OTP submitted: ${otp.join('')}`);
};

useEffect(() => {
// Any client-side logic can go here
}, []);

const isFormValid = () => {
  // Form is valid if all OTP fields are filled with a single digit
  return otp.every(digit => digit.length === 1 && /^[0-9]$/.test(digit));
};

return (
<div className="flex flex-col md:flex-row relative w-full h-screen">
    <p
    className="
      text-[#2E2F3266]
      absolute
      top-4
      left-4
      md:top-4
      md:left-auto
      md:right-16
    "
  >
    Telegram User ID: 1234567890
  </p>
{/* Wooden background image section */}
<div className="hidden md:block w-1/2 relative flex-1">
<Image src={wood} alt="Wooden background" className="hidden md:block relative inset-0 z-0 object-cover w-full h-full" priority />
<div className="absolute inset-0 flex items-center justify-center z-0">
<Image src={logoAndText} alt="SurveyQuest Logo and Text" className="hidden md:block object-contain w-80 h-auto z-0" priority />
</div>

</div>

<div className="md:hidden w-full flex justify-center">
  <Image
    src={Only}
    alt="SurveyQuest Logo"
    className="object-contain w-40 h-auto z-0 mt-10"
    priority
  />
</div>

{/* Form section */}
<div className="flex-1 bg-[#FCFAF2] flex items-center justify-center relative">
<div className="absolute inset-0 bg-[#FCFAF2] z-0" />
<div className="p-8 w-full max-w-md z-10">
<Image src={step2} alt="Step 1" className="w-full h-20 mb-4" />
<h1 className="text-2xl font-extrabold mb-4 text-[#B3935E] text-left">We sent you something...</h1>


      <p className="text-sm mb-4 text-black font-sans">Enter the 6-digit OTP we sent to your school email address below.</p>
        <form onSubmit={handleSubmit} className="flex justify-between mb-4 gap-3">
        {otp.map((value, index) => (
          <input
          key={index}
          type="text"
          ref={el => { inputRefs.current[index] = el; }} // Attach ref
          className="border border-[#0c0b09] text-black rounded w-12 py-2 px-3 text-center"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </form>
      <a href=''><h5 className="text-sm font-light mb-4 text-[#B3935E] text-left">Resend code in 10s</h5></a>
      <Link href='/third'>
        <button type="submit"className={`bg-[#B3935E] text-white py-2 px-4 rounded w-full ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isFormValid()}>
          Next
        </button></Link>
      
    </div>
  </div>
</div>
);
};

export default Second; 