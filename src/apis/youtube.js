import axios from "axios";
const KEY = "AIzaSyABY-FxUpznPNwqo-ZHKbIshnTWAnW00_Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    q: "surfboards",
  },
});
