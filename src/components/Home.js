import React, { useState } from 'react';
import { Button } from 'antd';

import ArticleList from './ArticleList';
import ArticleModal from './ArticleModal';
import Menu from './Menu';
import ArticleCard from './ArticleCard';

import { articlesArray } from '../data';

const Home = () => {
  const [articles, setArticles] = useState(articlesArray);
  // State for Menu, ArticleModal

  const [menuDisplay, setMenuDisplay] = useState({ visible: false, placement: 'left' });

  //ArticleModal state
  const [modalDisplay, setModalDisplay] = useState({ visible: false });

  // Toggle State
  const [toggleState, setToggleState] = useState(false)

  // Modal functions

  const showModal = () => {
    // console.log(modalDisplay);
    setModalDisplay({ visible: true });
  }

  const hideModal = () => {
    // console.log(modalDisplay);
    setModalDisplay({ visible: false });
  }

  const addArticle = article => {
    console.log('submit and add article pressed')
    article.id = articles.length + 1;
    setArticles([...articles, article]);
    setModalDisplay({ visible: false });
  }

  // Card Functions

  const deleteArticle = id => {
    console.log(`delete clicked`)
    setArticles(articles.filter(article => article.id !== id))
  }

  const setMustRead = id => {
    console.log(`mustRead clicked`);
    console.log(id)
    console.log(articles[id].mustRead);
    articles[id].mustRead = !articles[id].mustRead
  }

  // Menu functions
  const showMenu = () => {
    console.log(menuDisplay);
    setMenuDisplay({ visible: true });
  }

  const hideMenu = () => {
    console.log(menuDisplay);
    setMenuDisplay({ visible: false });
  }

  const filterMustRead = () => {
    console.log(`delete clicked`)
    setToggleState(!toggleState)
    !toggleState ?
      setArticles(articles.filter(article => article.mustRead === true)) : setArticles(articlesArray)
    console.log(toggleState)
  }



  return (
    <>
      {/* 
      <Menu /> */}
      <Button onClick={() => showModal()}>Add Article</Button>
      <Button onClick={() => showMenu()}>Menu</Button>

      <Menu showMenu={showMenu} hideMenu={hideMenu} menuDisplay={menuDisplay} articles={articles} showModal={showModal} filterMustRead={filterMustRead} />

      <ArticleModal addArticle={addArticle} modalDisplay={modalDisplay} showModal={showModal} hideModal={hideModal} />

      <ArticleList  data={ articlesArray } 
                    setMustRead={setMustRead}
                    deleteArticle={deleteArticle}/>

      {/* {
        articles.map(entry =>
          <ArticleCard
            setMustRead={setMustRead}
            deleteArticle={deleteArticle}
            key={entry.id}
            id={entry.id}
            mustRead={entry.mustRead}
            imgUrl={entry.imgUrl}
            title={entry.title}
            category={entry.category}
            summary={entry.summary} />
        )

      } */}

    </>

  )


}

export default Home