import api from "./axios";

// get all products
export const getAllListings = async () => {
  try {
    const response = await api.get("/listings");
    return response.data;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw error;
  }
};
