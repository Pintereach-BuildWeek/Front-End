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
            {/* <div className='blur'></div> */}
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
                {/* <div>
                    <Button className='close' onClick={closeModal}>Close</Button>
                </div> */}
                <Form
                // form='articleForm'
                // onSubmit={event => {
                //     event.preventDefault()
                //     if (!article.url || !article.title) return
                //     console.log(`onSubmit from form`);
                //     addArticle(article)
                //     setArticle(initialFormState)
                // }}
                >

                    <label htmlFor='URL'>URL</label>
                    <Input type='text' name='link' value={article.link} onChange={handleInputChange} />
                    <label htmlFor='title'>Title</label>
                    <Input type='text' name='title' value={article.title} onChange={handleInputChange} />
                    <label htmlFor='summary'>Summary</label>
                    <Input type='text' name='summary' value={article.summary} onChange={handleInputChange} />
                    <label htmlFor='category'>Tags</label>
                    <Input type='text' name='category' value={article.category} onChange={handleInputChange} />
                    <div>
                        {/* <Button type='submit' onClick={addArticle}>Add Article</Button> */}
                    </div>
                </Form>
                {/* Buttons below are replaced in <Modal footer= ... /> */}
                {/* <div className='modal-btns'>
                    <Button className='cancel' onClick={closeModal}>Cancel</Button>
                    <Button className='add' onClick={addArticle}>Add</Button>
                </div> */}

            </Modal>
        </>
    );
}