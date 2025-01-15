import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';
import styled from 'styled-components';

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state?.bookingDetails;

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [processing, setProcessing] = useState(false);

  if (!bookingDetails) {
    return (
      <FallbackWrapper>
        <FallbackContent>
          <h2>No booking details found</h2>
          <BackButton onClick={() => navigate('/')}>
            <ArrowLeft className="icon" />
            Return Home
          </BackButton>
        </FallbackContent>
      </FallbackWrapper>
    );
  }

  const totalAmount =
    bookingDetails.destination.cost * bookingDetails.travelers;

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      navigate('/payment-success', {
        state: { bookingDetails },
      });
    }, 2000);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(' ') : value;
  };

  return (
    <StyledPage>
      <StyledContainer>
        <BackLink onClick={() => navigate(-1)}>
          <ArrowLeft className="icon" />
          Back to Booking
        </BackLink>

        <StyledGrid>
          {/* Payment Form Section */}
          <Card>
            <Header>
              <h1>Complete Your Payment</h1>
              <SecureLabel>
                <Lock className="icon" />
                Secure Payment
              </SecureLabel>
            </Header>

            <form onSubmit={handleSubmit}>
              <FormContent>
                <FormGroup>
                  <Label>Card Number</Label>
                  <InputWrapper>
                    <Input
                      type="text"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(formatCardNumber(e.target.value))
                      }
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                    <CardIcon>
                      <CreditCard />
                    </CardIcon>
                  </InputWrapper>
                </FormGroup>

                <CardDetails>
                  <FormGroup>
                    <Label>Expiry Date</Label>
                    <Input
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>CVV</Label>
                    <Input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      maxLength={3}
                      required
                    />
                  </FormGroup>
                </CardDetails>

                <SubmitButton type="submit" disabled={processing}>
                  {processing ? (
                    <ProcessingState>
                      <Spinner />
                      Processing...
                    </ProcessingState>
                  ) : (
                    `Pay ₹${bookingDetails.destination.cost.toLocaleString()}`
                  )}
                </SubmitButton>
              </FormContent>
            </form>
          </Card>

          {/* Order Summary Section */}
          <Card>
            <h2>Order Summary</h2>
            <OrderSummary>
              <SummaryRow>
                <Label>Destination:</Label>
                <span>{bookingDetails.destination.title}</span>
              </SummaryRow>
              <SummaryRow>
                <Label>Travel Date:</Label>
                <span>{bookingDetails.date}</span>
              </SummaryRow>
              <SummaryRow>
                <Label>Number of Travelers:</Label>
                <span>{bookingDetails.travelers}</span>
              </SummaryRow>
              <SummaryRow>
                <Label>Price per Person:</Label>
                <span>₹{bookingDetails.destination.cost.toLocaleString()}</span>
              </SummaryRow>
              <TotalRow>
                <span>Total:</span>
                <span>₹{bookingDetails.destination.cost.toLocaleString()}</span>
              </TotalRow>
            </OrderSummary>
          </Card>
        </StyledGrid>
      </StyledContainer>
    </StyledPage>
  );
}

/* Styled Components */
const StyledPage = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f3f4f6, #e5e7eb);
  padding: 2rem 1rem;
`;

const StyledContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const BackLink = styled.button`
  display: flex;
  align-items: center;
  color: #4b5563;
  font-size: 0.875rem;
  background: none;
  border: none;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    color: #1f2937;
  }

  .icon {
    margin-right: 0.5rem;
  }
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.5rem;
    color: #1f2937;
  }
`;

const SecureLabel = styled.div`
  display: flex;
  align-items: center;
  color: #10b981;
  font-size: 0.875rem;

  .icon {
    margin-right: 0.5rem;
  }
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #4b5563;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #d1d5db;
  border-radius: 8px;

  &:focus {
    border-color: #6366f1;
    outline: none;
  }
`;

const CardIcon = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const CardDetails = styled.div`
  display: flex;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #6366f1;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;

  &:hover:not(:disabled) {
    background: #4f46e5;
  }

  &:disabled {
    opacity: 0.7;
  }
`;

const ProcessingState = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Spinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid #ffffff;
  border-top-color: #4f46e5;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalRow = styled(SummaryRow)`
  font-weight: bold;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`;

const FallbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f3f4f6;
`;

const FallbackContent = styled.div`
  text-align: center;

  h2 {
    color: #1f2937;
  }
`;

const BackButton = styled.button`
  padding: 0.5rem 1rem;
  color: #fff;
  background: #6366f1;
  border: none;
  border-radius: 8px;

  &:hover {
    background: #4f46e5;
  }
`;
