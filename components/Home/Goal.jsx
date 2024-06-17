import React from "react";

const Goal = () => {
  return (
    <section className="bg-goal bg-cover bg-center bg-no-repeat bg-fixed h-fit sm:h-[70vh] w-full">
      <div className="bg-black/60 w-hull h-fit sm:h-[70vh]">
        <div className="flex items-center justify-center py-8 sm:h-[70vh] text-white w-[70%] mx-[15%] 2xl:w-[1500px] 2xl:mx-auto">
          <p className="text-center text-md font-slang sm:text-2xl font-semibold">
            {" "}
            The goal of peer-to-peer tutoring services is to help students learn
            and understand academic material more effectively by pairing them
            with other students who have a strong grasp of the subject
          </p>
        </div>
      </div>
    </section>
  );
};

export default Goal;
