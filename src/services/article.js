import api from './api';

// Récupérer tous les articles
export const fetchArticles = async () => {
  const { data } = await api.get('/articles');
  return data;
};

// Récupérer un article par ID
export const fetchArticleById = async (id) => {
  const { data } = await api.get(`/articles/${id}`);
  return data;
};

// Créer un nouvel article
export const createArticle = async (article) => {
  const { data } = await api.post('/articles', article);
  return data;
};

// Supprimer un article
export const deleteArticle = async (id) => {
  await api.delete(`/articles/${id}`);
};
