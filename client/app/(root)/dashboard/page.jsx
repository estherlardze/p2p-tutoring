
// import VideoLayout from "@/components/dashboard/VideoLayout";
// import {
//   StreamCall,
//   StreamVideo,
//   StreamVideoClient,
// } from "@stream-io/video-react-sdk";
// import '@stream-io/video-react-sdk/dist/css/styles.css';
 import MeetingTyprList from "@/components/dashboard/MeetingTyprList";


// const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
// const token = process.env.NEXT_PUBLIC_STREAM_TOKEN;
// const userId = process.env.NEXT_PUBLIC_STREAM_USER_ID;
// const callId = process.env.NEXT_PUBLIC_STREAM_CALL_ID;

// const user = {
//   id: userId,
//   name: "Oliver",
//   image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
// };

// const client = new StreamVideoClient({ apiKey, user, token });

// export default function Dashboard() {
//   const call = client.call("default", callId);
//   call.join({ create: true });

//   return (
//     <StreamVideo client={client}>
//       <StreamCall call={call}>
//         <VideoLayout />
//       </StreamCall>
//     </StreamVideo>
//   );
// }



const Dashboard = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <main className="py-8  flex flex-col items-center justify-center">
      <section className="h-[200px] w-full 2xl:max-w-[1500px] rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full text-white flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold lg:text-4xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-[20px]">{date}</p>
          </div>
        </div>
      </section>

     <MeetingTyprList/>
    </main>
  );
};

export default Dashboard;
