import React from "react";

export default function Button({
	icon,
	title,
	onClick,
	padding="0.5",
	align = "center",
	disabled = false
}) {
	return (
		<div>
			<button
				disabled = {disabled}
				onClick={onClick}
				style={{ paddingTop: `${padding}rem`, paddingBottom: `${padding}rem` }}
				className={`flex justify-center bg-[#2567eb] items-center text-white rounded-lg px-5 w-full text-center
				${disabled ? "opacity-60" : "opacity-100"}
				`}
			>
				<span className="mr-2">{icon}</span>
				{title}
			</button>
		</div>
	);
}
