import React, { useEffect, useState } from "react";

function Sv2({ movieObject}) {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    console.log("Sv2.js: Component rendered1111", movieObject);
    if (rendered) return;
    if (typeof window !== "undefined") {
      window.webtor = window.webtor || [];
      window.webtor.push({
        id: "player",
        magnet: movieObject.hash,
        on: function (e) {
          if (e.name == window.webtor.TORRENT_FETCHED) {
            console.log("Sv2.js: Torrent fetched!", e.data);
          }
          if (e.name == window.webtor.TORRENT_ERROR) {
            console.log("Sv2.js: Torrent error!");
          }
        },
        poster:
          "https://www.themoviedb.org/t/p/original" +
          movieObject.backdrop_path,
        subtitles: [],
        imdbId: movieObject.imdb_id,
        width: "100%",
        lang: "en",
        i18n: {
          en: {
            common: {
              "prepare to play": "Preparing Video Stream... Please Wait...",
            },
            stat: {
              seeding: "Seeding",
              waiting: "Client initialization",
              "waiting for peers": "Waiting for peers",
              from: "from",
            },
          },
        },
      });
    }
    setRendered(true);
  }, []); // Empty dependency array ensures this effect runs only once


  console.log("Sv2.js: useEffect triggered");

  return <div id="player" className="webtor w-full"></div>;
}

export default Sv2;
