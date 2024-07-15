import React from 'react';

const BookingDetail = ({ booking }) => {
  return (
    <div>
       <p><strong>Student Name:</strong> {booking.name}</p>
      <p><strong>Student Email:</strong> {booking.email}</p>
      <p><strong>Course:</strong> {booking.course}</p>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.time}</p>
      <p><strong>Lesson Type:</strong> {booking.tutorialType}</p>
      <p><strong>Learning Goals:</strong> {booking.message}</p>

      <div className='mt-4 flex items-center gap-3'>
        <button className='bg-green text-sm px-2 py-1 font-semibold'>Accept offer</button>
        <button className='bg-[#b1353f] text-sm px-2 py-1 font-semibold'>Decline offer</button>
      </div>
    </div>
  );
};

export default BookingDetail;
