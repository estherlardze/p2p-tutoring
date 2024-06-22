'use client'

import React, { useState } from 'react';
import { Container, Table, Button, Title, Modal } from '@mantine/core';
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
    <Container>
      <Title align="center" my="lg" striped>Bookings</Title>
      <div className='overflow-x-scroll flex items-center'>
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>Course</th>
              <th>Date</th>
              <th>Time</th>
              <th>Lesson Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.course}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.lessonType}</td>
                <td>
                  <Button variant="outline" onClick={() => handleViewDetails(booking)}>View Details</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal
        opened={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        title="Booking Details"
      >
        {selectedBooking && <BookingDetail booking={selectedBooking} />}
      </Modal>
    </Container>
  );
};

export default TutorDashboard;
