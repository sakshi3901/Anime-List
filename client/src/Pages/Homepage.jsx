import { useEffect, useState } from "react";
import AnimeList from "../components/AnimeLists";
import axios from "axios";
import Navbar from "../components/navbar";

export default function HomePage() {
  const [animelist, setAnimelist] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(
          "https://anime-backend-1oxy.onrender.com/list"
        );
        const char = await res.data;
        setAnimelist(char);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);

  return (
    <div className="disp">
      <h2 className="title">MyAnimeList</h2>
      <Navbar searchName={searchName} setSearchName={setSearchName} />
      <div className="wall">
        <img src="/assets/wallpaper.png" className="wall-img" alt="wallpaper" />
        <div className="wallpaper"></div>
        <p>
          <h5>
            Never forget what you've seen. Save what you want to watch next.
          </h5>
          <h2>Start tracking your anime today.</h2>
        </p>
      </div>
      <div>
        <AnimeList searchName={searchName} animelist={animelist} />
      </div>
    </div>
  );
}
