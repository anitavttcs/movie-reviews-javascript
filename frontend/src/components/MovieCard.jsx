import { Link } from "react-router-dom";
import { useState } from "react";
import Details from "./details";

const MovieCard = ({ movie, user }) => {
  const [isOpen, setOpen] = useState(false);

  console.log(movie);

  return (
    <div className="cardOutDiv">
      <div className="cardInDiv">
        {/* <Link to={`/movie/${movie.id}`}> */}
        {/* -- csak amíg nincs adat -- */}
        <Link to={`/movie/`}>
          <h5 className="cardNameDiv">{movie.original_title}</h5>
        </Link>
        {isOpen ? <Details movie={movie}></Details> : ""}
        <div className="detailButtonDiv" onClick={() => setOpen(!isOpen)}>
          {isOpen ? "Less Details" : "More Details"}
        </div>

        <div className="addRevButton">
          {user ? "add review" : "Sign up to write rewiev"}
        </div>
        {user && <button className="">Add review</button>}
      </div>
    </div>
  );
};

export default MovieCard;
