import React, { useState, useContext, useEffect } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [name, setName] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoaded(true);
  }, []);

  const destination = location.state?.destination;

  if (!destination) {
    return (
      <Fallback>
        <BackButton onClick={() => navigate('/')}>← Home</BackButton>
        <h2>No trip data found for slug: {slug}</h2>
      </Fallback>
    );
  }

  const handleBookNow = () => {
    navigate('/payment', {
      state: {
        bookingDetails: {
          destination,
          date,
          travelers,
          name,
        },
      },
    });
  };

  return (
    <PageWrapper isLoaded={isLoaded}>
      <Navbar />
      <HeroSection bgImage={destination.image} isLoaded={isLoaded}>
        <div className="overlay" />
        <HeroContent isLoaded={isLoaded}>
          <h1>{destination.title}</h1>
          <p>{destination.subTitle}</p>
          <BackButton onClick={() => navigate(-1)}>← Go Back</BackButton>
        </HeroContent>
      </HeroSection>

      <MainContent isLoaded={isLoaded}>
        <ContentLeft>
          <InfoCard isLoaded={isLoaded}>
            <TripTitle>{destination.title}</TripTitle>
            <SubTitle>{destination.subTitle}</SubTitle>
            <TripStats>
              <StatItem>
                <Label>Cost</Label>
                <Value>₹{destination.cost}</Value>
              </StatItem>
              <StatDivider />
              <StatItem>
                <Label>Duration</Label>
                <Value>{destination.duration}</Value>
              </StatItem>
            </TripStats>
          </InfoCard>

          <GallerySection isLoaded={isLoaded}>
            <SectionTitle>Photo Gallery</SectionTitle>
            <Gallery>
              {destination.gallery?.map((imgUrl, idx) => (
                <GalleryItem key={idx}>
                  <GalleryImage src={imgUrl} alt={`gallery-img-${idx}`} />
                </GalleryItem>
              ))}
            </Gallery>
          </GallerySection>
        </ContentLeft>

        <ContentRight>
          <BookingCard isLoaded={isLoaded}>
            <BookingTitle>Book Your Adventure</BookingTitle>
            <BookingContent>
              <PriceTag>
                <span>From</span>
                <Amount>₹{destination.cost}</Amount>
                <span>per person</span>
              </PriceTag>

              <FormGroup>
                <FormLabel>Full Name</FormLabel>
                <InputWrapper>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputWrapper>
              </FormGroup>

              <FormGroup>
                <FormLabel>Travel Date</FormLabel>
                <InputWrapper>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </InputWrapper>
              </FormGroup>

              <FormGroup>
                <FormLabel>Number of Travelers</FormLabel>
                <InputWrapper>
                  <Input
                    type="number"
                    min="1"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                  />
                </InputWrapper>
              </FormGroup>

              <TotalPrice>
                <span>Total Price:</span>
                <span>₹{destination.cost}</span>
              </TotalPrice>

              <BookNowButton onClick={handleBookNow}>
                Book Your Trip Now
              </BookNowButton>

              <GuaranteeText>
                <span>✓ Free cancellation up to 24 hours before</span>
                <span>✓ Secure payment gateway</span>
                <span>✓ Instant confirmation</span>
              </GuaranteeText>
            </BookingContent>
          </BookingCard>
        </ContentRight>
      </MainContent>
      <Testimonials />
      <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const BackButton = styled.button`
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  width: 100%;
  height: 75vh;
  background: url(${(props) => props.bgImage}) center/cover no-repeat;
  position: relative;

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.6)
    );
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: #fff;
  width: 90%;
  max-width: 800px;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 2.5rem;
  max-width: 1400px;
  margin: -60px auto 0;
  padding: 0 2rem 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1200px) {
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    padding: 0 1.5rem 3rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ContentRight = styled.div`
  position: sticky;
  top: 2rem;
  height: fit-content;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 450px;
  justify-self: end;

  @media (max-width: 1024px) {
    position: static;
    max-width: 100%;
  }
`;

const InfoCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const TripTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const TripStats = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
`;

const StatItem = styled.div`
  flex: 1;
  text-align: center;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: #ddd;
  margin: 0 1.5rem;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Value = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
`;

const GallerySection = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 3/2;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const BookingCard = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  width: 100%;
`;

const BookingTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  padding: 1.5rem;
  background: linear-gradient(135deg, #8338ec 0%, #3a86ff 100%);
  text-align: center;
`;

const BookingContent = styled.div`
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const PriceTag = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  span {
    display: block;
    color: #666;
    font-size: 0.9rem;

    &:last-child {
      margin-top: 0.25rem;
    }
  }
`;

const Amount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
  margin: 0.5rem 0;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: #4a4a4a;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #eee;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #8338ec;
    background: #fff;
    box-shadow: 0 0 0 4px rgba(131, 56, 236, 0.1);
  }

  &:hover {
    border-color: #8338ec;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  margin: 1.5rem 0;
  font-weight: 600;
  font-size: 1.1rem;
  box-sizing: border-box;
  width: 100%;
`;

const BookNowButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #8338ec 0%, #3a86ff 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(131, 56, 236, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const GuaranteeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Fallback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 1.5rem;
  text-align: center;
  padding: 2rem;

  h2 {
    color: #666;
    font-size: 1.5rem;
  }
`;
