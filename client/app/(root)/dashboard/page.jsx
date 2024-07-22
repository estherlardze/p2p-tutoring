import MeetingTyprList from "@/components/dashboard/MeetingTyprList";


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
