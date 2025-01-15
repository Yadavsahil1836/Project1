import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // <-- For routing

/* ==================== Animations ==================== */
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ==================== Styled Components ==================== */

// Main page container with extra padding and a light gradient background
const PageContainer = styled.div`
  min-height: 100vh;
  padding: 3rem; /* Increased from 2rem to create more space */
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to bottom right, #f3f4f6, #ffffff);
  max-width: 1200px;
`;

// Page title
const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
`;

// Subheading for hotels/flights
const SubTitle = styled.h3`
  margin: 2rem 0 1rem;
  font-size: 1.3rem;
  color: #333;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
`;

/**
 * CardGrid: using flex so we can justify space-between,
 * add gap, and ensure there's extra spacing in the middle.
 */
const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Leaves space between items */
  gap: 2rem; /* Gap between rows/columns */
  padding: 2rem 0; /* Extra vertical padding within the grid */
`;

/**
 * FlipContainer: holds each flipping card with perspective,
 * so the 3D rotation is visible.
 */
const FlipContainer = styled.div`
  perspective: 1000px; /* This gives a 3D perspective for the flip effect */
  width: 250px; /* You can tweak card width as desired */
  animation: ${fadeInUp} 0.6s ease forwards;
`;

/**
 * The actual flipping card, which rotates on hover
 */
const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);

  &:hover {
    transform: rotateY(180deg);
  }
`;

/**
 * Both the front and back of the card share some properties
 */
const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  backface-visibility: hidden; /* Hide the "back" when facing front */
`;

/* ------------- Front side ------------- */
const CardFront = styled(CardFace)`
  background: ${({ bgUrl }) => `url(${bgUrl}) center / cover no-repeat`};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: #fff;
  padding: 1rem;
  /* Subtle gradient overlay at the bottom for text clarity */
  background-image: ${({ bgUrl }) =>
    `linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%), url(${bgUrl})`};

  /* We can place a simple label at the bottom left */
  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }
`;

/* ------------- Back side ------------- */
const CardBack = styled(CardFace)`
  background: linear-gradient(to bottom right, #0284c7, #06b6d4);
  transform: rotateY(180deg);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

// Common text on the back side
const BackText = styled.p`
  margin: 0.5rem 0;
  font-size: 0.95rem;
`;

// Price text with emphasis
const PriceText = styled.p`
  margin: 0.75rem 0;
  font-weight: bold;
  font-size: 1rem;
  color: #ffe066; /* Gold-ish */
`;

// Star rating container
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * Action button on the back side
 */
const ActionButton = styled.button`
  background-color: #fff;
  color: #0284c7;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 1rem;
  align-self: flex-start;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #e5e7eb;
  }
`;

// Spinner for loading state
const Spinner = styled.div`
  margin: 2rem auto;
  border: 6px solid #ccc;
  border-top: 6px solid #0284c7;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.8s linear infinite;
`;

// Error message
const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  margin-top: 2rem;
`;

// No data or fallback message
const NoDataMessage = styled.p`
  text-align: center;
  color: #666;
  margin-top: 2rem;
`;

/* ==================== Optional: Star Rating Component ==================== */
function StarRating({ rating }) {
  const stars = []; 
  let remaining = rating;

  for (let i = 0; i < 5; i++) {
    if (remaining >= 1) {
      stars.push(<FaStar key={i} color="#fbbf24" />); // full star
    } else if (remaining > 0) {
      stars.push(<FaStarHalfAlt key={i} color="#fbbf24" />); // half star
    } else {
      stars.push(<FaRegStar key={i} color="#fbbf24" />); // empty star
    }
    remaining--;
  }

  return <>{stars}</>;
}

