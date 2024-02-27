import Navigation from '@/components/navigation.component';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const App = () => {
  return (

    <div>
    <Navigation/>

     <div className="max-w-[1240px] mx-auto flex gap-[30px] justify-between md:flex-row flex-col px-4 md:px-2 justify-between items-center 2xl:my-[120px] my-[50px]">
      <div className="flex flex-col items-start justify-between">
       <h1 className="text-[75px] font-bold leading-[85px]">Help students design for social good</h1>
       <p className="text-[18px] pl-1 mt-[18px]">BRIDGEGOOD provides equitable tech access, design opportunities, and professional resources to job seekers.</p>
       <Link href="/careerDiscovery">
       <button className="py-[18px] px-[28px] bg-[#242E6B] rounded-[5px] text-white mt-[35px]">Discover Careers</button>
        </Link>
       </div>
      <div>
        <Image src="/assets/smile.svg" alt="" width={1200} height={340} />
      </div>
    </div>
    
    </div>
      
  )
}

export default App;