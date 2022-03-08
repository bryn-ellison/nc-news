const axios = require("axios");

const myApi = axios.create({
  baseURL: "https://nc-news-example-seminar-3-2.herokuapp.com/api",
});

export const fetchNav = () => {
  return myApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticles = (topic_slug) => {
  return myApi
    .get("/articles", {
      params: {
        topic: topic_slug,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};
