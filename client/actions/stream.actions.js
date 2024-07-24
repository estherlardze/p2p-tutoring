// pages/api/tokenProvider.js

import { StreamClient } from "@stream-io/node-sdk";
import cookie from 'cookie';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_ID;

export default async function tokenProvider(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const cookies = cookie.parse(req.headers.cookie || '');
    const userId = cookies.studentId;

    if (!userId) {
      throw new Error('User is not logged in');
    }
    if (!apiKey) {
      throw new Error("API key missing");
    }
    if (!apiSecret) {
      throw new Error("API secret key missing");
    }

    const client = new StreamClient(apiKey, apiSecret);

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now() / 1000) - 60;

    const token = client.createToken(userId, exp, issued);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
