'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '@/context/user.context';
import { signOutUser } from '@/utils/firebase.util';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    signOutUser();
    setCurrentUser(null);
    console.log(currentUser);
  };

  return (
    <div className="max-w-[1260px] mx-auto">
      <div className="flex justify-between m-5 items-center">
        <div className="cursor-pointer">
          <Link href="../">
            <Image src="/assets/BridgeGood.png" width={126} height={20} alt="bridgeGood" />
          </Link>
        </div>
        <div className="flex justify-between gap-[50px] items-center">
          <a href="/careerDiscovery" className="cursor-pointer">Career Discover</a>
          <a href="/careerPathway" className="cursor-pointer">Career Pathway</a>
          {
            currentUser ? 
            ( <button className="bg-[#C7932D] px-[30px] py-[10px] text-white rounded-[5px]">
               <Link href="/profile">Profile</Link>
            </button> ) :
            ( <button className="bg-[#C7932D] px-[30px] py-[10px] text-white rounded-[5px]">
              <Link href="/authentication">Log In</Link>
            </button> ) 
            
          }
          
        </div>
      </div>
    </div>
  )
}

export default Navigation