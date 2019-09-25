import React, {useState, useEffect} from "react";
import {Input} from 'antd';
// import {data} from "../../src/data";

const {Search} = Input;

function SearchForm({articles}) {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
       const results = articles.filter(article =>
        article.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);


//    const handleChange = event => {
//        setSearchTerm(event.target.value);
//    };

        return(
            <div>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
                
              />
              </div>
              );
}

export default SearchForm;