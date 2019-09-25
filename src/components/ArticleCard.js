import React from 'react';
import { Card, Icon, Button, Col } from 'antd';

const ArticleCard = (props) => {
  const { id, mustRead, imgUrl, title, summary, category, setMustRead, deleteArticle, link } = props;
  const { Meta } = Card;


  // function preventDefault(e) {
  //   e.preventDefault();
  //   console.log('Clicked! But prevent default.');
  // }

  return (
    // card fragment
    <>
      <a href={link}>
        <Col xs={18} sm={14} md={10} lg={8} xl={7} >
          <Card
            hoverable
            cover={
              <img src={imgUrl} alt='article preview' style={{ maxHeight: 180, width: 'auto', margin: 'auto' }} />
            }
            style={{ width: 320, marginBottom: '1rem' }}
            actions={[
              <Button type={(mustRead ? 'primary' : 'dashed')} onClick={() => setMustRead(id)} >Must Read</Button>,
              <Icon type="delete" onClick={() => deleteArticle(id)} />


            ]}>
            <Meta
              title={title}
              description={summary}

            />
            <div>
              <hr style={{
                margin: '1rem'
              }}></hr>
              <span
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'baseline'
                }}>
                <Icon type="tag" />
                <p>{category}</p>
              </span>
            </div>
            {/* 'must read' button, delete    div  should have absolute positioning at top left and right respectively*/}
            {/* Must Read should be conditional on the boolean of article.mustRead */}

            {/* toggle mustRead: true or false */}
            {/* <Button type={(mustRead ? 'primary' : 'dashed')}>Must Read</Button> */}
            {/* link delete function to Icon */}

            {/* <Icon type="delete" /> */}
            {/* image, title, tags, description div  insdie link to open article in new tab*/}

          </Card >
        </Col>
      </a>
    </>
  )

}


export default ArticleCard