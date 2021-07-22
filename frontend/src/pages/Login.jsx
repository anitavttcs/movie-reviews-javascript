import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Login = ({ checkToken }) => {
	let history = useHistory();

	useEffect(() => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get("code");

		axios
			.post(process.env.REACT_APP_BACKEND_HOST, { code })
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