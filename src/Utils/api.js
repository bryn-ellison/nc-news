const axios = require("axios");

const myApi = axios.create({
  baseURL: "https://nc-news-example-seminar-3-2.herokuapp.com/api",
});

export const fetchNav = () => {
  return myApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
