const axios = require("axios");

const myApi = axios.create({
  baseURL: "https://nc-news-example-seminar-3-2.herokuapp.com/api",
});

export const fetchNav = () => {
  return myApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticles = (topic_slug, params, order) => {
  return myApi
    .get("/articles", {
      params: {
        topic: topic_slug,
        sort_by: params,
        order: order,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchSingleArticle = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const patchArticle = (article_id, voteClick) => {
  return myApi
    .patch(`/articles/${article_id}`, { inc_votes: voteClick })
    .then((response) => {
      return response;
    });
};

export const fetchComments = ({ article_id }) => {
  return myApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (articleID, comment) => {
  console.log(comment);
  return myApi.post(`/articles/${articleID}/comments`, comment);
};
