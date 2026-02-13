import axiosClient from "../utils/axiosClient.js";

async function fetchGallery(page) {
  try {
    // https://picsum.photos/v2/list?page=2&limit=100
    const { data } = await axiosClient.get(`?page=${page}&limit=30`);
    return data;
  } catch (error) {
    console.error("Error occured while fetching gallery ", error);
    throw error;
  }
}

export { fetchGallery };
