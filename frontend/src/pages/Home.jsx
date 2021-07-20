import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = ({ user }) => {
  const [title, setTitle] = useState("");

  const search = () => {
    console.log("search", title);
  };

  return (
    <div className="movies">
      <div className="">
        <div className="">
          <span className="">Search for movie title:</span>
        </div>
        <input
          type="text"
          className=""
          placeholder=""
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="" onClick={search}>
          Search
        </button>
      </div>

      <div className="cardContainerDiv">
        <MovieCard user={user} />
        <MovieCard user={user} />
        <MovieCard user={user} />
        <MovieCard user={user} />
      </div>
    </div>
  );
};

export default Home;
