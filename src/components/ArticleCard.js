import React, { useEffect } from 'react';
import { Card, Icon, Button, Col } from 'antd';
import Microlink from '@microlink/react';

const ArticleCard = (props) => {
  const { id, mustRead, imgUrl, title, summary, category, setMustRead, deleteArticle, link } = props;
  const { Meta } = Card;



  return (
    // card fragment
    <>
      <Col xs={18} sm={14} md={12} lg={10} xl={7} style={{ border: '1px solid red', marginBottom: 'auto', height: '40rem', display: 'flex', padding: 'auto', justifyContent: 'center' }}>

        <Card


          hoverable={true}
          // cover={
          //   <a href={link}><img src={imgUrl} alt='article preview' style={{ maxHeight: 180, width: 'auto', margin: 'auto' }} /></a>
          // }
          cover={
            <Microlink url={link} />
          }
          style={{ width: '24rem', marginBottom: 'auto' }}
          actions={[
            <Button type={(mustRead ? 'primary' : 'dashed')} onClick={() => setMustRead(id)} >Must Read</Button>,
            <Button onClick={() => deleteArticle(id)} ><Icon type="delete" /></Button>


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
    </>
  )

}


export default ArticleCard