import React from "react";
import { FaStar } from "react-icons/fa";



const Ratings = ({tutor}) => {
  const starCounts = [5, 4, 3, 2, 1].map(
    (star) => tutor?.ratings?.filter((rate) => rate.rating === star).length
  );

  const totalRatings = tutor?.ratings.length;

  return (
    <section>
      <h1 className="font-bold uppercase text-xl">Ratings</h1>

      <div className="">
        <div className="flex gap-3 items-center">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow" />
          ))}
          <p className="text-sm">5.0</p>
          <p className="text-sm">({totalRatings} ratings)</p>
        </div>

        <div className="flex flex-col gap-2 mt-3">
          {[5, 4, 3, 2, 1].map((star, index) => {
            const count = starCounts[5 - star];
            const percentage = (count / totalRatings) * 100;

            return (
              <article key={index} className="flex gap-2 items-center sm:w-[70%] lg:w-[50%]">
                <p className="font-semibold text-sm">{star} star</p>
                <div className="h-4 w-[50%] bg-black/10 relative">
                  <div
                    className="h-full bg-yellow absolute top-0 left-0"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm">({count})</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
