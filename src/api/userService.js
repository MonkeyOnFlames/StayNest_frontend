import api from "./axios"

// get all users
export const getAllUsers = async () => {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  // get all users by id
export const getUserById = async (id) => {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

    // get listing by user id
export const getUserListings = async (id) => {
    try {
      const response = await api.get(`users/${id}/listings`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

      // get booking by user id
export const getUserBookings = async (id) => {
    try {
      const response = await api.get(`users/${id}/bookings`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

    // delete a user by id
export const deleteUserById = async (id) => {
    try {
      const response = await api.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };