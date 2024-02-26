import React, { useEffect, useState } from "react";
import axios from "axios";

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
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState([]);

    const handleCategoryClick = (category) => {
        console.log("Category clicked", category);
    };

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
        <div>
            <h1>Movie Category</h1>
            {/* Render category buttons */}
            {MovieTypes.map(category => (
                <button key={category.key} onClick={() => setSelectedCategory(category)}>
                    {category.name}
                </button>
            ))}
            {/* Render movies */}
            <div>
                {filteredMovies.map(movie => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        {/* Render additional movie details */}
                        <a href={`/watch/${movie.id}`}>Watch</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieCategory;
