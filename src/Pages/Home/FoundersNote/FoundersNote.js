import React from "react";
import CardBoilerPlate from "./CardBoilerPlate";
import "./FoundersNote.css";

const FoundersNote = () => {
	return (
		<div
			id="foundersNote"
			className="founders-note bg-zinc-800 w-screen z-0 mt-24"
		>
			<div className="grid grid-cols-[885px_minmax(35px,_1fr)] my-20 mx-16">
				<div
					style={{
						padding: "50px 2% 50px 15%",
					}}
					className=" text-left mt-72 div ml-28"
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
					<button className="btn glass md:text-xl text-lg mt-5 font-bold w-2/4">
						Learn More
					</button>
				</div>
				<div className="founder-body">
					<h1 data-text="TechWorld" className="founder-h1 z-40 ">
						TechWorld
					</h1>
				</div>
			</div>
			<div className="container-founder mx-auto mt-28">
				<CardBoilerPlate
					heading={"2001"}
					paragraph={"Journey Started"}
					className={"mt-12 mr-44 "}
				/>
				<CardBoilerPlate
					heading={"2002"}
					paragraph={"Revolutional Technology"}
					className={"mt-6 pt-2 mr-44 "}
				/>
				<CardBoilerPlate
					heading={"2003"}
					paragraph={"Collaboration With High End Brands"}
					className={"mt-6 mr-44 "}
				/>
				<CardBoilerPlate
					heading={"2006"}
					paragraph={"Recognized As One Of The Lead  Manufacturing Team"}
					className={"mt-1 mr-44 "}
				/>
			</div>
		</div>
	);
};

export default FoundersNote;
