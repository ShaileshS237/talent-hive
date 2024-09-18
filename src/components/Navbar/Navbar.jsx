import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const routes = [
		{ path: "/", label: "Home Page", icon: "" },
		{ path: "/user", label: "User", icon: "" },
	];

	return (
		<div>
			<nav className="flex flex-col space-y-4 w-[200px]">
				{routes.map((route) => (
					<Link
						key={route.path}
						to={route.path}
						className={`my-4 py-3 px-6 ${
							currentPath === route.path
								? "bg-[#b5aed3] rounded-xl text-[#4f3a63] transition-all"
								: "border-transparent hover:transition-all"
						}`}
					>
						{route.label}
					</Link>
				))}
			</nav>
		</div>
	);
};
