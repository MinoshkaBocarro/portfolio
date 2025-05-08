import { Routes, Route, useLocation } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<div className="app">
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />}></Route>
						<Route path="projects" element={<Projects />} />
						<Route path="about" element={<About />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
