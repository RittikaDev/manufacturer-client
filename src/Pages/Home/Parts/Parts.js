import React, { useEffect, useState } from "react";
import "./Parts.css";

const Parts = () => {
	const [parts, setParts] = useState([]);
	const [size] = useState(6);

	useEffect(() => {
		fetch(`https://enigmatic-ridge-78563.herokuapp.com/parts?size=${size}`)
			.then((res) => res.json())
			.then((data) => setParts(data));
	}, [size]);

	return (
		<div className="container page-wrapper mx-auto z-40">
			<div className="page-inner">
				<div className="cards mx-auto">
					{parts.map((part) => (
						<div className="el-wrapper" key={part._id}>
							<div className="box-up">
								<img className="img" src={part.image} alt="" />
								<div className="img-info">
									<div className="info-inner">
										<span className="p-name">{part.name}</span>
									</div>
									<div className="a-size">
										Available Quantity :
										<span className="size">{part.availquantity}</span>
										<p>
											Minimum Order :
											<span className="size"> {part.minquantity}</span>
										</p>
									</div>
								</div>
							</div>

							<div className="box-down">
								<div className="h-bg">
									<div className="h-bg-inner"></div>
								</div>

								<p className="cart" href="#">
									<span className="price">${part.price}</span>
									<span className="add-to-cart">
										<span className="txt">Add in cart</span>
									</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Parts;
