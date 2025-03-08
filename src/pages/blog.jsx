import React from 'react';
import "../styles/Blog.css"

function Blog() {
  function subString(str) {
    if (str.length > 100) {
      return str.substring(0, 100) + '...';
    }
    return str;
  }

  const articles = [
    {
      id: 1,
      title: 'Introduction à React',
      description:
        'React est une bibliothèque JavaScript populaire pour construire des interfaces utilisateur. Dans cet article, nous explorons les bases de React, y compris les composants, les props et l\'état.',
      slug: 'introduction-a-react',
    },
    {
      id: 2,
      title: 'Les meilleures pratiques en CSS',
      description:
        'Découvrez les meilleures pratiques pour écrire du CSS maintenable et efficace. Nous couvrons des sujets comme BEM, les variables CSS, et les animations modernes.',
      slug: 'meilleures-pratiques-css',
    },
    {
      id: 3,
      title: 'Guide complet de JavaScript ES6+',
      description:
        'JavaScript a évolué avec ES6 et les versions ultérieures. Ce guide couvre les fonctionnalités clés comme les arrow functions, les promesses, les modules, et bien plus encore.',
      slug: 'guide-javascript-es6',
    },
    {
      id: 4,
      title: 'Créer des APIs avec Node.js',
      description:
        'Apprenez à créer des APIs RESTful avec Node.js et Express. Nous abordons la structure de projet, les routes, les middlewares, et la gestion des erreurs.',
      slug: 'creer-apis-nodejs',
    },
    {
      id: 5,
      title: 'Débuter avec Git et GitHub',
      description:
        'Git est un outil essentiel pour tout développeur. Ce tutoriel vous guide à travers les commandes de base de Git et comment utiliser GitHub pour collaborer sur des projets.',
      slug: 'debuter-git-github',
    },
  ];
  const navBar=[{
    href:"/",
    text:"Accueil"
  },{
    href:"/about",
    text:"A propos"
  },{
    href:"/contact",
    text:"Contact"
  }]

  return (
    <div className="blog">
      {/* Barre de navigation intégrée directement */}
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/" className="navbar-logo">
            Mon Blog
          </a>
        </div>
        <ul className="navbar-links">
          {navBar.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar-link">
                {link.text}
              </a>
            </li>
          ))}
          
        </ul>
      </nav>

      <header className="header">
        <h1>Mon Blog Professionnel</h1>
        <p>Des articles sur le développement web et les bonnes pratiques.</p>
      </header>
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
    </div>
  );
}

export default Blog;