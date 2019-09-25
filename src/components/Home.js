import React, { useState } from 'react';

import ArticleList from './ArticleList';
import ArticleModal from './ArticleModal';
import Menu from './Menu';
import ArticleCard from './ArticleCard';


import { articlesArray } from '../data';

const Home = () => {
  // State for Menu, ArticleModal
  const [articles, setArticles] = useState(articlesArray);
  // State for articleList

  const addArticle = article => {
    article.id = articles.length + 1;
    setArticles([...articles, article])
  }

  const deleteArticle = id => {
    console.log(`delete clicked`)
    setArticles(articles.filter(article => article.id !== id))
  }

  return (
    <>
      {/* <ArticleModal />
      <Menu /> */}
      {
        articles.map(entry =>
          <ArticleCard
            deleteArticle={deleteArticle}
            key={entry.id}
            id={entry.id}
            mustRead={entry.mustRead}
            imgUrl={entry.imgUrl}
            title={entry.title}
            category={entry.category}
            summary={entry.summary} />
        )

      }

    </>

  )


}

export default Home