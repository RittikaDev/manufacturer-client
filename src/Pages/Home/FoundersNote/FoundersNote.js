import React from "react";
import "./FoundersNote.css";

const FoundersNote = () => {
	return (
		<div className="founders-note bg-slate-800 w-screen z-0 ">
			<div className="grid grid-cols-[810px_minmax(35px,_1fr)] mt-20 mx-16">
				<div
					style={{ padding: "240px 2% 240px 30%" }}
					className="rounded-l-3xl text-left mt-14"
				>
					<h1 className="text-white text-xl font-black">Few Words From Us </h1>
					<h1 className="text-white text-4xl font-black mt-6">
						Founder's Note
					</h1>
					<p className="text-gray-200 mt-6 leading-6">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
						quo ut, voluptate, quia asperiores tenetur, quod sunt molestias
						temporibus sed recusandae repellat vel
					</p>
				</div>
				<div className="founder-body">
					<h1 data-text="TechWorld" className=" founder-h1 z-40">
						TechWorld
					</h1>
				</div>
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
