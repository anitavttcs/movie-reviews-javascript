import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Login = ({ checkToken }) => {
	let history = useHistory();

	useEffect(() => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get("code");

		axios
			.post("http://localhost:5000/api/login", { code })
			.then(res => {
				localStorage.setItem("token", res.data.token);
				history.push("/");
				checkToken();
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div>
			Loading...
		</div>
	);
}

export default Login;