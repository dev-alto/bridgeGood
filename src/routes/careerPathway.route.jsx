import React from 'react'
import Image from 'next/image';
import CareerPathwayCard from '@/components/careerPathwayCard.component';
import Footer from '@/components/footer.component';

const CareerPathwayBody = () => {
  return (
    <div>
    <div className="max-w-[1240px] mx-auto">
      <div>
        <div className="flex justify-start items-center gap-[100px] mt-[50px]">
          <div className="flex flex-col justify-start w-[700px]">
            <h1 className="text-[50px] font-bold ml-[-3px]">
              Our Career Paths
            </h1>
            <p className="text-[18px] mt-[-5px]">
            Embarking on your career journey can feel overwhelming, whether you're starting out or aiming for advancement. Our curated Career Paths offer clear guidance from any stage to reaching your goals.
            </p>
            <h2 className="text-[24px] font-semibold mt-[20px] leading-[120%]">
            Let us simplify the process and help you navigate towards success.
            </h2>
          </div>
          <div>
          <Image src="/assets/careerPaths.png" width={272} height={254} alt="bridgeGood" />
          </div>
        </div>
        <div className="flex flex-wrap gap-[20px] mt-[80px] justify-between">
          <CareerPathwayCard />
          <CareerPathwayCard />
          <CareerPathwayCard />
          <CareerPathwayCard />
          <CareerPathwayCard />
          <CareerPathwayCard />
          <CareerPathwayCard />
          <CareerPathwayCard />
          <CareerPathwayCard />
        </div>
        
      </div>
    </div>
    <div className="w-full bg-[#E0DEFF] mt-[40px] pb-[20px]">
    <div className="max-w-[1240px] mx-auto text-center">
      <h1 className="text-[48px] font-bold">Not sure <span className="text-[#FF0000]">where to start?</span></h1>
      <p className="capitalize font-bold text-[16px] tracking-wide">TAKE OUR SURVEY</p>
      <button className="px-[50px] py-[15px] bg-[#242E6B] rounded-[3px] text-white mt-[17px]">Find your Career</button>
    </div>
  </div>
  <Footer />
  </div>
  )
}

export default CareerPathwayBody;