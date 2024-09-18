import { Routes, Route } from "react-router-dom";
import Home from "./features/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import Candidates from "./features/Candidates/Candidates";
function App() {
	return (
		<div className="flex h-screen">
			<Navbar />
			<div className="p-5 w-full">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/candidates" element={<Candidates />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
