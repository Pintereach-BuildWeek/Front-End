import React from 'react';
import { Card, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

const ArticleCard = (props) => {
  const { id, mustRead, imgUrl, title, summary } = props;

  const { Meta } = Card;

  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }

  console.log(props)

  return (
    // card fragment

    <Card
      key={id}
      hoverable
      cover={
        <img src={imgUrl} alt='article preview' style={{ maxHeight: 180, width: 'auto', margin: 'auto' }} />
      }
      style={{ width: 320, marginBottom: '1rem' }}
      actions={[
        <Button type={(mustRead ? 'primary' : 'dashed')} >Must Read</Button>,
        <Icon type="delete" />


      ]}>
      <Meta
        title={title}
        description={summary}

      />
      {/* 'must read' button, delete    div  should have absolute positioning at top left and right respectively*/}
      {/* Must Read should be conditional on the boolean of article.mustRead */}

      {/* toggle mustRead: true or false */}
      {/* <Button type={(mustRead ? 'primary' : 'dashed')}>Must Read</Button> */}
      {/* link delete function to Icon */}

      {/* <Icon type="delete" /> */}
      {/* image, title, tags, description div  insdie link to open article in new tab*/}

    </Card >


  )

}


export default ArticleCard