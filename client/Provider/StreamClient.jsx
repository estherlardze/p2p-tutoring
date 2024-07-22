import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-sdk';
import { useState, useEffect } from 'react';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
//   const userId = 'user-id';
//   const token = 'authentication-token';
//   const user= { id: userId };
  
//   const client = new StreamVideoClient({ apiKey, user, token });
//   const call = client.call('default', 'my-first-call');
//   call.join({ create: true });
  
 const StreamVideoProvider = ({ children }) => {
    const [videoClient, setVideoClient] = useState()

    useEffect(() => {
      const client = new StreamVideoClient({ apiKey });
      setVideoClient(client);
    }, []);


    return (
      <StreamVideo client={videoClient}>
        
      </StreamVideo>
    );
  };

  export default StreamVideoProvider