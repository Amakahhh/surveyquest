'use client'
import Image from 'next/image';
import wood from '@/public/woodenbg.svg';
import logoAndText from '@/public/surveyquestlogoandtext.svg';
import step1 from '@/public/step1.svg';
import logoOnly from '@/public/onlylogo.svg';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Second from './second/page';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telegramNumber, setTelegramNumber] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValidationErrors, setPasswordValidationErrors] = useState<string[]>([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const router = useRouter();

  const validatePassword = (password: string) => {
    const errors: string[] = [];
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    if (!/[^a-zA-Z0-9\s]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
    return errors;
  };

  const isFormValid = () => {
    return (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      telegramNumber !== '' &&
      gender !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      password === confirmPassword &&
      passwordValidationErrors.length === 0
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validatePassword(password);
    setPasswordValidationErrors(errors);

    if (errors.length === 0) {
      setPasswordError('');
      // Handle form submission logic here
      alert('Form submitted!');
    } else {
      setPasswordError('Please fix the password errors.');
    }
  };

  useEffect(() => {
    if (passwordTouched) {
      setPasswordValidationErrors(validatePassword(password));
    }
  }, [password, passwordTouched]);

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  }, [password, confirmPassword]);

  return (
    
    <div className="flex flex-col md:flex-row relative w-full h-screen">
                <p
                  className="
                    text-[#2E2F3266]
                    absolute
                    top-4
                    left-4
                    md:top-4
                    md:left-1/2
                    md:-translate-x-1/2
                    md:text-left
                  "
                >
                  Telegram User ID: 1234567890
                </p>

      {/* Wooden background image section */}
      
      <div className="w-1/2 relative flex-1">
        <Image src={wood} alt="Wooden background" fill className="hidden md:block relative inset-0 z-0 object-cover w-full h-full" priority />
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image src={logoAndText} alt="SurveyQuest Logo and Text" className="hidden md:block object-contain w-80 h-auto z-0" priority />
        </div>
      </div>
     
  <div className="md:hidden w-full flex justify-center">

  <Image
    src={logoOnly}
    alt="SurveyQuest Logo"
    className="object-contain w-40 h-auto z-0"
    priority
  />
</div>


      {/* Form section */}
      <div className="flex-1 bg-[#FCFAF2] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[#FCFAF2] z-0" />
        <div className="p-8 w-full max-w-md z-10">
          <Image src={step1} alt="Step 1" className="w-full h-20 mb-4" />
          <h1 className="text-2xl font-extrabold mb-6 text-[#B3935E] text-left">Hey There!</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex mb-4">
              <div className="mb-4">
                <p className='text-black'>First name:</p>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4 ml-2">
                <p className='text-black'>Last name:</p>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <p className='text-black'>School email:</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className='flex'>
              <div className="mb-4 flex-1">
                <p className='text-black'>Telegram number:</p>
                <input
                  type="text"
                  value={telegramNumber}
                  onChange={(e) => setTelegramNumber(e.target.value)}
                  className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4 ml-2 flex-1">
                <p className='text-black'>Gender:</p>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                  required
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <p className='text-black'>Password:</p>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordTouched(true);
                }}
                className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                required
              />
              {passwordTouched && passwordValidationErrors.length > 0 && (
                <div className="text-red-500 text-xs">
                  {passwordValidationErrors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="mb-4">
              <p className='text-black'>Confirm password:</p>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                required
              />
              {confirmPasswordError && (
                <div className="text-red-500 text-xs">{confirmPasswordError}</div>
              )}
            </div>
              <Link href="/second">
            <button
              type="submit"
              className={`bg-[#B3935E] text-white py-2 px-4 rounded w-full ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isFormValid()}
            >
              Next
            </button></Link>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;