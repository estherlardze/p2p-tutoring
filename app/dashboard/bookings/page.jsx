'use client'

import React, { useState } from 'react';
import { Modal, Button as MantineButton } from '@mantine/core';
import BookingDetail from '../../../components/BookingDetail';
import { bookings } from '@/constants/data';

const TutorDashboard = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setDetailModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-center my-4 text-2xl font-bold">Requests from students</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white ">
          <thead className='bg-blue/20'>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b border-gray-2">Course</th>
              <th className="py-2 px-4 border-b border-gray-2">Date</th>
              <th className="py-2 px-4 border-b border-gray-2">Time</th>
              <th className="py-2 px-4 border-b border-gray-2">Lesson Type</th>
              <th className="py-2 px-4 border-b border-gray-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr key={booking.id} className={index % 2 === 0 ? 'bg-gray-2/20' : 'bg-white'}>
                <td className="py-2 px-4 border-b border-gray-2">{booking.course}</td>
                <td className="py-2 px-4 border-b border-gray-2">{booking.date}</td>
                <td className="py-2 px-4 border-b border-gray-2">{booking.time}</td>
                <td className="py-2 px-4 border-b border-gray-2">{booking.lessonType}</td>
                <td className="py-2 px-4 border-b border-gray-2 text-center">
                  <button
                    className="bg-blue/70 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                    onClick={() => handleViewDetails(booking)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        opened={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        title="Booking Details"
        centered
      >
        {selectedBooking && <BookingDetail booking={selectedBooking} />}
      </Modal>
    </div>
  );
};

export default TutorDashboard;
