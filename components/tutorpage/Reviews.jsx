import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { hf1, background } from "@/public";
import Image from "next/image";

const Reviews = ({tutor}) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };

    embla.on("select", onSelect);
    onSelect();

    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
      <section className="relative my-10">
        <div className="embla overflow-hidden " ref={emblaRef}>
          <div className="flex">
            {tutor.ratings?.map((review, index) => (
              <div className="flex-[0_0_100%] w-full" key={index}>
                <div className="flex flex-col items-center justify-center gap-2 text-gray-700">
                  <h1 className="font-bold text-2xl">{review.name}</h1>
                  <p>{review.department}</p>

                  <div className="h-[250px] w-[600px] mt-4 relative">
                    <Image src={background} alt="bg" className="w-full" />
                    <small className="absolute right-0 font-semibold -top-8">
                      {`0${selectedIndex + 1}/0${tutor.ratings?.length}`}
                    </small>
                    <blockquote className="absolute inset-0 text-white text-gray-300 mx-6 flex items-center justify-center my-auto">
                      {review.message}
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-[50%] text-white cursor-pointer border-2 border-blue p-1 rounded-full transform -translate-y-[50%] left-4"
          onClick={scrollPrev}
        >
          <LuArrowLeft size={45} className="bg-blue p-3 rounded-full" />
        </button>
        <button
          className="absolute top-[50%] text-white cursor-pointer border-2 border-blue p-1 rounded-full transform -translate-y-[50%] right-8"
          onClick={scrollNext}
        >
          <LuArrowRight size={45} className="bg-blue p-3 rounded-full" />
        </button>
    </section>
  );
};

export default Reviews;
