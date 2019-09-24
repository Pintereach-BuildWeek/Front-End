import React from 'react';
import '../css/modal.css';

export default function Modal (props) {
    const { closeModal, addArticle } = props;

    return (
        <>
            <div className='blur'></div>
            <div className='modal'>
                <div>
                    <button className='close' onClick={closeModal}>Close</button>
                </div>
                <div className='inputDiv'>
                    <label htmlFor='URL'>URL</label>
                    <input id='URL' className='input'/>
                </div>
                <div className='inputDiv'>
                    <label htmlFor='title'>Title</label>
                    <input id='title' className='input'/> 
                </div> 
                <div className='inputDiv'>
                    <label htmlFor='summary'>Summary</label>
                    <input id='summary' className='input'/> 
                </div> 
                <div className='inputDiv'>
                    <label htmlFor='category'>Category</label>
                    <input id='category' className='input'/> 
                </div> 
                <div className='modal-btns'>
                    <button className='cancel' onClick={closeModal}>Cancel</button>
                    <button className='add' onClick={addArticle}>Add</button>
                </div>
            </div>
        </>
    );
}