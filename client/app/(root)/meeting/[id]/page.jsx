"use client"

import React, {useState} from 'react'
import cookies from 'js-cookie'
import { StreamCall, StreamTheme, Call } from '@stream-io/video-react-sdk';
import MeetingRoom from '@/components/meeting/MeetingRoom';
import MeetingSetup from '@/components/meeting/MeetingSetup';
import { useGetCallById } from '@/Hooks/useGetCallById';
import Loader from '@/components/Loader';

const Meeting = ({ params : { id } }) => {
  const[isSetupComplete, setIsSetupComplete] = useState(false)
  const { call, isCallLoading } = useGetCallById(id)
 // console.log(call)

  
  const user = cookies.get("userId");

 if(isCallLoading) return <Loader/>
 
 if (!call) return (
  <p className="text-center text-3xl font-bold text-white">
    Call Not Found
  </p>
);

  return (
    <main className='w-screen h-screen flex justify-center items-center relative'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (<MeetingSetup setIsSetupComplete={setIsSetupComplete}/>)  : (<MeetingRoom />)}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting
