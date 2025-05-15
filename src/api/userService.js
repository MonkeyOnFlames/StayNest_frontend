import api from "./axios"

// get all users
export const getAllUsers = async () => {
    try {
      const response = await api.get("/api/users");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  // get all users by id
export const getUserById = async (id) => {
    try {
      const response = await api.get(`/api/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

    // get listing by user id
export const getUserListings = async (id) => {
    try {
      const response = await api.get(`/api/users/${id}/listings`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

      // get booking by user id
export const getUserBookings = async (id) => {
    try {
      const response = await api.get(`/api/users/${id}/bookings`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

    // update a user
export const updateUser = async (id) => {
    try {
      const response = await api.patch(`/api/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

      // delete a user
export const deleteUser = async (id) => {
    try {
      const response = await api.delete(`/api/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };