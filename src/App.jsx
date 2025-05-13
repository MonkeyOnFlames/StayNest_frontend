import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./login/Register";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./header/header";
import Footer from "./footer/Footer";
import BookingSquare from "./bookingSquare/BookingSquare";

const checkIn = "2025-05-01";
const checkOut = "2025-12-31";

  const availability = {
    startDate: checkIn,
    endDate: checkOut,
  };

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <>
        <div className="layout">
        

          <Header /> 
          
          <BookingSquare price={1000} availabilities={[availability]}/>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          
          <Footer  />
          </div>
        </>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
