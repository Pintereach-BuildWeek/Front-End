import React, {useState} from "react";
// import SearchForm from "./SearchForm";
import ArticleCard from './ArticleCard';


function ArticleList({ data, setMustRead, deleteArticle }) {
    // const [articleList, setArticleList] = useState(data);
    // const {id, mustRead, imgUrl, title, category, summary} = data;
    debugger

    return (
        <>
        {/* <SearchForm/> */}
        <div>
            {
                
                data.map(entry =>
                    <ArticleCard    setMustRead={setMustRead}
                                    deleteArticle={deleteArticle}
                                    key={entry.id}
                                    id={entry.id}
                                    // mustRead={entry.mustRead}
                                    imgUrl='https://source.unsplash.com/random'
                                    // title={entry.title}
                                    category={entry.category}
                                    // summary={entry.summary}
                                    />
                        )

            }
        </div>
        </>
    )
}
export default ArticleList;