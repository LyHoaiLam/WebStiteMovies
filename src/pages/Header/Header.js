import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import IconMovie from '../../Images/IconMovies.png';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [haveResult, setHaveResult] = useState(false)

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api-blog.apewannaliveforever.online/movie/search/${searchTerm}`);
            const data = await response.json();
            console.log(data)
            setSearchResults(data.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    useEffect(() => {
        if (searchResults && searchResults.length > 0) {
            setHaveResult(true);
            console.log(searchResults);
        } else {
            setHaveResult(false);
            console.log("No search results");
        }
    }, [searchResults]);
    



    useEffect(() => {
        if (searchTerm) { // Chỉ gọi handleSearch nếu searchTerm có giá trị
            handleSearch();
            console.log(searchTerm)
        }
    }, [searchTerm]);

    const handleLogin = () => {
        alert('Bạn chưa Login');
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
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
                />
    
                <button onClick={handleLogin} className='button-login'>
                    <FontAwesomeIcon className='input-icon-user' icon={faUser} />
                    <span className='textLogin'>Sign in</span>
                </button>
            </div>

            <div style={{backgroundColor: "red", width: "200px"}}>
            {haveResult && searchResults.map(result => (
                <div key={result.id}>
                    {/* Hiển thị thông tin kết quả tìm kiếm */}
                    <p>{result.title}</p>
                </div>
            ))}
        </div>
       
        </div>
    );
    
    
}

export default Header;
