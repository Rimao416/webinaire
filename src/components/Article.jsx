import React from 'react'

function Article({id,title,description,slug}) {
  return (
    <article key={id} className="article">
                  <h2>{title}</h2>
                  <p>{(description)}</p>
                  <a href={`/article/${slug}`} className="read-more">
                    Lire l'article →
                  </a>
                </article>
  )
}

export default Article
