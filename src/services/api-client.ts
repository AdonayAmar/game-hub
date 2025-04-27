import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b5ab5e03a534987b1197cef8b528c80",
  },
});
