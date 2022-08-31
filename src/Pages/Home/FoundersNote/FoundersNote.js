import React from "react";
import "./FoundersNote.css";

const FoundersNote = () => {
	return (
		<div className="founders-note bg-slate-800 w-screen z-0">
			<div className="grid grid-cols-[750px_minmax(800px,_1fr)] mt-20">
				<div
					style={{ padding: "240px 12% 240px 30%" }}
					className=" rounded-l-3xl text-left"
				>
					<h1 className="text-white text-6xl font-black">Services </h1>
					<p className="text-gray-200 mt-6 leading-6">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean.
					</p>
				</div>
				<div className="founder-body">
					<h1 data-text="back in black" className="mt-14 founder-h1 z-40">
						back in black
					</h1>
				</div>

				{/* <p className="md:text-9xl text-3xl text-center font-black text-slate-200 mt-60">
					<span
						className="bg-gradient-to-r from-slate-200 via-red-100 to-red-700 bg-clip-text text-transparent"
						style={{ textShadow: "5px 0px 10px black" }}
					>
						TechWorld
					</span>
				</p> */}
			</div>
			<div className="container-founder mx-auto">
				<div className="card-founder">
					<h3 className="title">Card 1</h3>
					<div className="bar">
						<div className="emptybar"></div>
						<div className="filledbar"></div>
					</div>
					<div className="circle">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
							<circle className="stroke" cx="60" cy="60" r="50" />
						</svg>
					</div>
				</div>
				<div className="card-founder">
					<h3 className="title">Card 2</h3>
					<div className="bar">
						<div className="emptybar"></div>
						<div className="filledbar"></div>
					</div>
					<div className="circle">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
							<circle className="stroke" cx="60" cy="60" r="50" />
						</svg>
					</div>
				</div>
				<div className="card-founder">
					<h3 className="title">Card 3</h3>
					<div className="bar">
						<div className="emptybar"></div>
						<div className="filledbar"></div>
					</div>
					<div className="circle">
						{/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
						<circle className="stroke" cx="60" cy="60" r="50" />
					</svg> */}
						<p className="para">jfvgishgosghs</p>
					</div>
				</div>
				<div className="card-founder">
					<h3 className="title">Card 4</h3>
					<div className="bar">
						<div className="emptybar"></div>
						<div className="filledbar"></div>
					</div>
					<div className="circle">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
							<circle className="stroke" cx="60" cy="60" r="50" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoundersNote;
