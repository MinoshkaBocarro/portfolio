import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

// Images
import favicon from "../../assets/favicons/favicon.svg";

// Components
import Divider from "../common/Divider";

function Header() {
	// Favicon glow handling
	const glowItem = useRef(null);
	const [glowState, setGlowState] = useState(false);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	function handleGlowOn() {
		setGlowState(true);
	}

	function handleGlowOff() {
		setGlowState(false);
	}

	function handleGlow(e) {
		const { clientX, clientY } = e;
		setCursorPosition({ x: clientX - 10, y: clientY - 10 });
	}

	return (
		<>
			<Navbar id="navbar" className="mb-2 navbar-class" variant="dark">
				<Container>
					{glowState ? (
						<div
							className="glow"
							style={{
								left: `${cursorPosition.x}px`,
								top: `${cursorPosition.y}px`,
							}}
						></div>
					) : (
						<div className="glow hide"></div>
					)}
					<Navbar.Brand as={Link} to="/">
						<img
							src={favicon}
							alt="MB Logo for Minoshka Bocarro"
							className="favicon glow-area"
							onMouseEnter={handleGlowOn}
							onMouseMove={handleGlow}
							onMouseLeave={handleGlowOff}
							ref={glowItem}
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
