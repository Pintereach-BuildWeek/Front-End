import React from 'react';
import { Form, Modal, Icon, Input, Button } from 'antd';

// Removed CSS to eliminate conflict with ANTD
// import '../css/modal.css';

// changed name to ArticleModal to elimnate conflicts with antd Modal
export default function ArticleModal(props) {
    const { closeModal, addArticle } = props;




    return (
        <>
            <div className='blur'></div>
            {/* Modal visible will need to be a boolean infomed by state passed fromm login.
            
                The form will also need state to manage where the data is sent.*/}
            <Modal
                title='Add New Article'
                visible='true'
                footer={[
                    <Button key="back" onClick={''}>
                        Close
            </Button>,
                    <Button key="submit" type="primary" loading={''} onClick={''}>
                        Submit
            </Button>,
                ]}
            >
                {/* <div>
                    <Button className='close' onClick={closeModal}>Close</Button>
                </div> */}
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
                {/* Buttons below are replaced in <Modal footer= ... /> */}
                {/* <div className='modal-btns'>
                    <Button className='cancel' onClick={closeModal}>Cancel</Button>
                    <Button className='add' onClick={addArticle}>Add</Button>
                </div> */}

            </Modal>
        </>
    );
}