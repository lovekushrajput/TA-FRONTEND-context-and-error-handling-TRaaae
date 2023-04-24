import React from 'react';
import { Link } from 'react-router-dom'
import withSearch from './withSearch';
import { articlesData } from './Data';

function Articles({ handleKey, searchValue }) {
    const filteredArticles = articlesData.filter((article) => article.title.toUpperCase().includes(searchValue))
    return (
        <div>
            <input type="text" placeholder="search" onKeyUp={handleKey} />
            <Article filteredData={filteredArticles} />
        </div>
    )
}


function Article(props) {
    return (
        <>
            <ul className='article'>
                {
                    props.filteredData.map((elm, i) => {
                        return (
                            <li key={i}>
                                <Link to={elm.slug} style={{ fontWeight: 700, fontSize: '1.3rem' }}> {elm.title}</Link>
                                <p>{elm.author}</p>
                            </li>
                        )
                    })
                }
            </ul>


        </>
    )
}


export default withSearch(Articles)


