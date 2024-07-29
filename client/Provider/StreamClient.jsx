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
import { tuto1 } from '../public/index';
import Loader from '@/components/Loader';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }) => {
  const [videoClient, setVideoClient] = useState(null);
  const userId = cookies.get("userId");
  console.log(userId)

  useEffect(() => {
    if (!apiKey) {
      console.error("Stream API key missing");
      return;
    }

    if (!userId) {
      console.error("User ID missing");
      return;
    }

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
        name: userId,
        imageUrl: tuto1,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [userId]);

  if (!videoClient) return <Loader/>;

  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;
