import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import styled from 'styled-components';

export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state?.bookingDetails;

  if (!bookingDetails) {
    navigate('/');
    return null;
  }

  return (
    <PageWrapper>
      <SuccessCard>
        <IconWrapper>
          <CheckCircle className="icon" />
        </IconWrapper>

        <Title>Payment Successful!</Title>
        <Message>
          Your booking for {bookingDetails.destination.title} has been
          confirmed.
        </Message>

        <BookingDetails>
          <DetailRow>
            <Label>Booking Reference</Label>
            <Value>
              #{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </Value>
          </DetailRow>
          <DetailRow>
            <Label>Travel Date</Label>
            <Value>{bookingDetails.date}</Value>
          </DetailRow>
          <DetailRow>
            <Label>Travelers</Label>
            <Value>{bookingDetails.travelers}</Value>
          </DetailRow>
          <DetailRow>
            <Label>Total Amount</Label>
            <Value>₹{bookingDetails.destination.cost.toLocaleString()}</Value>
          </DetailRow>
        </BookingDetails>

        <HomeButton onClick={() => navigate('/')}>
          Return to Home
          <ArrowRight className="icon" />
        </HomeButton>

        <EmailNote>
          A confirmation email has been sent to your registered email address.
        </EmailNote>
      </SuccessCard>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const SuccessCard = styled.div`
  max-width: 28rem;
  width: 100%;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 2rem;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #ecfdf5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  .icon {
    width: 2.5rem;
    height: 2.5rem;
    color: #059669;
  }
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
`;

const Message = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
`;

const BookingDetails = styled.div`
  background-color: #f8fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid #e2e8f0;
  }
`;

const Label = styled.span`
  color: #64748b;
  font-size: 0.875rem;
`;

const Value = styled.span`
  color: #1e293b;
  font-weight: 600;
`;

const HomeButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(to right, #6366f1, #4f46e5);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1.5rem;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgb(99 102 241 / 0.3);
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 0.5rem;
  }
`;

const EmailNote = styled.p`
  color: #64748b;
  font-size: 0.875rem;
`;
