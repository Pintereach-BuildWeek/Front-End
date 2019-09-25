import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

export default function ArticleModal(props) {
    const { hideModal, addArticle, modalDisplay } = props;

    const initialFormState = { articleid: '', link: '', title: '', summary: '', category: '' };

    const [article, setArticle] = useState(initialFormState);

    const handleInputChange = e => {
        const { name, value } = e.target
        setArticle({ ...article, [name]: value })
        console.log(article)
    }

    const clickAddArticle = () => {
        addArticle(article)
    }

    return (
        <>

            {/* Modal visible will need to be a boolean infomed by state passed fromm login.
            
                The form will also need state to manage where the data is sent.*/}
            <Modal
                title='Add New Article'
                visible={modalDisplay.visible}
                // okText="Add Article"
                onCancel={hideModal}
                // onOk={addArticle}

                footer={[
                    <Button form='articleForm' key='submit' htmlType='submit' onClick={clickAddArticle}>Add Article</Button>
                ]}
            >

                <Form>

                    <label htmlFor='URL'>URL</label>
                    <Input type='text' name='link' value={article.link} onChange={handleInputChange} />
                    <label htmlFor='title'>Title</label>
                    <Input type='text' name='title' value={article.title} onChange={handleInputChange} />
                    <label htmlFor='summary'>Summary</label>
                    <Input type='text' name='summary' value={article.summary} onChange={handleInputChange} />
                    <label htmlFor='category'>Tags</label>
                    <Input type='text' name='category' value={article.category} onChange={handleInputChange} />
                </Form>
            </Modal>
        </>
    );
}