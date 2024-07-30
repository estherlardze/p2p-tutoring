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
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }) => {
  const [videoClient, setVideoClient] = useState(null);
  const userId = cookies.get("userId");

  useEffect(() => {
    const fetchStudentName = async () => {
      if (!apiKey) {
        console.error("Stream API key missing");
        return;
      }

      if (!userId) {
        console.error("User ID missing");
        return;
      }

      try {
        const studentQuery = query(
          collection(db, "Students"),
          where("uid", "==", userId)
        );
        const studentSnapshot = await getDocs(studentQuery);

        if (studentSnapshot.empty) {
          console.error("Student not found");
          return;
        }

        const studentDoc = studentSnapshot.docs[0];
        const studentData = studentDoc.data();
        const userName = `${studentData.firstName} ${studentData.lastName}`;

        const client = new StreamVideoClient({
          apiKey,
          user: {
            id: userId,
            name: userName,
            imageUrl: tuto1,
          },
          tokenProvider,
        });

        setVideoClient(client);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentName();
  }, [userId]);

  if (!videoClient) return <Loader />;

  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;
