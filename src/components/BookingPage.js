import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

const BookingContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  font-family: 'Arial', sans-serif;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const BookingTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const BookingDetail = styled.p`
  margin: 0.5rem 0;
`;

const ActionButton = styled.button`
  background-color: #0284c7;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #0369a1;
  }
`;

function BookingPage() {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  if (!user || user === null) {
    navigate('/Login');
  }

  // The "state" object passed from the navigate call:
  // e.g. { type: 'hotel', name: ..., price: ..., ... }
  const { state } = location || {};

  if (!state) {
    return (
      <BookingContainer>
        <BookingTitle>No booking details found.</BookingTitle>
        <ActionButton onClick={() => navigate('/')}>
          Go Back to Search
        </ActionButton>
      </BookingContainer>
    );
  }

  const handleConfirmBooking = () => {
    // Implement your booking confirmation logic here
    alert('Booking Confirmed!');
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <BookingContainer>
        <BookingTitle>
          Complete Your {state.type === 'hotel' ? 'Hotel' : 'Flight'} Booking
        </BookingTitle>

        {/* Example: Show details conditionally based on type */}
        {state.type === 'hotel' && (
          <>
            <BookingDetail>
              <strong>Hotel Name:</strong> {state.name}
            </BookingDetail>
            <BookingDetail>
              <strong>Price:</strong> ${state.price}
            </BookingDetail>
            <BookingDetail>
              <strong>Rating:</strong> {state.rating}
            </BookingDetail>
            <BookingDetail>
              <strong>Check-In:</strong> {state.checkIn}
            </BookingDetail>
            <BookingDetail>
              <strong>Check-Out:</strong> {state.checkOut}
            </BookingDetail>
          </>
        )}

        {state.type === 'flight' && (
          <>
            <BookingDetail>
              <strong>Airline:</strong> {state.airline}
            </BookingDetail>
            <BookingDetail>
              <strong>Price:</strong> ${state.price}
            </BookingDetail>
            <BookingDetail>
              <strong>Flight No:</strong> {state.flightNo}
            </BookingDetail>
            <BookingDetail>
              <strong>Departure:</strong> {state.checkIn}
            </BookingDetail>
            <BookingDetail>
              <strong>Arrival:</strong> {state.checkOut}
            </BookingDetail>
          </>
        )}

        {/* Common confirm button for both types */}
        <ActionButton onClick={handleConfirmBooking}>
          Confirm Booking
        </ActionButton>
      </BookingContainer>
      <Footer />
    </>
  );
}

export default BookingPage;
