import { PiCastleTurretLight } from "react-icons/pi";
import MbButtonLink from "../components/common/MbButtonLink";

function NotFound() {
	return (
		<>
			<h1>Careful!</h1>
			<p>You nearly ventured into the endless dungeon...</p>
			<p>Head back to the keep for now!</p>
			<MbButtonLink to={"/"}>
				<PiCastleTurretLight aria-labelledby="Home button" />
			</MbButtonLink>
		</>
	);
}

export default NotFound;
