import { Link } from "react-router-dom";
import { useState } from "react";

const MovieCard = ({ movie, user }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="cardOutDiv">
      <div className="cardInDiv">
        {/* <Link to={`/movie/${movie.id}`}> */}
        {/* -- csak amíg nincs adat -- */}
        <Link to={`/movie/`}>
          <h5 className="cardNameDiv">(cím)</h5>
        </Link>
        <div className="detailButtonDiv" onClick={() => setOpen(!isOpen)}>
          {isOpen ? "Less Details" : "More Details"}
        </div>
        {isOpen ? (
          <div className="detailsDiv">
            <div>
              <span>Year</span>
            </div>
            <div>
              <span>Director</span>
            </div>
            <div>
              <span>Cast</span>
            </div>
            <div>
              <span>Bármi</span>
            </div>
            <div>
              <span>Még Bármibb</span>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="addRevButton">
          {user ? "add review" : "Sign up to write rewiev"}
        </div>
        {user && <button className="">Add review</button>}
      </div>
    </div>
  );
};

export default MovieCard;
