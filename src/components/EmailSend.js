import axios from "axios";
import React, { useState } from "react";
const createHistory = require("history").createBrowserHistory;

export default function EmailSend() {
	const [email, setemail] = useState("");

	const sendEmail = () => {
		axios
			.post(
				"https://online-invitation-application.herokuapp.com/send-email/" +
					email
			)
			.then((response) => {
				if (response.status === 200) {
					alert("Invitaion Sent !");
					let history = createHistory();

					history.push("/login-stream");
					let pathUrl = window.location.href;
					window.location.href = pathUrl;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<div className="container mt-5 mb-5">
				<div className="row justify-content-center mt-5">
					<div className="col-md-5">
						<div className="card" style={{ marginTop: 100 }}>
							<div className="card-header text-center m-3">
								<h3>Send Email Invitation</h3>
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
											setemail(e.target.value);
										}}
									/>
								</div>

								<div className="form-group"></div>
								<div className="form-group m-3">
									<input
										className="btn btn-success btn-block"
										type="button"
										onClick={sendEmail}
										value="Send Invitation Link"
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
