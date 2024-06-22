import React from "react";
import { meetingdata } from "@/constants/data";

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
    <main className="py-8 custom-min-h flex flex-col items-center justify-center">
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

      <section className="gap-4 grid grid-cols-4 mt-10 text-white">
        {meetingdata.map((meeting) => (
          <div
            key={meeting.id}
            style={{ backgroundColor: `${meeting.color}` }}
            className="px-4 py-6 flex flex-col justify-between col-span-4 sm:col-span-2 lg:col-span-1 w-full xl:max-w-[300px] min-h-[240px] rounded-[14px] cursor-pointer"
          >
            <div className="text-center w-fit bg-white/20 p-2 rounded-[10px]">
              <meeting.icon size={32} />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">{meeting.title}</h1>
              <p className="text-lg font-normal">{meeting.content}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Dashboard;
