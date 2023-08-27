import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AnimeList({ searchName, animelist }) {
  const [searchName2, setSearchName2] = useState("");

  const filterlist = animelist.filter(
    (lists) =>
      lists.name?.toLowerCase().includes(searchName?.toLowerCase()) &&
      lists.name?.toLowerCase().includes(searchName2?.toLowerCase())
  );

  return (
    <div className="anime-list-disp">
      <input
        type="text"
        placeholder="Search Anime"
        style={{
          backgroundColor: "#212F3D",
          width: "100%",
          borderRadius: "10px",
        }}
        value={searchName2}
        onChange={(e) => {
          setSearchName2(e.target.value);
        }}
      />
      <div className="anime-list">
        {filterlist.map((list, index) => (
          <Link to={`/list/${list._id}`} className="link">
            <div className="list" key={index}>
              <img src={list.img} alt="poster" />
              {list.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
