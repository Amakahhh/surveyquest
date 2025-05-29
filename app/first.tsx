'use client';
import Image from 'next/image';
import wood from '@/public/woodenbg.svg';
import logoAndText from '@/public/surveyquestlogoandtext.svg';
import step1 from '@/public/step1.svg';
import logoOnly from '@/public/onlylogo.svg';
import Link from 'next/link';

const RegistrationForm = () => {
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
        <Image
          src={wood}
          alt="Wooden background"
          fill
          className="hidden md:block relative inset-0 z-0 object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src={logoAndText}
            alt="SurveyQuest Logo and Text"
            className="hidden md:block object-contain w-80 h-auto z-0"
            priority
          />
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

          <div className="flex mb-4">
            <div className="mb-4 w-1/2">
              <p className="text-black">First name:</p>
              <input
                type="text"
                className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-4 ml-2 w-1/2">
              <p className="text-black">Last name:</p>
              <input
                type="text"
                className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-black">School email:</p>
            <input
              type="email"
              className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="flex">
            <div className="mb-4 flex-1">
              <p className="text-black">Telegram number:</p>
              <input
                type="text"
                className="border border-[#0c0b09] text-black rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-4 ml-2 flex-1">
              <p className="text-black">Gender:</p>
              <select
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

          <Link href="/second">
            <button
              type="submit"
              className="bg-[#B3935E] text-white py-2 px-4 rounded w-full"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
