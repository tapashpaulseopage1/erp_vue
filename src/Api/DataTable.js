import Api from "./Api";

export default {
  getData() {
    return Api().get("/leads");
  },
};
