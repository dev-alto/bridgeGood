"use client";

import { useContext } from 'react';
import Navigation from '@/components/navigation.component';
import ProfileBody from '@/routes/profile.route';
import { signOutUser } from '../../utils/firebase.util';
import { UserContext } from '../../context/user.context';
import Link from 'next/link';

import React from 'react'

const Profile = () => {
  const { setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    signOutUser();
    setCurrentUser(null);
  }
  return (
    <div>
      <Navigation />
      <ProfileBody />
      <button onClick={signOutHandler} className="bg-[#C7932D] px-[30px] py-[10px] text-white rounded-[5px]">
      <Link href="..">Logout</Link>
      </button>
    </div>
  )
}

export default Profile;