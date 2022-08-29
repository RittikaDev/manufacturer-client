import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
	return (
		<div className="grid grid-cols-3 w-screen" style={{ marginLeft: "-50px" }}>
			<div style={{ backgroundColor: "#24272a" }}>
				<div style={{ padding: "358px 12% 409px 30%" }}>
					<div className="text-left">
						<h1 className="text-white text-6xl font-black">Services </h1>
						<p className="text-slate-400 mt-7 leading-7">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div
					style={{
						backgroundImage:
							"url(https://baumeister.qodeinteractive.com/wp-content/uploads/2017/11/p2-about-us-mg-2.jpg)",
					}}
				>
					<div style={{ padding: "111px 23% 131px 26%" }}>
						<div className="text-left">
							<h3 className="text-white text-4xl font-black">Engineering</h3>
							<p className="text-slate-400 mt-7 leading-7">
								Aliquam lorem ante, dapibus in, viverra quis, feugiat.
								Phasellusis viverra nulla ut metus varius laoreet quisquer
							</p>
						</div>
						<div style={{ height: " 40px" }}>
							<span></span>
						</div>
						<a
							itemprop="url"
							href="https://baumeister.qodeinteractive.com/portfolio-item/heavy-equipment/"
							target="_self"
							className="btn bg-yellow-500"
						>
							<span className="text-white mr-3">Read more</span>
							<span>
								<FontAwesomeIcon
									className="text-white"
									icon={faArrowRight}
								></FontAwesomeIcon>
							</span>
						</a>
					</div>
				</div>
				<div style={{ backgroundColor: "#2e3338" }}>
					<div style={{ padding: "111px 23% 131px 26%" }}>
						<div className="text-left">
							<h3 className="text-white text-4xl font-black">Building </h3>
							<p className="text-slate-400 mt-7 leading-7">
								Aliquam lorem ante, dapibus in, viverra quis, feugiat.
								Phasellusis viverra nulla ut metus varius laoreet quisquer
							</p>
						</div>
						<div style={{ height: "40px" }}>
							<span></span>
						</div>
						<a
							itemprop="url"
							href="https://baumeister.qodeinteractive.com/portfolio-item/heavy-equipment/"
							target="_self"
							className="btn bg-yellow-500"
						>
							<span className="text-white mr-3">Read more</span>
							<span>
								<FontAwesomeIcon
									className="text-white"
									icon={faArrowRight}
								></FontAwesomeIcon>
							</span>
						</a>
					</div>
				</div>
			</div>
			<div>
				<div style={{ backgroundColor: "#2e3338" }}>
					<div style={{ padding: "111px 23% 131px 26%" }}>
						<div className="text-left">
							<h3 className="text-white text-4xl font-black">Process</h3>
							<p className="text-slate-400 mt-7 leading-7">
								Aliquam lorem ante, dapibus in, viverra quis, feugiat.
								Phasellusis viverra nulla ut metus varius laoreet quisquer
							</p>
						</div>
						<div style={{ height: "40px" }}>
							<span></span>
						</div>
						<a
							itemprop="url"
							href="https://baumeister.qodeinteractive.com/portfolio-item/heavy-equipment/"
							target="_self"
							className="btn bg-yellow-500"
						>
							<span className="text-white mr-3">Read more</span>
							<span>
								<FontAwesomeIcon
									className="text-white"
									icon={faArrowRight}
								></FontAwesomeIcon>
							</span>
						</a>
					</div>
				</div>
				<div
					style={{
						backgroundImage:
							"url(https://baumeister.qodeinteractive.com/wp-content/uploads/2017/11/p2-about-us-mg-3.jpg)",
					}}
				>
					<div style={{ padding: "111px 23% 131px 26%" }}>
						<div className="text-left">
							<h3 className="text-white text-4xl font-black">Industry</h3>
							<p className="text-slate-400 mt-7 leading-7">
								Aliquam lorem ante, dapibus in, viverra quis, feugiat.
								Phasellusis viverra nulla ut metus varius laoreet quisquer
							</p>
						</div>
						<div style={{ height: "40px" }}>
							<span></span>
						</div>
						<a
							itemprop="url"
							href="https://baumeister.qodeinteractive.com/portfolio-item/heavy-equipment/"
							target="_self"
							className="btn bg-yellow-500"
						>
							<span className="text-white mr-3">Read more</span>
							<span>
								<FontAwesomeIcon
									className="text-white"
									icon={faArrowRight}
								></FontAwesomeIcon>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
