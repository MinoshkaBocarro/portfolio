import { Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />}></Route>
					<Route path="projects" element={<Projects />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
