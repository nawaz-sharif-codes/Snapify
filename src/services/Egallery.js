import axiosClient from "../utils/axiosClient.js";

async function fetchGallery() {
  try {
    const { data } = await axiosClient.get("/list");
    return data;
  } catch (error) {
    console.error("Error occured while fetching gallery ", error);
    throw error;
  }
}

export { fetchGallery };
