import React from 'react';
import Image from 'next/image';

import ProjectCard from '@/components/projectCard.component';
import Projects from '../database/projects.json';

const ProfileBody = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-center gap-[100px] mt-[50px]">

          <div className="flex flex-col justify-start w-[700px]">
            <h1 className="text-[50px] font-bold ml-[-3px]">
              Your Profile
            </h1>
            <h2 className="text-[24px]">👋{'  '} Hey, Lance Ruiz</h2>
          </div>
          
          <div>
            <Image src="/assets/profile.png" width={400} height={128} alt="profileAvatar" />
          </div>
          
        </div>

        <div className="flex bg-white h-[400px] rounded-lg border-[1px] border-black">
          <div className="flex flex-col justify-center items-center w-[30%] gap-4">
            <Image src="/assets/defaultAvatar.png" width={200} height={200}/>
            <h1>California</h1>
          </div>
          <div className="bg-violet-300 w-[70%] p-10">
            <h1 className="font-bold text-[40px]">Lance Ruiz</h1>
          </div>
          
        </div>

        <div className="flex gap-4">
          {Object.entries(Projects).map(([projectName]) =>
          (
            <ProjectCard projectName={projectName}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileBody;