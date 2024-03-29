import React, { useEffect, useState } from "react";
import "./Reviews.css";

const Reviews = () => {
	const [review, setReview] = useState([]);

	useEffect(() => {
		fetch("https://enigmatic-ridge-78563.herokuapp.com/reviews")
			.then((res) => res.json())
			.then((data) => setReview(data));
	}, []);

	return (
		<>
			<h2 className="sm:font-extrabold font-semibold sm:text-3xl text-xl text-center mb-6">
				Reviews
			</h2>
			<div className=" w-96 bg-base-100 shadow-xl mb-12 p-12 reviews">
				{review.map((rev) => (
					<div className="inventory-text my-5" key={rev._id}>
						<div className="mt-1">
							<div className="inventory-textbox grid grid-cols-2">
								<p className="text-lg card-title">{rev.name}</p>
								<div className="flex-end rating">
									{[...Array(rev.ratings)].map((elementInArray, index) => (
										<input
											key={index}
											type="radio"
											name="rating-2"
											className="mask mask-star-2 bg-orange-400"
										/>
									))}
								</div>
							</div>
							<div className="inventory-textbox">
								<p className=" text-base card-title">{rev.review}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Reviews;
