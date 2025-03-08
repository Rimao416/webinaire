import React from 'react';
import "../styles/Admin.css"
import Navbar from '../components/Navbar';
import MainLayouts from '../Layouts/MainLayouts';
import SkeletonLoader from '../components/Skeleton';
import { useArticles } from '../hooks/useArticles';
import subString from '../utils';
import Article from '../components/Article';

function Admin() {
    const {articles,loading}=useArticles();
  



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
           <Article key={article.id} id={article.id} title={article.title} description={subString(article.description)} slug={article.slug} />  
          ))}
        </div>
      )}
      </MainLayouts>
  );
}

export default Admin;