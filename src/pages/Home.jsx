import MbButtonLink from "../components/common/MbButtonLink";

const Home = () => {
	return (
		<div id="hero-section">
			<div className="intro">Hello! I&apos;m</div>
			<h1 className="name">Minoshka Bocarro</h1>
			<div className="subtitle">Web Developer</div>
			<div className="button">
				<MbButtonLink to={"/Projects"}>
					Check Out My Projects
				</MbButtonLink>
			</div>
		</div>
	);
};

export default Home;
