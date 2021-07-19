import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = ({ user }) => {
	const [title, setTitle] = useState("");

	const search = () => {
		console.log("search", title);
	};

	return (
		<div className="movies">

			<div className="input-group mb-3 w-75">
				<div className="input-group-prepend">
					<span className="input-group-text">Search for movie title:</span>
				</div>
				<input type="text" className="form-control" placeholder="keywords"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button className="btn btn-success" onClick={search}>Search</button>
			</div>

			<MovieCard user={user} />
			<MovieCard user={user} />
			<MovieCard user={user} />
			<MovieCard user={user} />

		</div>
	);
};

export default Home;