import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

// Images
import favicon from "../../assets/favicons/favicon.svg";

// Components
import Divider from "../common/Divider";

function Header() {
	return (
		<>
			<Navbar id="navbar" className="mb-2 navbar-class" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to="/">
						<img
							src={favicon}
							alt="MB Logo for Minoshka Bocarro"
							className="favicon glow-area"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto navbar-custom">
							<Nav.Link as={Link} to="/" className="px-3 fs-5">
								Home
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/about"
								className="px-3 fs-5"
							>
								About
							</Nav.Link>
							<Nav.Link
								as={Link}
								to="/projects"
								className="px-3 fs-5"
							>
								Projects
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Divider />
		</>
	);
}

export default Header;
