import { Routes, Route } from "react-router-dom";
import Home from "./features/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
	return (
		<div className="flex h-screen">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
