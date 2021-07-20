import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Home = ({ user }) => {
  const [title, setTitle] = useState("");
  const [isMovieList, setMovieList] = useState([]);
  const search = () => {
    console.log("search", title);
  };

  const fetchAll = async () => {
    const result = await fetch("http://localhost:5000/api/movies/");
    const jsonData = await result.json();
    //console.table(jsonData.results);
    setMovieList(jsonData.results);
  };

  useEffect(() => {
    fetchAll();
  }, []);

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
        {isMovieList
          ? isMovieList.map((data, iterator) => (
              <MovieCard user={user} key={iterator} movie={data} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Home;
