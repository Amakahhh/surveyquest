'use client'
import Image from 'next/image';
import wood from '@/public/woodenbg.svg';
import logoAndText from '@/public/surveyquestlogoandtext.svg';
import step4 from '@/public/step4.svg';
import logoOnly from '@/public/onlylogo.svg';
import Link from 'next/link';
import ellipse from '@/public/logoAndButtonLabel.svg'


const RegistrationForm = () => {

  

  return (
    
    <div className="flex flex-col md:flex-row relative w-full h-screen">

      <p className="text-[#2E2F3266] absolute top-4 left-4 md:left-2/3 md:-translate-x-1/2">
        Telegram User ID: 1234567890 
      </p>
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
        <Image src={wood} alt="Wooden background" className="hidden md:block relative inset-0 z-0 object-cover w-full h-full" priority />
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
          <Image src={step4} alt="Step 1" className="w-full h-20 mb-4" />
          <div>
          <h1 className="text-2xl font-extrabold mb-6 text-[#B3935E] text-left">Welcome to SurveyHustler</h1>
          <h2 className="text-3xl font-extralight font-mono mb-6 text-[#B3935E] text-left">Ayomide</h2>
          </div>
           <div className='flex-row pb-4'>
<div className='text-[#090909] font-b old text-2xl'>As the owner of a Survey,</div>
<div className='font-extralight text-wrap w-96 text-black'>You now have access to the biggest platform of survey 
respondents in CU at your reach. Those surveys will be
 filled in no time! </div>

            </div>

            <div> <div className='flex-row pb-4'>
<div className='text-[#090909] font-b old text-2xl'>As a Survey respondent,</div>
<div className='font-extralight text-wrap w-96 text-black'>Get paid to answer other’s survey at the price they set.
   Don’t worry, we have done it in such a way you can’t get paid below N75 per survey! </div>

            </div></div>

              
            <div> 
              <div className='flex-row pb-4'>
<div className='font-extralight text-wrap w-96 text-black'>Start the Telegram bot to commence your journey as a SurveyHustler! </div>

            </div>

            </div>

<Link href="/second">
            
              <button
               
                className="bg-[#B3935E] text-white justify-center py-2 px-4 rounded-xl w-full"
              >
                <div className="flex justify-center items-center w-full">
                  <Image src={ellipse} alt="image" width={250} />
                </div>
              </button></Link>
              </div>
              
            </div>
           
        
            
          </div>
          
      
  );
};

export default RegistrationForm;