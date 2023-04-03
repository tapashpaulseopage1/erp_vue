import axios from "axios";

export default axios.create({
  baseURL: "https://seopage1erp.website/api/",
  headers: {
    "Content-type": "application/json",
  },
});
