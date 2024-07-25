"use server"


import { StreamClient } from "@stream-io/node-sdk";
import { cookies } from 'next/headers'


const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_ID;

export const tokenProvider =  () => {
 
    const cookieStore = cookies()
    const { value } = cookieStore.get('studentId')   
    //console.log(value) 

    if (!value) {
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

    const token = client.createToken(value, exp, issued);

    return token;

}
