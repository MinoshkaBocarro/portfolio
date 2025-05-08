import { useState } from "react";
import anvilSound from "../assets/anvil-sound.wav";

// Components
import MbButtonLink from "../components/common/MbButtonLink";

// Images
import forgeIcon from "../assets/forge.svg";

const Home = () => {
	const [iconState, setIconState] = useState(false);
	const audio = new Audio(anvilSound);

	function iconOn() {
		setIconState(true);
		audio.play();
	}

	function iconOff() {
		setIconState(false);
	}

	return (
		<div id="hero-section">
			<div className="intro">Hello! I&apos;m</div>
			<h1 className="name">Minoshka Bocarro</h1>
			<div className="subtitle">Web Developer</div>
			<div className="button">
				{iconState && <img src={forgeIcon} alt="a bronze forge" />}
				<MbButtonLink
					onMouseEnter={iconOn}
					onMouseLeave={iconOff}
					to={"/Projects"}
				>
					Check Out My Projects
				</MbButtonLink>
				{iconState && <img src={forgeIcon} alt="a bronze forge" />}
			</div>
		</div>
	);
};

export default Home;
