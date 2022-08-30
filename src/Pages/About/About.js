import React, { useState } from "react";
import Logo from "../../images/Logo1.PNG";
import "./About.css";

const About = () => {
	const [activeTab, setActiveTab] = useState("tab1");
	const handleTab1 = () => {
		setActiveTab("tab1");
	};
	const handleTab2 = () => {
		setActiveTab("tab2");
	};
	return (
		<>
			<div className="grid grid-cols-[630px_minmax(800px,_1fr)] my-16">
				<div
					style={{ padding: "240px 12% 240px 30%" }}
					className="bg-yellow-500 rounded-l-3xl text-left"
				>
					<h1 className="text-white text-6xl font-black">Services </h1>
					<p className="text-gray-200 mt-6 leading-6">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean.
					</p>
				</div>
				<div className="paralax rounded-r-3xl flex items-center justify-center align-middle">
					<img src={Logo} alt="" width="50%" />
				</div>
			</div>
			<div className="grid grid-cols-[790px_minmax(800px,_1fr)] my-16">
				<div style={{ padding: "240px 12% 240px 30%" }} className=" text-left">
					<h1 className=" text-6xl font-black">Services </h1>
					<p className=" mt-6 leading-6">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean.
					</p>
				</div>
				<div className="Tabs">
					<ul className="nav">
						<li
							className={activeTab === "tab1" ? "active" : ""}
							onClick={handleTab1}
						>
							Tab 1
						</li>
						<li
							className={activeTab === "tab2" ? "active" : ""}
							onClick={handleTab2}
						>
							Tab 2
						</li>
					</ul>
					<div className="outlet">
						{activeTab === "tab1" ? (
							<div className="text-center mt-40 rounded-none">
								<p>First Tab</p>
							</div>
						) : (
							<div className="text-center mt-40">
								<p>Second Tab</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
