import { Link } from "react-router-dom";

const MovieCard = ({ movie, user }) => {
	return (
		<div className="card w-50">
			<div className="card-body">
				{/* <Link to={`/movie/${movie.id}`}> */}
				{/* -- csak amíg nincs adat -- */}
				<Link to={`/movie/`}>
					<h5 className="card-title">(cím)</h5>
				</Link>
				<div>(leírás)</div>
				<div>(rating)</div>
				{user &&
					<button className="btn btn-success">Add review</button>
				}
			</div>
		</div>
	);
};

export default MovieCard;