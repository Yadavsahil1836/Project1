import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './routes/Home';
import About from './routes/About';
import Tours from './routes/Tours';
import Contacts from './routes/Contact';
import TripDetails from './components/TripDetails';
import Login from './routes/Login';
import SearchResults from './components/SearchResults';
import BookingPage from './components/BookingPage';
import SignupPage from './routes/Loginreg/SignupPage';
import PaymentPage from './components/PaymentPage';
import PaymentSuccess from './components/PaymentSuccess';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Tours />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/trip/:slug" element={<TripDetails />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
