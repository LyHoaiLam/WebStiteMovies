import React, { useState, useEffect, memo } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import IconMovie from '../../Images/IconMovies.png';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [haveResult, setHaveResult] = useState()
    const [showSearchHistory, setShowSearchHistory] = useState(false);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api-blog.apewannaliveforever.online/movie/search/${searchTerm}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    useEffect(() => {
        if (searchResults && searchResults.length > 0) {
            setHaveResult(searchResults);
            console.log("searchResults && searchResults.length > 0");

            console.log(searchResults);
        } else {
            setHaveResult(false);
            console.log("No search results");
            console.log("searchResults && searchResults.length < 0");

        }
    }, [searchResults]);


    useEffect(() => {
        if (searchTerm) { // Chỉ gọi handleSearch nếu searchTerm có giá trị
            handleSearch();
            console.log(searchTerm)
        }
    }, [searchTerm]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleInputFocus = () => {
        setShowSearchHistory(true);
    };

    const handleInputBlur = () => {
        setShowSearchHistory(false);
    };

    return (
        <div className='header'>
            <div className='header-container01'>
                <img className='iconMovies' src={IconMovie} alt="Movie Icon" />
            </div>
            <div className='header-container02'>
                <input 
                    className='input-search' 
                    placeholder='Search'
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />

                {showSearchHistory && (
                    <div className="input-search-history">
                    <div className="search-history-container">
                    {searchResults && searchResults.map(result => (
                        <div key={result.id}>
                            <p className='info_Search'>{result.title}</p>
                        </div>
                    ))}
                </div>
                    </div>
                )}
    
                <button className='button-login'>
                    <FontAwesomeIcon className='input-icon-user' icon={faUser} />
                    <span className='textLogin'>Sign in</span>
                </button>
            </div>

           
       
        </div>
    );
    
    
}

export default memo(Header);
