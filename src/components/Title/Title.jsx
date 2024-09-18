import React from "react";

export default function Title({ title, margin }) {
	return (
		<div className={`mb-${margin}`}>
			<h1 className="text-lg font-bold">{title}</h1>
		</div>
	);
}
