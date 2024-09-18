import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
export const Navbar = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const routes = [
		{ path: "/", label: "Home Page", icon: <RiHomeSmile2Fill /> },
		{ path: "/candidates", label: "Candidates", icon: <RiUserLine /> },
	];

	return (
		<div>
			<nav className="flex flex-col space-y-4 w-[250px] border-r-[1px] bg-[#f8f9fb] h-full px-5">
				{routes.map((route) => (
					<Link
						key={route.path}
						to={route.path}
						className={`mt-5 py-2 px-6 ${
							currentPath === route.path
								? "bg-[#2567eb] rounded-lg text-white transition-all"
								: "border-transparent hover:transition-all"
						}`}
					>
						<div className="flex items-center ">
							<span
								className={`mr-2 text-lg  ${
									currentPath === route.path
										? "bg-[#2567eb] rounded-lg text-white transition-all"
										: "border-transparent hover:transition-all"
								}`}
							>
								{route.icon}
							</span>
							{route.label}
						</div>
					</Link>
				))}
			</nav>
		</div>
	);
};
