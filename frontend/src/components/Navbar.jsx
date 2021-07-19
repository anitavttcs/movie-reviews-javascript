import { Link } from "react-router-dom";


const Navbar = ({ setUser, user }) => {

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
	};

	const googleSignIn = () => {
		window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&prompt=select_account&client_id=382341078182-spo8stdhro7lfrgvfjjardd8tdufe36j.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=http%3A//localhost:3000/login"
	};

	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Movie Review</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarToggler">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">

						{user &&
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/">Reviews</Link>
								</li>
							</>
						}

						{user &&
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/">Logged in as {user.name}</Link>
								</li>

								<li className="nav-item">
									<Link to="/">
										<button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>
											Logout
										</button>
									</Link>
								</li>
							</>
						}

						{!user &&
							<li className="nav-item">
								<button className="btn btn-outline-success my-2 my-sm-0" onClick={googleSignIn}>
									Login
								</button>
							</li>
						}

					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;