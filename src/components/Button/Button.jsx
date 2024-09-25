import React from "react";

export default function Button({
	icon,
	title,
	onClick,
	padding = 3,
	align = "center",
	disabled = false
}) {
	return (
		<div>
			<button
				disabled = {disabled}
				onClick={onClick}
				className={`flex justify-center bg-[#2567eb] items-center text-white rounded-lg px-5 
				py-${padding} w-full text-center
				${disabled ? "opacity-60" : "opacity-100"}
				`}
			>
				<span className="mr-2">{icon}</span>
				{title}
			</button>
		</div>
	);
}
