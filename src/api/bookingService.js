import api from "./axios";

export const getBookingById = async (id) => {
  try {
    const response = await api.get(`/api/bookings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const deleteBooking = async (id) => {
  try {
    const response = await api.delete(`/api/bookings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const createBooking = async (listingId, totalAmount, startDate, endDate) => {
  try {
    const response  = await api.post("/api/bookings", {
      listingId,
      totalAmount,
      startDate,
      endDate,
    });
    return response.data;
  } catch (error) {
    console.error("Register error:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || "Create failed, try again"
    );
  }
};
