import React from 'react';
import '../css/menu.css';
import { Link } from 'react-router-dom';

export default function Menu (props) {
    const { articles, addLink, closeMenu } = props;

    const categories = articles
                        .map(article => article.category)
                        .reduce((acc, currValue) => {
                            acc[currValue] ? acc[currValue]++: acc[currValue] = 1;
                            return acc;
                        }, {});

    return (
        <>
            <div className='blur'></div>
            <div className='menu'>
                <div className='apptitle'>
                    <h1>Pintereach</h1>
                    <button onClick={closeMenu}>Close</button>
                </div> 
                <button id='add-link' onClick={() => {
                    closeMenu();
                    addLink();
                }}>Add a Link</button>
                <div className='categories'>
                    <h3>Categories</h3>
                    {
                        Object.keys(categories).sort().map(category => {
                            return (
                                <Link to={category}>
                                    <p>{category}: {categories[category]}</p>
                                </Link>
                            );                        
                        })
                    }
                </div>
                <div className='options'>
                    <h3>Options</h3>
                    <div>
                        <p>Show Must Read only</p>
                        <button>On/Off</button>
                    </div>
                </div>
            </div>
        </>
    );
}