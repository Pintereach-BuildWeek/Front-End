import React, { useState } from "react";
import { Card, Icon, Button, Row, Col, Layout } from 'antd';


import SearchForm from "./SearchForm";
import ArticleCard from './ArticleCard';
import { articlesArray } from "../data";


const { Header, Content, Footer } = Layout;

function ArticleList() {
    const [articleList, setArticleList] = useState(articlesArray);
    const { id, mustRead, imgUrl, title, category, summary } = articlesArray;


    return (
        <>
            {/* <SearchForm /> */}

            <Row
                type='flex'
                justify='center'
                gutter={8}

            >
                {
                    articlesArray.map(entry =>
                        <ArticleCard id={entry.id}
                            mustRead={entry.mustRead}
                            imgUrl={entry.imgUrl}
                            title={entry.title}
                            category={entry.category}
                            summary={entry.summary} />
                    )

                }
            </Row>

        </>
    )
}
export default ArticleList;