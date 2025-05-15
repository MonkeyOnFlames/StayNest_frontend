import api from "./axios";

export const getAllListings = async () => {
  try {
    const response = await api.get("/api/listings");
    return response.data;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw error;
  }
};

export const getListingById = async (id) => {
  try {
    const response = await api.get(`/api/listings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw error;
  }
};

export const getListingsByEnvironment = async () => {
  try {
    const response = await api.get("/api/listings/environments");
    return response.data;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw error;
  }
};

export const getListingBySpecificEnvironment = async (environment) => {
  try {
    const response = await api.get(`/api/listings/${environment}/specific`);
    return response.data;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw error;
  }
};

export const deleteListingById = async (id) => {
  try {
    const response = await api.delete(`/api/listings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw error;
  }
};

export const getListingByPriceRange = async (minPrice, maxPrice) => {
  try {
    const response = await api.get(
      `/api/listings/price?minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw error;
  }
};

export const createListing = async (
  listingName,
  location,
  description,
  price,
  listingTypes,
  listingPolicy,
  environment,
  restrictions,
  pictureURLs,
  availabilities
) => {
  try {
    const response = await api.post("/api/listings", {
      listingName,
      location,
      description,
      price,
      listingTypes,
      listingPolicy,
      environment,
      restrictions,
      pictureURLs,
      availabilities,
    });
    return response.data;
  } catch (error) {
    console.error("Register error:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || "Create failed, try again"
    );
  }
};
