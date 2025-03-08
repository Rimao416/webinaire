import React from 'react';
import "../styles/Blog.css"
import Navbar from '../components/Navbar';
import MainLayouts from '../Layouts/MainLayouts';
import SkeletonLoader from '../components/Skeleton';
import { useArticles } from '../hooks/useArticles';

function Blog() {
    const { articles, loading } = useArticles();
  function subString(str) {
    if (str.length > 100) {
      return str.substring(0, 100) + '...';
    }
    return str;
  }



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

export default Blog;