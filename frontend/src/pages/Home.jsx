import MovieCard from "../components/MovieCard";

const Home = ({ user }) => {

	return (
		<div className="movies">
			<MovieCard user={user} />
			<MovieCard user={user} />
			<MovieCard user={user} />
			<MovieCard user={user} />
		</div>
	);
};

export default Home;