"use client"

import React, {useState} from 'react'
import cookies from 'js-cookie'
import { StreamCall, StreamTheme, Call } from '@stream-io/video-react-sdk';
import MeetingRoom from '@/components/meeting/MeetingRoom';
import MeetingSetup from '@/components/meeting/MeetingSetup';
import { useGetCallById } from '@/Hooks/useGetCallById';

const Meeting = ({ params : { id } }) => {
  const[isSetupComplete, setIsSetupComplete] = useState(false)
  const { call, isCallLoading } = useGetCallById(id)
 // console.log(call)

  
  const user = cookies.get("studentId");

 if(isCallLoading) return "meeting is loading..."
 
 if (!call) return (
  <p className="text-center text-3xl font-bold text-white">
    Call Not Found
  </p>
);

  return (
    <main className='w-full h-screen'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (<MeetingSetup setIsSetupComplete={setIsSetupComplete}/>)  : (<MeetingRoom />)}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting
