import React from 'react';
import { Card, Icon, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';

const ArticleCard = (props) => {
  const { id, mustRead, imgUrl, title, category, summary } = props;

  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }

  return (
    // card fragment
    <div key={id}>
      <Card
        hoverable
        style={{ width: 300 }}>
        {/* 'must read' button, delete    div  should have absolute positioning at top left and right respectively*/}
        {/* Must Read should be conditional on the boolean of article.mustRead */}
        <div>
          {/* toggle mustRead: true or false */}
          <Button type={mustRead ? 'primary' : 'dashed'}>Must Read</Button>
          {/* link delete function to Icon */}
          <Icon type="delete" />
        </div>
        {/* image, title, tags, description div  insdie link to open article in new tab*/}
        <Link to=''>
          <div>
            <img src={imgUrl} alt='article preview' style={{ width: 300 }} />
            <h3>{title}</h3>
            {/* <Icon type="tag" />  */}
            {/* props.article.tags.map(entry => (
              <Tag>
            )) */}
            <h5>{category}</h5>
            <p>{summary}</p>
          </div>
        </Link>
      </Card>

    </div>
  )

}


export default ArticleCard