import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0c25ad4f4b344b1b81c37c069dd826d5",
  },
});
