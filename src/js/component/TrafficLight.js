import React from "react";
import "../../styles/index.scss";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = { clickedLight: null };
	}
	render() {
		let redClass = "";
		if (this.state.clickedLight == "red") redClass = "selected";
		let yellowClass = "";
		if (this.state.clickedLight == "yellow") yellowClass = "selected";
		let greenClass = "";
		if (this.state.clickedLight == "green") greenClass = "selected";
		return (
			<div id="semaforo">
				<div
					className={"red light" + redClass}
					onClick={() =>
						this.setState({ clickedLight: "red" })
					}></div>
				<div
					className={"yellow light" + redClass}
					onClick={() =>
						this.setState({ clickedLight: "yellow" })
					}></div>
				<div
					className={"green light" + redClass}
					onClick={() =>
						this.setState({ clickedLight: "green" })
					}></div>
			</div>
		);
	}
}
