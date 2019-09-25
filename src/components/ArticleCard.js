import React from 'react';
import { Card, Icon, Button, Col } from 'antd';
import Microlink from '@microlink/react';

const ArticleCard = (props) => {
  const { id, mustRead, imgUrl, title, summary, category, setMustRead, deleteArticle, link } = props;
  const { Meta } = Card;



  return (
    // card fragment
    <>
      <Col xs={18} sm={14} md={12} lg={10} xl={7} style={{ marginBottom: 'auto', height: '40rem', display: 'flex', padding: 'auto', justifyContent: 'center' }}>

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


        </Card >

      </Col>
    </>
  )

}


export default ArticleCard