import "./bookingSquare.css";
import Button from "../button/button";
import { useState } from "react";

function BookingSquare(id, availabilities, price) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");
  let checkInDate = new Date(checkIn);
  let checkOutDate = new Date(checkOut);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!checkIn || !checkOut) {
        throw new Error("Check-in and Check-out are required");
      }

      if (!checkInDate || !checkOutDate) {
        throw new Error("You need to type in a date");
      }

      if (checkOutDate < checkInDate) {
        throw new Error("Check-out cannot be before check-in");
      }

      

      let bookingAvailability = {
        startDate: checkIn,
        endDate: checkOut,
      };
      console.log(bookingAvailability)
      console.log(availabilities)
      {
        availabilities.map((availability) => {
          if (
            availability.startDate <= bookingAvailability.startDate &&
            availability.endDate >= bookingAvailability.endDate
          ) {
          } else {
            throw new Error("Listing is not vaialable for those dates");
          }

          setError("");
        });
      }
    } catch (err) {
      setError(err.message);
      console.log("error: " + err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{price} / night</h2>
        <div className="check-in">
          <label htmlFor="checkIn">
            Check-In<br></br>
          </label>
          <input
            type="text"
            placeholder="2025-01-01"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="check-out">
          <label htmlFor="checkOut">
            Check-Out<br></br>
          </label>
          <input
            type="text"
            placeholder="2025-01-02"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="nr-of-guests"></div>
        <p className="error-message">{error}</p>
        <Button text="Book now" type="submit" />
        <div className="price-info"></div>
        <div className="total-price"></div>
      </form>
    </div>
  );
}

export default BookingSquare;
