import React from "react";
import ArticleCard from './ArticleCard';
import { Row, Col } from 'antd';

function ArticleList({ articles, setMustRead, deleteArticle }) {

    return (

        <Row ctype="flex" justify="space-around" gutter={16} style={{ margin: '1rem', width: 'auto' }}>
            {
                articles.map(entry =>
                    <Col
                        span={8}
                        style={{

                            marginBottom: '2rem',

                        }}>
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
                    </Col>
                )
            }

        </Row>

    )
}
export default ArticleList;