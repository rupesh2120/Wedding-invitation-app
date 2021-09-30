import React, { useEffect } from "react";
import GooglePayButton from "@google-pay/button-react";
import { Link } from "react-router-dom";
const createHistory = require("history").createBrowserHistory;

export default function StreamPreview() {
	// var status = sessionStorage.getItem("logged");
	// useEffect(() => {
	// 	if (status === null) {
	// 		let history = createHistory();

	// 		history.push("/login-stream");
	// 		let pathUrl = window.location.href;
	// 		window.location.href = pathUrl;
	// 	}
	// });

	const exit = () => {
		//sessionStorage.clear();

		let history = createHistory();

		history.push("/login-stream");
		let pathUrl = window.location.href;
		window.location.href = pathUrl;

		// history.push("/");
		// let pathUrl = window.location.href;
		// window.location.href = pathUrl;
	};

	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark sh-lg">
				<a className="navbar-brand" style={{ marginLeft: 40 }} href="#">
					Ceremony
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							{/* <router-link className="nav-link" to="/add">Add New Client</router-link> */}
						</li>
						<li className="nav-item">
							<a className="nav-link"></a>
						</li>

						<li className="nav-item">
							{
								<button
									style={{ marginLeft: 1250 }}
									onClick={exit}
									className="btn btn-danger"
								>
									Guest Login
								</button>
							}
						</li>
					</ul>
				</div>
			</nav>

			<div className="container mt-5 mb-5">
				<div className="row justify-content-center mt-5">
					<div className="col-md-12">
						<div className="card" style={{ marginTop: 5 }}>
							<div className="card-header text-center m-3">
								<h3>Wedding Live Stream</h3>
							</div>
							<div className="card-body">
								<div className="col-md-12">
									<iframe
										width="1250"
										height="700"
										src="https://www.youtube.com/embed?v=TeZ9y70Ea04"
										title="Wedding Live Stream"
										frameBorder="0"
										allowFullScreen
									></iframe>
								</div>
								<div className="col-md-12">
									<h2>Online Shagun</h2>
									<GooglePayButton
										environment="TEST"
										buttonColor="black"
										buttonType="donate"
										paymentRequest={{
											apiVersion: 2,
											apiVersionMinor: 0,
											allowedPaymentMethods: [
												{
													type: "CARD",
													parameters: {
														allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
														allowedCardNetworks: ["MASTERCARD", "VISA"],
													},
													tokenizationSpecification: {
														type: "PAYMENT_GATEWAY",
														parameters: {
															gateway: "example",
															gatewayMerchantId: "exampleGatewayMerchantId",
														},
													},
												},
											],
											merchantInfo: {
												merchantId: "12345678901234567890",
												merchantName: "Demo Merchant",
											},
											transactionInfo: {
												totalPriceStatus: "FINAL",
												totalPriceLabel: "Total",
												totalPrice: "100.00",
												currencyCode: "USD",
												countryCode: "US",
											},
										}}
										onLoadPaymentData={(paymentRequest) => {
											console.log("load payment data", paymentRequest);
										}}
									/>
									<br></br>
									{/* <button className="btn btn-danger mt-3" onClick={exit}>Exit from Stream</button> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
