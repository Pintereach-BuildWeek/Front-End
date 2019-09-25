import React, {useState} from "react";
import SearchForm from "./SearchForm";
import ArticleCard from './ArticleCard';


function ArticleList(data) {
    // const [articleList, setArticleList] = useState(data);
    // const {id, mustRead, imgUrl, title, category, summary} = data;


    return (
        <>
        <SearchForm/>
        <div>
            {
                
                data.map(entry =>
                    <ArticleCard id={entry.id} 
                                 mustRead={entry.mustRead} 
                                 imgUrl={entry.imgUrl} 
                                 title={entry.title} 
                                 category={entry.category} 
                                 summary={entry.summary}/>
                        )

            }
        </div>
        </>
    )
}
export default ArticleList;