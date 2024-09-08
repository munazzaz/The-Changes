import React from 'react';
import Image from 'next/image';
import Icon1 from "../../public/images/PIAIC-Logo.webp"
import Icon2 from "../../public/images/Giaic.webp"
import Icon3 from "../../public/images/cmkpk.webp"

const Programs = () => {
  return (
    <div className='w-full bg-background px-5 sm:px-7 xl:px-24 sm:pt-16 pb-16   flex flex-col items-center justify-center'>
              
          <h2 className="text-md sm:text-[14px] font-inter gradient-border font-semibold border-b w-fit text-[#031811] uppercase tracking-wide">
          PROGRAMS
          </h2>
          
      <h1 className='font-bold text-center sm:font-bold text-[36px] font-poppins sm:text-[40px] md:text-[47px] text-[#031811]'>Active Programs</h1>
      <p className='pt-3 font-inter sm:pt-6 font-light text-[14px] max-w-[500px] w-full text-center text-[#031811B2]'>
        Panaversity is launched to transform AI education across South Asia. Building on our success in Pakistan, we’re expanding to empower the next generation of tech leaders. Discover our active programs shaping the future of AI.
      </p>
      {/* Cards */}
      <div className='pt-12 sm:pt-16 px-5 sm:px-5 md:px-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-center'>
        {/* Card1 */}
        <div className='max-w-[348px] w-full bg-[#f9f9f9] border border-[#1cd98e] shadow-lg rounded-2xl p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-[-10px]'>
          <div className='flex justify-center'>
            <Image src={Icon1} alt="PIAIC Icon" className='w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]'/>
          </div>
          <h1 className='pt-3 font-poppins sm:pt-6 font-bold text-[20px] sm:text-[24px] text-center text-[#031811]'>PIAIC</h1>
          <p className='pt-4 font-light font-inter text-[13px] text-center text-[#031811B2]'>
            Presidential Initiative for Artificial Intelligence & Computing Leading Pakistan into the 4th industrial revolution, PIAIC is empowering cities like Islamabad, Karachi, Lahore, Faisalabad, and Peshawar with world-class training in AI and cloud computing.
          </p>
        </div>
        {/* Card2 */}
        <div className='max-w-[348px] w-full bg-[#f9f9f9] border border-[#1cd98e]  shadow-lg rounded-2xl p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-[-10px]'>
          <div className='flex justify-center'>
            <Image src={Icon2} alt="GIAIC Icon" className='w-[60px] h-[60px] sm:w-[85px] sm:h-[85px]'/>
          </div>
          <h1 className='pt-3 font-poppins sm:pt-6 font-bold text-[20px] sm:text-[24px] text-center text-[#031811]'>GIAIC</h1>
          <p className='pt-4 font-light font-inter text-[13px] text-center text-[#031811B2]'>
            Governor Initiative for Artificial Intelligence & Computing Transforming Sindh into a hub for billion-dollar solopreneurs, GIAIC equips you to master AI, automate businesses, and create revolutionary metaverse experiences.
          </p>
        </div>
        {/* Card3 */}
        <div className='flex justify-center col-span-1 sm:col-span-2 xl:col-span-1'>
          <div className='max-w-[348px] w-full bg-[#f9f9f9] border border-[#1cd98e] shadow-lg rounded-2xl p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-[-10px]'>
            <div className='flex justify-center'>
              <Image src={Icon3} alt="CMKPK Icon" className='w-[60px] h-[60px] sm:w-[85px] sm:h-[85px]'/>
            </div>
            <h1 className='pt-3 sm:pt-6 font-poppins  font-bold text-[20px] sm:text-[24px] text-center text-[#031811]'>CMKPK</h1>
            <p className='pt-4 font-light font-inter text-[13px] text-center text-[#031811B2]'>
              Chief Minister Khyber Pakhtunkhwa AI & Cloud Initiative A 100% free program, CMKPK is preparing Khyber Pakhtunkhwa to lead in the $1.8 trillion AI revolution, training top-tier Cloud Native AI Engineers ready to change the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;












