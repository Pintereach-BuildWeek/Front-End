/*import React from "react";
import {data} from "../../src/data";

function SearchForm() {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('');

    useEffect((item) => {
        getArticles(item);
    }, [query])

    const getArticles = data.articles.filter(category => 
        category.toLowerCase().includes(search)
        );
        setArticles(data.articles)

    const updateSearch = e => {
        setSearch(e.target.value);
    };
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }    

    return (
        <form onSubmit={getSearch}>
            <input value={search} Placeholder="Search" onChange={updateSearch}/>
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchForm;*/