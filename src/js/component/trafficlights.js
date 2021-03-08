import React, { useState } from "react";

//include images into your bundle

//create your first component
export function TrafficLights() {
	const [spotlight, setSpotlight] = useState("");

	return (
		<div className="container">
			<div
				onClick={() => setSpotlight("red")}
				className={spotlight === "red" ? "circle-red" : ""}></div>
			<div
				onClick={() => setSpotlight("yellow")}
				className={spotlight === "yellow" ? "circle-yellow" : ""}></div>
			<div
				onClick={() => setSpotlight("green")}
				className={spotlight === "green" ? "circle-green" : ""}></div>
		</div>
	);
}
