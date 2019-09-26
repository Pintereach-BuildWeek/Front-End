import React from 'react';
import { Drawer, Button, Switch } from 'antd';



export default function Menu(props) {

    const { articles, hideMenu, menuDisplay, showModal, filterMustRead, setApiUrl } = props;

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
                <button onClick={() => setApiUrl('https://bw-pintereach.herokuapp.com/articles/articles')}>All</button>
                {
                    Object.keys(categories).sort().map(category => {
                        return (
                            <button key={category} onClick={() => {
                                debugger
                                setApiUrl(`https://bw-pintereach.herokuapp.com/articles/${category}`)
                            }} >{category}: {categories[category]}</button>
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