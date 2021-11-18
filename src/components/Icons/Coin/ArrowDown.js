import React from "react";

const ArrowDown = (id) => {
	return (
		<svg width="57" height="68" viewBox="0 0 57 68" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M25.9321 66.9111C27.132 68.363 29.3573 68.363 30.5572 66.9111L55.7961 36.3705C57.4127 34.4143 56.0213 31.4594 53.4835 31.4594L41.7445 31.4594L41.7445 3.70961C41.7445 2.05275 40.4014 0.709609 38.7445 0.709608L17.7445 0.709607C16.0877 0.709606 14.7445 2.05275 14.7445 3.7096L14.7445 31.4594L3.00581 31.4594C0.468059 31.4594 -0.923333 34.4142 0.693282 36.3704L25.9321 66.9111Z"
				fill="url(#arrow-down-grad)"
			/>
			<defs>
				<linearGradient
					id="arrow-down-grad"
					x1="28.0086"
					y1="69.5664"
					x2="28.0087"
					y2="-18.0742"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#EB6B6B" />
					<stop offset="0.70188" stopColor="#EB6B6B" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default ArrowDown;
