export default function Navbar({ searchName, setSearchName }) {
  return (
    <div className="navbar">
      <select>
        <option>Anime</option>
        <option>Anime List</option>
      </select>
      <select>
        <option>Manga</option>
        <option>Manga List</option>
      </select>
      <select>
        <option>community</option>
        <option>Interest Search</option>
      </select>
      <select>
        <option>Industry</option>
        <option>News</option>
      </select>
      <select>
        <option>Watch</option>
        <option>Episode</option>
      </select>
      <input
        type="text"
        placeholder="Search Anime"
        value={searchName}
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
      />
    </div>
  );
  return searchName;
}
