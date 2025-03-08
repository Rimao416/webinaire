import React, { useEffect, useState } from 'react';
import "../styles/Admin.css"
import Navbar from '../components/Navbar';
import MainLayouts from '../Layouts/MainLayouts';
import axios from 'axios';
import SkeletonLoader from '../components/Skeleton';

function Admin() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true); // État pour le chargement
  function subString(str) {
    if (str.length > 100) {
      return str.substring(0, 100) + '...';
    }
    return str;
  }
  function getArticles() {
    axios
      .get('http://localhost:5000/articles')
      .then((res) => {
        setArticles(res.data);
        setLoading(false); // Arrêter le chargement une fois les données reçues
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Arrêter le chargement en cas d'erreur
      });
  }

  // Charger les articles au montage du composant
  useEffect(() => {
    getArticles();
  }, []);



  return (
<MainLayouts>


      {/* Barre de navigation intégrée directement */}
      <Navbar/>

      <header className="header">
        <h1>Mon Blog Professionnel</h1>
        <p>Des articles sur le développement web et les bonnes pratiques.</p>
      </header>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="articles">
          {articles.map((article) => (
            <article key={article.id} className="article">
              <h2>{article.title}</h2>
              <p>{subString(article.description)}</p>
              <a href={`/article/${article.slug}`} className="read-more">
                Lire l'article →
              </a>
            </article>
          ))}
        </div>
      )}
      </MainLayouts>
  );
}

export default Admin;