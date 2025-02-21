import axios from "axios";

export async function PostRequest(url, data, parameters = {}, error) {
  try {
    const res = await axios.post(url, data, parameters);
    return res.feedback;
  } catch (error) {
    throw new Error();
  }
}

export async function GetRequest(url, options) {
  try {
    const res = await axios.get(url, options);
    return res.data;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
}
