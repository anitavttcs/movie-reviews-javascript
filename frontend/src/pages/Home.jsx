import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = ({ user }) => {
  const [title, setTitle] = useState("");

  const search = () => {
    console.log("search", title);
  };

  return (
    <div className="movies">
      <div className="movieSearchDiv">
        <div className="">
          <span className="">Search for movie by:</span>
        </div>

        <div className="radioButtonDiv">
          <input type="radio" value="title" name="type" className="radioButton" />{" "}
          Title
          <input
            type="radio"
            value="user"
            name="user"
            className="radioButton"
          />{" "}
          User rev.
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
