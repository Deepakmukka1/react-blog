export const removeNullArticles = (articles) => {
    return articles.filter((article) => {
      return article.urlToImage != null;
    });
  };