import { useHistory } from "react-router-dom";

const Movie = ({ movie, user }) => {
  const history = useHistory();

  return (
    <div className="detailsDiv">
      <div>(movie details)</div>
      {user && <button className="btn btn-success">Add review</button>}
      <button className="btn btn-secondary" onClick={() => history.push("/")}>
        Back
      </button>
    </div>
  );
};

export default Movie;
