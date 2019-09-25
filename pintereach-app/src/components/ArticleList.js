import React from "react";
import SearchForm from "./SearchForm";
import ArticleCard from './ArticleCard';


function ArticleList({title, category, must}) {
   


    return (
        <>
       
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