import React from "react";

export default function Button({
	icon,
	title,
	onClick,
	padding = "2",
	align = "center",
}) {
	return (
		<div>
			<button
				onClick={onClick}
				className={`flex justify-center bg-[#2567eb] items-center text-white rounded-lg px-5 py-${padding} w-full text-center`}
			>
				<span className="mr-2">{icon}</span>
				{title}
			</button>
		</div>
	);
}
