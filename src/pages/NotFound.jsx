import MbButtonLink from "../components/common/MbButtonLink";

function NotFound() {
	return (
		<>
			<h1>Not Found</h1>
			<p>Hmmmmm, nothing here</p>
			<MbButtonLink to={"/"}>Home </MbButtonLink>
		</>
	);
}

export default NotFound;
