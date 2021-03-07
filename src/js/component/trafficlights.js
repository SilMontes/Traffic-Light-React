import React from "react";

//include images into your bundle

//create your first component
export function TrafficLights() {
	return (
		<div className="container">
			<div className="circle red" color="red"></div>
			<div className="circle yellow" color="yellow"></div>
			<div className="circle green" color="green"></div>
		</div>
	);
}
