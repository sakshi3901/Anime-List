import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

export default function AnimePage() {
  const [anime, setAnime] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/list/${id}`);
        const char = await res.data;
        setAnime(char);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);
  return (
    <div className="disp">
      <h2 className="title">MyAnimeList</h2>
      <Navbar />
      <div className="anime-name">
        <h5>{anime.name}</h5>
      </div>
      <div className="anime-info">
        <div className="info1">
          <img src={anime.img} alt="poster" style={{ width: "100%" }} />
        </div>
        <div className="info2">
          <div className="rating" style={{ backgroundColor: "#111111" }}>
            <div>
              <span
                className="small-text"
                style={{ backgroundColor: "#337ccf", padding: "1px 10px" }}
              >
                SCORE
              </span>
              <h4 className="big-font">
                {(Math.random() * (10 - 3) + 3).toFixed(2) * 1}
              </h4>
              <span className="small-text">
                {Math.floor(Math.random() * (30000 - 10000) + 10000)} user
              </span>
            </div>
            <div className="vertical-line"></div>
            <div>
              <span>
                Ranked{"  "}
                <span className="big-font">
                  #{Math.floor(Math.random() * (10000 - 1000) + 1000)}
                </span>
              </span>
            </div>
            <div>
              <span>
                Popularity{"  "}
                <span className="big-font">
                  #{Math.floor(Math.random() * (10000 - 1000) + 1000)}
                </span>
              </span>
            </div>
            <div>
              <span>
                Members{"  "}
                <span className="big-font">
                  #{Math.floor(Math.random() * (100000 - 10000) + 10000)}
                </span>
              </span>
            </div>
            <div className="play-img">
              <img src={anime.img} alt="poster" />
              <div className="play-btn">
                <button>Play</button>
              </div>
            </div>
          </div>
          <div className="small-text" style={{ padding: "1rem" }}>
            <span>Synopsis</span>
            <hr />
            <p>
              As the deskmate of Ai Mie, Kaede Komura always has his attention
              fixed on her. Attracted by her cute charms, all he wishes for is
              that she would look at him with those beautiful eyes beneath her
              glasses. But just a few days after making her acquaintance, Kaede
              notices something different about Ai: her eyes are squinting and
              her glasses are missing. Nonetheless, he still finds her adorable!
              Unexpectedly, Ai has a tendency to forget her glasses. Having
              terrible vision, she has difficulty going through her day at
              school. Thankfully, Kaede is more than willing to help her. As Ai
              starts relying on him, Kaede's feelings for her grow even more.
              Likewise, despite her short-sightedness, Kaede slowly becomes the
              person Ai always hopes to see.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
