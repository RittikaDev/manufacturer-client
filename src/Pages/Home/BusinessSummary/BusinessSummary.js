import React from "react";
import "./BusinessSummary.css";

const BusinessSummary = () => {
	return (
		<div className="bussiness">
			<div className="counts ">
				<h2>Services I Provide</h2>
				<div
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
				>
					<div className="count-box">
						<div data-aos="flip-left">
							<div className="fas fa-code">bsjfgsk</div>
						</div>
						<h4>Web Development</h4>
						<p>Front-end libaries and frameworks</p>
					</div>
				</div>
			</div>
			<div className="counts ">
				<h2>Services I Provide</h2>
				<div
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
				>
					<div className="count-box">
						<i className="fas fa-code"></i>
						<h4>Web Development tt</h4>
						<p>Front-end libaries and frameworks</p>
					</div>
				</div>
			</div>
			<div className="counts ">
				<h2>Services I Provide</h2>
				<div
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
				>
					<div className="count-box">
						<i data-aos="flip-left" className="fas fa-code"></i>
						<h4>Web Development</h4>
						<p>Front-end libaries and frameworks</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessSummary;
