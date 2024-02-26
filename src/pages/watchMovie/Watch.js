import React, { useEffect, useState } from "react";
import Sv2 from "./Sv2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";

function Watch(params) {
  const [serverUse, setServerUse] = useState(1);
  const { id } = useParams();
  const [movieObject2, setMovieObject2] = useState({});
  const [didGetData, setDidGetData] = useState(false);

  useEffect(() => {
    console.log("Watch.js: Component rendered");
    console.log("Watch.js: movieObject:", id);

    // Fetch movie data from the API
    axios.get(`https://api-blog.apewannaliveforever.online/movie/movieInfo/${id}`)
      .then(res => {
        setMovieObject2(res.data);
        setDidGetData(true); // Set didGetData to true once data is received
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]); // Include id in the dependency array to trigger useEffect on id change

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
          {movieObject2.title} {/* Render movie title from movieObject2 */}
          <p className="text-sm font-thin">{movieObject2.english_title}</p>
        </h3>
        {/* Render Sv2 component only when data is available */}
        {didGetData ? (
          <Sv2 movieObject={movieObject2} />
        ) : (
          <p>Loading...</p>
        )}

        <button
          onClick={() => setServerUse(1)}
          className="mr-3 mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Server 1
        </button>
        <button
          onClick={() => setServerUse(2)}
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
