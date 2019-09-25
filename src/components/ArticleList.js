import React, {useState} from "react";
// import SearchForm from "./SearchForm";
import ArticleCard from './ArticleCard';


function ArticleList({ data, setMustRead, deleteArticle }) {
    // const [articleList, setArticleList] = useState(data);
    // const {id, mustRead, imgUrl, title, category, summary} = data;

    return (
        <>
        {/* <SearchForm/> */}
        <div>
            {
                
                data.map(entry => 
                    <ArticleCard    setMustRead={setMustRead}
                                    deleteArticle={deleteArticle}
                                    key={entry.articleid}
                                    id={entry.articleid}
                                    mustRead={entry.articleid % 2 === 0 ? false : true}
                                    imgUrl='https://source.unsplash.com/random'
                                    title='Title goes here.'
                                    category={entry.category}
                                    summary='Summary goes here.'
                                    link={entry.link}
                                    />
                        )

            }
        </div>
        </>
    )
}
export default ArticleList;