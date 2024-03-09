import React, { useEffect, useState } from "react";
import axios from "axios";

import './movieCategory.css'

function MovieCategory() {
    const MovieTypes = [
        {
            "key": 28,
            "name": "Hành Động"
        },
        {
            "key": 12,
            "name": "Phiêu Lưu"
        },
        {
            "key": 16,
            "name": "Hoạt Hình"
        },
        {
            "key": 35,
            "name": "Hài"
        },
        {
            "key": 80,
            "name": "Hình Sự"
        },
        {
            "key": 99,
            "name": "Tài Liệu"
        },
        {
            "key": 18,
            "name": "Chính Kịch"
        },
        {
            "key": 10751,
            "name": "Gia Đình"
        },
        {
            "key": 14,
            "name": "Giả Tưởng"
        },
        {
            "key": 36,
            "name": "Lịch Sử"
        },
        {
            "key": 27,
            "name": "Kinh Dị"
        },
        {
            "key": 10402,
            "name": "Nhạc"
        },
        {
            "key": 9648,
            "name": "Bí Ẩn"
        },
        {
            "key": 10749,
            "name": "Lãng Mạn"
        },
        {
            "key": 878,
            "name": "Khoa Học Viễn Tưởng"
        },
        {
            "key": 10770,
            "name": "Chương Trình Truyền Hình"
        },
        {
            "key": 53,
            "name": "Gây Cấn"
        },
        {
            "key": 10752,
            "name": "Chiến Tranh"
        },
        {
            "key": 37,
            "name": "Miền Tây"
        }
    ]
    const [selectedCategory, setSelectedCategory] = useState(MovieTypes.find(category => category.key === 28))

    const [filteredMovies, setFilteredMovies] = useState([]);


    
    useEffect(() => {
        if (selectedCategory) {
            // Filter movies based on selected category
            console.log("Filtering movies based on category", selectedCategory);
            // setFilteredMovies(filteredMovies);
            //use axios get data from api https://api-blog.apewannaliveforever.online/movie/genre/12
            axios.get(`https://api-blog.apewannaliveforever.online/movie/genre/${selectedCategory.key}`)
                .then(res => {
                    console.log(res.data);
                    setFilteredMovies(res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [selectedCategory]);

    return (
        <div className="movie-Category">
            <h1>Movie Category</h1>

            {MovieTypes.map(category => (
                <button className="button-Category" key={category.key} onClick={() => setSelectedCategory(category)}>
                    {category.name}
                </button>
            ))}

            <div className="movie-Caterogy-Render">


            
                {filteredMovies.map(movie => (
                    <div className="movie-item" key={movie.id}>
                        <h2 className="movie-Caterogy-Render-Title">{movie.title}</h2>
                            <a className="link_Img" href={`/watch/${movie.id}`}>
                                <img className="movie-Caterogy-Render-Img" src={`https://www.themoviedb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
                            </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieCategory;
