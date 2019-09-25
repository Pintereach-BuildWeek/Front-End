import React from 'react';
import { Form, Modal, Input } from 'antd';

// Removed CSS to eliminate conflict with ANTD
// import '../css/modal.css';

// changed name to ArticleModal to elimnate conflicts with antd Modal
export default function ArticleModal(props) {
    const { hideModal, addArticle, modalDisplay } = props;



    return (
        <>
            {/* <div className='blur'></div> */}
            {/* Modal visible will need to be a boolean infomed by state passed fromm login.
            
                The form will also need state to manage where the data is sent.*/}
            <Modal
                title='Add New Article'
                visible={modalDisplay.visible}
                okText="Add Article"
                onCancel={hideModal}
                onOk={addArticle}

            >
                {/* <div>
                    <Button className='close' onClick={closeModal}>Close</Button>
                </div> */}
                <Form>

                    <div>
                        <label htmlFor='URL'>URL</label>
                        <Input id='URL' />
                    </div>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <Input id='title' />
                    </div>
                    <div>
                        <label htmlFor='summary'>Summary</label>
                        <Input id='summary' />
                    </div>
                    <div>
                        <label htmlFor='category'>Category</label>
                        <Input id='category' />
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