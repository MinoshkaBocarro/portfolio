import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div id="app">
			<Header id="header" />
			<div id="app-content">
				<Container>
					<div id="page-container">
						<Outlet />
					</div>
				</Container>
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
