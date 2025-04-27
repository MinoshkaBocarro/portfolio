import { PiCastleTurretLight } from "react-icons/pi";

// Components
import MbButtonLink from "../components/common/MbButtonLink";
import Title from "../components/common/Title";

function NotFound() {
	return (
		<>
			<Title>Careful!</Title>
			<p>You nearly ventured into the endless dungeon...</p>
			<p>Head back to the keep for now!</p>
			<MbButtonLink to={"/"}>
				<PiCastleTurretLight aria-labelledby="Home button" />
			</MbButtonLink>
		</>
	);
}

export default NotFound;
