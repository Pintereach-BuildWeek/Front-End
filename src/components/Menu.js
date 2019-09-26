import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Switch } from 'antd';



export default function Menu(props) {

    const { articles, hideMenu, menuDisplay, showModal, filterMustRead } = props;

    const categories = articles
        .map(article => article.category)
        .reduce((acc, currValue) => {
            acc[currValue] ? acc[currValue]++ : acc[currValue] = 1;
            return acc;
        }, {});

    return (
        <Drawer
            title="Menu"
            placement='left'
            closable={true}
            onClose={hideMenu}
            visible={menuDisplay.visible}

        >
            <div
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}
            >

                <Button onClick={() => {
                    hideMenu();
                    showModal();
                }}>Add Article</Button>
            </div>
            <div
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', margin: '2rem 0' }}>

                <h3>Categories</h3>
                {
                    Object.keys(categories).sort().map(category => {
                        return (
                            <Link to={category} key={category}>
                                <p>{category}: {categories[category]}</p>
                            </Link>
                        );
                    })
                }
            </div>
            <div className='options'>
                <h3>Options</h3>
                <h4>Must Read Only</h4>
                <Switch defaultunchecked='true' onClick={e => filterMustRead(e)} />
            </div>

        </Drawer>
    )
}