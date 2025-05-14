import api from "./axios";



export const getBookingById = async (id) => {
  try {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const deleteBooking = async (id) => {
    try {
      const response = await api.delete(`/bookings/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

/*   const create = async (
      listingId,
      listingName,
      userId,
      userName,
      totalAmount,
      startDate,
      endDate,
      createdAt
    ) => {
      try {
        const create = await api.post("/auth/bookings", {
        listingId,
        listingName,
        userId,
        userName,
        totalAmount,
        startDate,
        endDate,
        createdAt,
        });
        return response.data;
      } catch (error) {
        console.error("Register error:", error.response?.data || error.message);
        throw new Error(
          error.response?.data?.message || "Create failed, try again"
        );
      }
    }; */
