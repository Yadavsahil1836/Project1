// src/components/TripDetails.js
import React, { useState, useContext } from 'react';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import Footer from './Footer';
import { AuthContext } from '../context/AuthContext';

export default function TripDetails() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  if (!user || user === null) {
    navigate('/Login');
  }

  // Booking form states
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [name, setName] = useState('');

  // Destination object passed via state (including the gallery)
  const destination = location.state?.destination;

  // Fallback if no data
  if (!destination) {
    return (
      <Fallback>
        <button onClick={() => navigate('/')}>← Home</button>
        <h2>No trip data found for slug: {slug}</h2>
      </Fallback>
    );
  }

  const handleBookNow = () => {
    alert(
      `Booking trip: ${destination.title}\n` +
        `Date: ${date}\nTravelers: ${travelers}\nName: ${name}\n\nCost: ₹${destination.cost}`,
    );
  };

  return (
    <>
      <Navbar />
      <HeroSection bgImage={destination.image}>
        <div className="overlay" />
        <div className="hero-content">
          <h1>{destination.title}</h1>
          <p>{destination.subTitle}</p>
          <button onClick={() => navigate(-1)} className="back-btn">
            ← Go Back
          </button>
        </div>
      </HeroSection>

      <Container>
        {/* LEFT COLUMN */}
        <LeftSection>
          {/* Rectangle Info Box */}
          <InfoBox>
            <h2>{destination.title}</h2>
            <p className="subtitle">{destination.subTitle}</p>
            <DetailsRow>
              <span>
                <strong>Cost:</strong> ₹{destination.cost}
              </span>
              <span>
                <strong>Duration:</strong> {destination.duration}
              </span>
            </DetailsRow>
          </InfoBox>

          {/* Masonry Gallery from the destination.gallery array */}
          <h3>Gallery</h3>
          <MasonryGallery>
            {destination.gallery?.map((imgUrl, idx) => (
              <div className="masonry-item" key={idx}>
                <img src={imgUrl} alt={`gallery-img-${idx}`} />
              </div>
            ))}
          </MasonryGallery>
        </LeftSection>

        {/* RIGHT COLUMN: BOOKING FORM */}
        <RightSection>
          <h3 className="form-heading">Book Your Trip</h3>
          <FormGroup>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label>Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label>Number of Travelers</label>
            <input
              type="number"
              min="1"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
            />
          </FormGroup>
          <BookButton onClick={handleBookNow}>Book Now</BookButton>
        </RightSection>
      </Container>
      <Testimonials />
      <Footer />
    </>
  );
}

/* STYLED COMPONENTS */
const Fallback = styled.div`
  margin: 2rem;
  text-align: center;
  button {
    background: #333;
    color: #fff;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1rem;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  height: 60vh;
  background: url(${(props) => props.bgImage}) center/cover no-repeat;
  position: relative;

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    color: #fff;
    max-width: 600px;
    margin: 0 auto;

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1rem;
      margin-bottom: 1rem;
      color: #f0f0f0;
    }
    .back-btn {
      background: #8338ec;
      border: none;
      color: #fff;
      padding: 0.6rem 1.2rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease;
      &:hover {
        background: #4c1a9b;
      }
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSection = styled.div``;

/* Rectangle Box */
const InfoBox = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 0.5rem;
    color: #333;
  }
  .subtitle {
    color: #666;
    margin-bottom: 1rem;
  }
`;
const DetailsRow = styled.div`
  display: flex;
  gap: 2rem;
  span {
    font-size: 0.95rem;
    color: #444;
  }
`;

/* MASONRY GALLERY for the gallery array */
const MasonryGallery = styled.div`
  column-count: 3;
  column-gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    column-count: 2;
  }
  @media (max-width: 576px) {
    column-count: 1;
  }

  .masonry-item {
    margin-bottom: 1rem;
    border-radius: 6px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      border-radius: 6px;
      transition: transform 0.3s ease;
    }
    &:hover img {
      transform: scale(1.03);
    }
  }
`;

/* RIGHT SECTION (BOOKING) */
const RightSection = styled.div`
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  height: fit-content;
  .form-heading {
    margin-bottom: 1rem;
    text-align: center;
    color: #333;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.3rem;
  }
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const BookButton = styled.button`
  margin-top: 1rem;
  background-color: #8338ec;
  color: #fff;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4c1a9b;
  }
`;
