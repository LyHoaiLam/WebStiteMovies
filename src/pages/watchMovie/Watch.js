import React, { useEffect, useState } from "react";
import Sv1 from "./Sv1";
import Sv2 from "./Sv2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";

function Watch(params) {
  const [serverUse, changeServer] = useState(1);
  //get params from url
  const { id } = useParams();

  const [didGetData, setDidGetData] = useState(false);

  const movieObject = {
    "id": 7,
    "tmdb_id": 429,
    "imdb_id": "tt0060196",
    "title": "Thiện, Ác, Tà",
    "english_title": "The Good, the Bad and the Ugly",
    "backdrop_path": "/3nDF7iOHUxjSV5GazK0cq1t9xUo.jpg",
    "imdb": 8.8,
    "release_date": "1966-12-23",
    "runtime": 161,
    "genre_ids": [37],
    "hash": "061E0F98A9D5C171D09CE5C1F11965032FFD1B82",
    "updated": "2021-09-15T06:40:09.298+00:00"
  };
  const [movieObject2, setMovieObject2] = useState({});

  useEffect(() => {
    console.log("Watch.js: Component rendered");
    console.log("Watch.js: movieObject:", id);
    //use axios get data from api https://api-blog.apewannaliveforever.online/movie/movieInfo/:movieId
    axios.get(`https://api-blog.apewannaliveforever.online/movie/movieInfo/${id}`)
      .then(res => {
        setMovieObject2(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("Watch.js: movieObject2:", movieObject2);
    setDidGetData(true);
  }, [movieObject2]);

  return (
    <div>
      <Link to="/">
        <h1 className="text-white pl-2 pt-3">
          <FontAwesomeIcon
            className="text-blue-600 mr-1 shadow-lg"
            icon={faArrowCircleLeft}
          />{" "}
          Trở về trang chủ
        </h1>
      </Link>
      <div>
        <h3 className="text-center text-white text-lg font-bold pt-2 pb-2">
          {movieObject.title}
          <p className="text-sm font-thin">{movieObject.english_title}</p>
        </h3>
        {didGetData ? (<Sv2 movieObject={movieObject} movieObject2={movieObject2} />
        ) : null}

        <button
          onClick={() => changeServer(1)}
          className="mr-3 mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Server 1
        </button>
        <button
          onClick={() => changeServer(2)}
          className="bg-blue-500 mt-3 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Server 2
        </button>
        <h4 className="text-white">
          Để xem phụ đề Tiếng Việt hãy nhấn nút subtitle ở góc phải rồi chọn
          tab OpenSubtitles để chọn ngôn ngữ nhé!
        </h4>
      </div>
    </div>
  );
}
export default Watch;