/* ==================== Main Component ==================== */
function SearchPage() {
  const [searchData, setSearchData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // <-- React Router hook for navigation

  useEffect(() => {
    fetchSearchResults();
  });

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await axios.post('http://localhost:1029/api/v1/search');

      // Typical API response shape:
      // { success: true, data: { hotels: [...], flights: [...] }, message: "..." }
      setSearchData(response.data.data);
    } catch (err) {
      console.error('Error fetching results:', err);
      setError('Failed to load search results');
    } finally {
      navigate('/');
    }
  };

  // Handler for Hotel Booking button
  const handleHotelBooking = (hotel) => {
    // Navigate to the booking page, passing hotel details via `state`
    navigate('/booking', {
      state: {
        type: 'hotel',
        name: hotel.name,
        price: hotel.price,
        rating: hotel.rating,
        checkIn: hotel.checkIn,
        checkOut: hotel.checkOut,
      },
    });
  };

  // Handler for Flight Ticket button
  const handleFlightBooking = (flight) => {
    // Navigate to the booking page, passing flight details
    navigate('/booking', {
      state: {
        type: 'flight',
        airline: flight.airline,
        price: flight.price,
        flightNo: flight.flightNo,
        checkIn: flight.checkIn,
        checkOut: flight.checkOut,
      },
    });
  };

  // ======= Render States =======
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!searchData)
    return <NoDataMessage>No data found yet. Try again later.</NoDataMessage>;

  // ======= JSX =======
  return (
    <PageContainer>
      <SectionTitle>Search Results</SectionTitle>

      {/* Hotels Section */}
      <SubTitle>Hotels</SubTitle>
      {searchData.hotels && searchData.hotels.length > 0 ? (
        <CardGrid>
          {searchData.hotels.map((hotel, index) => (
            <FlipContainer key={index}>
              <FlipCard>
                {/* Front side: background image + hotel name */}
                <CardFront bgUrl="https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90ZWx8ZW58MHx8MHx8fDA%3D">
                  <h4>{hotel.name}</h4>
                </CardFront>

                {/* Back side: details, rating, price, etc. */}
                <CardBack>
                  <RatingContainer>
                    <StarRating rating={parseFloat(hotel.rating)} />
                    <span style={{ marginLeft: '8px', fontSize: '0.85rem' }}>
                      {hotel.rating}
                    </span>
                  </RatingContainer>
                  <PriceText>${hotel.price}</PriceText>
                  <BackText>Check-In: {hotel.checkIn}</BackText>
                  <BackText>Check-Out: {hotel.checkOut}</BackText>

                  <ActionButton onClick={() => handleHotelBooking(hotel)}>
                    Book Now
                  </ActionButton>
                </CardBack>
              </FlipCard>
            </FlipContainer>
          ))}
        </CardGrid>
      ) : (
        <NoDataMessage>No hotels found.</NoDataMessage>
      )}

      {/* Flights Section */}
      <SubTitle>Flights</SubTitle>
      {searchData.flights && searchData.flights.length > 0 ? (
        <CardGrid>
          {searchData.flights.map((flight, index) => (
            <FlipContainer key={index}>
              <FlipCard>
                {/* Front side: background image + airline name */}
                <CardFront bgUrl="https://plus.unsplash.com/premium_photo-1679830513990-82a4280f41b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmxpZ2h0fGVufDB8fDB8fHww">
                  <h4>{flight.airline}</h4>
                </CardFront>

                {/* Back side: details, price, etc. */}
                <CardBack>
                  <PriceText>${flight.price}</PriceText>
                  <BackText>Flight No: {flight.flightNo}</BackText>
                  <BackText>Departure: {flight.checkIn}</BackText>
                  <BackText>Arrival: {flight.checkOut}</BackText>

                  <ActionButton onClick={() => handleFlightBooking(flight)}>
                    Buy Ticket
                  </ActionButton>
                </CardBack>
              </FlipCard>
            </FlipContainer>
          ))}
        </CardGrid>
      ) : (
        <NoDataMessage>No flights found.</NoDataMessage>
      )}
    </PageContainer>
  );
}

export default SearchPage;
