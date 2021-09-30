import axios from "axios";
import React, { useState } from "react";
const createHistory = require("history").createBrowserHistory;

export default function LiveStream() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const checkAuth = () => {
		if (email === "") {
			alert("Email is Empty !");
		} else if (password === "") {
			alert("Password is Empty !");
		} else {
			axios
				.post(
					"https://online-invitation-application.herokuapp.com/login/" +
						email +
						"/" +
						password
				)
				.then((response) => {
					if (response.data.length === 0) {
						alert("Invalid Credentials !");
					} else {
						sessionStorage.setItem("logged", "true");
						let history = createHistory();

						history.push("/stream");
						let pathUrl = window.location.href;
						window.location.href = pathUrl;
					}
				})
				.catch((err) => {
					console.log(err);
				});
			// if(password != "teststream")
			// {
			//     alert("Oops, Incorrect Password")
			// }
			// else
			// {
			//     let history = createHistory();

			//     history.push("/stream");
			//     let pathUrl = window.location.href;
			//     window.location.href = pathUrl;
			// }
		}
	};

	return (
		<div>
			<div className="container mt-5 mb-5">
				<div className="row justify-content-center mt-5">
					<div className="col-md-5">
						<div className="card" style={{ marginTop: 100 }}>
							<div className="card-header text-center m-3">
								<h3>Login For Live Stream</h3>
							</div>
							<div className="card-body">
								<div className="form-group m-3">
									<label className="mb-2">Email Address</label>
									<input
										className="form-control"
										placeholder="Enter Email Address"
										required
										type="email"
										name="email"
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</div>
								<div className="form-group m-3">
									<label className="mb-2">Password</label>
									<input
										className="form-control"
										placeholder="Enter the Password for Stream"
										required
										type="password"
										name="password"
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
								</div>

								<div className="form-group"></div>
								<div className="form-group m-3">
									<input
										className="btn btn-success btn-block"
										type="button"
										onClick={checkAuth}
										value="Login"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
