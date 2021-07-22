import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Home = ({ user }) => {
  const [title, setTitle] = useState("");
  const [isMovieList, setMovieList] = useState([]);
  const [isRadioButton, setRadioButton] = useState(1);

  const search = () => {
    let url;

    if (title.length === 0) {
      url = `${process.env.REACT_APP_BACKEND_HOST}/api/movies/`;
    } else if (isRadioButton === 1) {
      url = `${process.env.REACT_APP_BACKEND_HOST}/api/movies/searchByName?name=${title}`;
    } else {
      url = `${process.env.REACT_APP_BACKEND_HOST}/api/movies/`;
      console.log("this function is under construction");
    }

    fetchAll(url);
  };

  const fetchAll = async (url) => {
    const result = await fetch(url);
    const jsonData = await result.json();
    //console.table(jsonData.results);
    setMovieList(jsonData.results);
  };

  useEffect(() => {
    fetchAll(`${process.env.REACT_APP_BACKEND_HOST}/api/movies/`);
  }, []);

  return (
    <div className="movies">
      <div className="movieSearchDiv">
        <div className="">
          <span className="">Search for movie by:</span>
        </div>

        <div className="radioButtonDiv">
          <input
            type="radio"
            value="title"
            name="type"
            className="radioButton"
            checked={isRadioButton === 1}
            onClick={() => setRadioButton(1)}
          />{" "}
          Title
          <input
            type="radio"
            value="user"
            name="type"
            className="radioButton"
            checked={isRadioButton === 2}
            onClick={() => setRadioButton(2)}
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
          : "Sorry I cant find a movie"}
      </div>
    </div>
  );
};

export default Home;
