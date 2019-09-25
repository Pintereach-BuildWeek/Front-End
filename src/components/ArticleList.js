import React from "react";
import ArticleCard from './ArticleCard';

function ArticleList({ articles, setMustRead, deleteArticle }) {

    return (
        <div className='articles'>
            {

                articles.map(entry =>
                    <ArticleCard setMustRead={setMustRead}
                        deleteArticle={deleteArticle}

                        key={entry.articleid}
                        id={entry.articleid}
                        mustRead={entry.mustRead}
                        imgUrl='https://source.unsplash.com/random'
                        title={entry.title}
                        category={entry.category}
                        summary={entry.summary}
                        link={entry.link}
                    />
                )

            }
        </div>
    )
}
export default ArticleList;