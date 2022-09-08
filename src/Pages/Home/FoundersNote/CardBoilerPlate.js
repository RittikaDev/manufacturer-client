import React from "react";
import "./FoundersNote.css";

const CardBoilerPlate = ({ heading, paragraph, className }) => {
	return (
		<div className="card-founder">
			<h3 className="title">{heading}</h3>
			<div className="bar">
				<div className="emptybar"></div>
				<div className="filledbar"></div>
			</div>
			<div className="circle">
				<p className={`text-center absolute para ${className}`}>{paragraph}</p>
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
					<circle className="stroke" cx="60" cy="60" r="60" />
				</svg>
			</div>
		</div>
	);
};

export default CardBoilerPlate;
