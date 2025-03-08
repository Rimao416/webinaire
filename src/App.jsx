import React from 'react';
import './styles/Blog.css'; // On importe le fichier CSS
function App() {
  function subString(chaine){
    return chaine.substring(0, 20);
  }

  return (
    <div className="blog">
      <header className="header">
        <h1>Mon Blog Professionnel</h1>
        <p>Des articles sur le développement web et les bonnes pratiques.</p>
      </header>
      <div className="articles">
        {/* Article 1 */}
        <article className="article">
          <h2>Introduction à React</h2>
          <p>

            React est une bibliothèque JavaScript populaire pour construire des interfaces utilisateur. Dans cet article, nous explorons les bases de React, y compris les composants, les props et l'état.
          </p>
          <a href="/article/introduction-a-react" className="read-more">
            Lire l'article →
          </a>
        </article>

        {/* Article 2 */}
        <article className="article">
          <h2>Les meilleures pratiques en CSS</h2>
          <p>
            Découvrez les meilleures pratiques pour écrire du CSS maintenable et efficace. Nous couvrons des sujets comme BEM, les variables CSS, et les animations modernes.
          </p>
          <a href="/article/meilleures-pratiques-css" className="read-more">
            Lire l'article →
          </a>
        </article>

        {/* Article 3 */}
        <article className="article">
          <h2>Guide complet de JavaScript ES6+</h2>
          <p>
            JavaScript a évolué avec ES6 et les versions ultérieures. Ce guide couvre les fonctionnalités clés comme les arrow functions, les promesses, les modules, et bien plus encore.
          </p>
          <a href="/article/guide-javascript-es6" className="read-more">
            Lire l'article →
          </a>
        </article>

        {/* Article 4 */}
        <article className="article">
          <h2>Créer des APIs avec Node.js</h2>
          <p>
            Apprenez à créer des APIs RESTful avec Node.js et Express. Nous abordons la structure de projet, les routes, les middlewares, et la gestion des erreurs.
          </p>
          <a href="/article/creer-apis-nodejs" className="read-more">
            Lire l'article →
          </a>
        </article>

        {/* Article 5 */}
        <article className="article">
          <h2>Débuter avec Git et GitHub</h2>
          <p>
            Git est un outil essentiel pour tout développeur. Ce tutoriel vous guide à travers les commandes de base de Git et comment utiliser GitHub pour collaborer sur des projets.
          </p>
          <a href="/article/debuter-git-github" className="read-more">
            Lire l'article →
          </a>
        </article>
      </div>
    </div>
  );
}

export default App;