'use client';
import React, { useContext } from 'react';
import Image from 'next/image';

import Projects from '../database/projects.json';
import { SiHtml5, SiJavascript, SiLua, SiPython, SiRust, SiNodedotjs, SiReact, SiBlender } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'

const TAG_CLASSES = 'inline mr-1 self-center'

const Tags = {
  'Frontend Web Development': { color: 'bg-orange-700', icon: (<SiHtml5 className={TAG_CLASSES}/>) },
  'Backend Web Development': { color:'bg-[#e1790d]', icon: (<SiJavascript className={TAG_CLASSES}/>) } ,
  'Digital Arts': { color:'bg-[#3178C6)]', icon: (<BiLogoTypescript className={TAG_CLASSES}/>) } ,
  'Lua': { color:'bg-[#0e7490]', icon: (<SiLua className={TAG_CLASSES}/>) },
  '2D Design': { color:'bg-[#0369a1]', icon: (<SiPython className={TAG_CLASSES}/>) },
  'Game Development': { color:'bg-[#A16A03]', icon: (<SiRust className={TAG_CLASSES}/>) },

  'Project Management': { color:'bg-[#41722b]', icon: (<SiNodedotjs className={TAG_CLASSES}/>) },
  'React': { color:'bg-[#3a7b8c]', icon: (<SiReact className={TAG_CLASSES}/>) },

  'Blender': { color:'bg-[#e1790d]', icon: (<SiBlender className={TAG_CLASSES}/>) },
}


const ProjectCard = ({ projectName }) => {

  const projectDetails = Projects[projectName]
  console.log(projectDetails)

  return (
    <div className="max-w-[560px] border-solid border-[1px] border-black rounded-[10px]  flex flex-col gap-[5px]">

      <Image src={projectDetails.image} width={1280} height={720} className="w-full rounded-xl"/>
      
      <div className="px-[20px] py-[15px]">   
        <div className="flex gap-[10px] ">
          <Image src="/assets/project-icon.png" width={24} height={24} alt="icon" />
          <span>{projectName}</span>
        </div>

        <div className="flex flex-row mt-2 flex-wrap gap-1">  
          {projectDetails.tags.map((tag) => (
            <div className={`text-sm ${Tags[tag].color} shadow-sm text-gray-100 bg-opacity-75 mr-1 font-semibold px-2 py-1 rounded-md inline-block`} key={crypto.randomUUID()}>{Tags[tag].icon}{tag}</div>
          ))}
        </div>

        <p className="text-[14px] mt-[5px]">
          Graphic Designer Career Path offers a simple, intuitive roadmap to guide you step by step. From mastering design fundamentals to specializing in areas like branding and web design, our curriculum equips you with the skills needed to succeed. 
        </p>

        <a href={projectDetails.github} target="_blank">
          <div className="flex h-[20px] mt-4 gap-2">
            <div className="aspect-square"><Image src="/assets/github.png" width={128} height={128}/></div>
            <p className="text-[14px]">View Source Code</p>
          </div>
        </a>
      </div>
      
    </div>
  )
}

export default ProjectCard;