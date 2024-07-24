"use client"
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-sdk';
import { useState, useEffect } from 'react';
import cookies from 'js-cookie';
import { tokenProvider } from '@/actions/stream.actions';

  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY

  
 const StreamVideoProvider = ({ children }) => {
    const [videoClient, setVideoClient] = useState()
    const userId = cookies.get("studentId");


    useEffect(() => {
      if(!userId) return;
      if(!apiKey) throw new Error ("Stream API key missing")

      const client = new StreamVideoClient({
        apiKey,
        user: {
          id: userId, 
        },
        tokenProvider,
      })

      setVideoClient(client);


    }, [userId]);

    if(!videoClient) return "Loading..."


    return (
      <StreamVideo client={videoClient}>
        {children}
      </StreamVideo>
    );
  };

  export default StreamVideoProvider