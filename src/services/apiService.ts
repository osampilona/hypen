import axios from "axios";
const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "QQQOe7e_0l1o0-YDILkcxJONEIYxKTqUjEQfhogppRI";

const fetchServiceImage = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/random/`, {
      params: {
        client_id: ACCESS_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random image:", error);
    throw error;
  }
};

export { fetchServiceImage };
