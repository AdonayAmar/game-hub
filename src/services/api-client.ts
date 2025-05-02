import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: `${key}`,
  },
});
