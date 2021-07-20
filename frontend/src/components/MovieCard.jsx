import { Link } from "react-router-dom";

const MovieCard = ({ movie, user }) => {
  return (
    <div className="cardOutDiv">
      <div className="cardInDiv">
        {/* <Link to={`/movie/${movie.id}`}> */}
        {/* -- csak amíg nincs adat -- */}
        <Link to={`/movie/`}>
          <h5 className="cardNameDiv">(cím)</h5>
        </Link>
        <div>(leírás)</div>
        <div>(rating)</div>
        <div className="addRevButton">
          {user ? "add review" : "Sign up to write rewiev"}
        </div>
        {user && <button className="">Add review</button>}
      </div>
    </div>
  );
};

export default MovieCard;
