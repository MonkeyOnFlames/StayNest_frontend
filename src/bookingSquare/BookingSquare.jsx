import "./bookingSquare.css";
import Button from "../button/button";
import { useState } from "react";
import { getListingById } from "../api/listingService";
import { createBooking } from "../api/bookingService";

const BookingSquare = ({ listing }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nrOfGuests, setNrOfGuests] = useState("");
  const [error, setError] = useState("");
  let checkInDate = new Date(checkIn);
  let checkOutDate = new Date(checkOut);

  //Found this when i searched to calculate the days between dates:
  //https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
  const daysBetween = (startDate, endDate) => {
    // Convert dates to UTC timestamps
    let startUtc = Date.UTC(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    );
    let endUtc = Date.UTC(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    );

    // Calculate the time difference in milliseconds
    let timeDiff = Math.abs(endUtc - startUtc);

    // Convert milliseconds to days
    let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysDiff;
  };

  const totalPrice = (startDate, endDate, price) => {
    if (
      daysBetween(startDate, endDate) &&
      checkOut.trim().length === 10 &&
      checkIn.trim().length === 10
    ) {
      return (daysBetween(startDate, endDate) + 1) * price;
    } else {
      return 0;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!checkIn || !checkOut || !nrOfGuests) {
        throw new Error(
          "Check-in, Check-out and Number of guests are required"
        );
      }

      if (checkOut < checkIn) {
        throw new Error("Check-out cannot be before check-in");
      }

      {
        listing.availabilities.map((availability) => {
          if (
            availability.startDate >= checkIn &&
            availability.endDate <= checkOut
          ) {
            throw new Error("Listing is not avaialable for those dates");
          }
        });
      }

      if (checkInDate < new Date()) {
        throw new Error("You cannot book today or in the past");
      }

      await createBooking(listing.id, checkIn, checkOut /* , nrOfGuests */);
      console.log("Booking successful!");

      alert("Booking successful!");

      setCheckIn("");
      setCheckOut("");
      setNrOfGuests("");
      setError("");
    } catch (err) {
      setError(err.message);
      console.log("error: " + err);
    }
  };

  console.log("bookingS" + listing.availabilities);

  return (
    <div className="booking-square">
      <form onSubmit={handleSubmit}>
        <h2>{listing.price} / night</h2>
        <div className="check-in">
          <label htmlFor="checkIn">
            Check-In<br></br>
          </label>
          <input
            className="booking-input"
            type="date"
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
            className="booking-input"
            type="date"
            placeholder="2025-01-02"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="nr-of-guests">
          <label htmlFor="checkOut">
            Number of guests<br></br>
          </label>
          <input
            className="booking-input"
            type="number"
            placeholder="1"
            value={nrOfGuests}
            onChange={(e) => setNrOfGuests(e.target.value)}
          />
        </div>
        <p className="error-message">{error}</p>
        <Button text="Book now" type="submit" />
        <div className="total-price">
          Total price: {totalPrice(checkInDate, checkOutDate, listing.price)}
        </div>
      </form>
    </div>
  );
};

export default BookingSquare;
