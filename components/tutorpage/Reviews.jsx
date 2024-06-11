import React, { useState } from "react";
import { Pagination } from '@mantine/core';

const Reviews = ({ tutor }) => {
  const [activePage, setPage] = useState(1);
  const reviewsPerPage = 2;

  const startIndex = (activePage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = tutor.ratings.slice(startIndex, endIndex);

  return (
    <section className="relative my-[70px]">
      <h1 className="font-bold uppercase text-xl">Reviews from students</h1>

      <div>
        {currentReviews.map((review, i) => (
          <article key={i} className="flex my-4 items-start gap-3">
            <div className="rounded-full bg-white w-[40px] h-[40px] text-blue p-4 text-center border-[3px] border-blue text-3xl flex items-center justify-center">
              {review.name[0]}
            </div>
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-sm text-gray-1">{review.message}</p>
            </div>
          </article>
        ))}
         <Pagination 
        value={activePage} 
        onChange={setPage} 
        total={Math.ceil(tutor.ratings.length / reviewsPerPage)} 
        color="#042085"
      />
      </div>
    </section>
  );
};

export default Reviews;
