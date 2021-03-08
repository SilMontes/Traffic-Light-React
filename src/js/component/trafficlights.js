import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
export function TrafficLights() {
	const [spotlight, setSpotlight] = useState("green");
	useEffect(() => {
		const changing = setInterval(() => {
			spotlight === "green"
				? setSpotlight("red")
				: spotlight === "yellow"
				? setSpotlight("green")
				: spotlight === "red"
				? setSpotlight("yellow")
				: null;
		}, 5000);
		return () => clearInterval(changing);
	}, [spotlight]);

	return (
		<div className="container">
			<div
				id="redOne"
				onClick={() => setSpotlight("red")}
				className={spotlight === "red" ? "circle-red" : ""}></div>
			<div
				id="yellowOne"
				onClick={() => setSpotlight("yellow")}
				className={spotlight === "yellow" ? "circle-yellow" : ""}></div>
			<div
				id="greenOne"
				onClick={() => setSpotlight("green")}
				className={spotlight === "green" ? "circle-green" : ""}></div>
		</div>
	);
}
