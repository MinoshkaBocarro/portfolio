// Components
import Title from "../components/common/Title";

function About() {
	return (
		<>
			<Title>My Path</Title>
			<div className="about-page">
				<div className="direct">
					<h2>Please check out my work and contacts</h2>
					<div className="links">
						<a
							href="https://github.com/MinoshkaBocarro"
							target="_blank"
						>
							Github
						</a>
						<a
							href="https://au.linkedin.com/in/minoshka-bocarro-360275205"
							target="_blank"
						>
							LinkedIn
						</a>
					</div>
				</div>
				<div className="information">
					<p>
						Hello! My name is Minoshka. I am in the midst of a
						<b> Diploma of Information Technology</b>, focusing on
						<b> Front-End</b> and <b>Back-End</b> Web Development.
					</p>
					<p>
						Cobbling together websites that shine in
						<span> accessibility</span> and
						<span> user experience</span> is my passion. I love to
						keep things organised and strive to craft
						<span> maintainable</span> code in a smooth and
						efficient manner.
					</p>
					<p>
						With my <span>adaptability</span> and{" "}
						<span>critical analysis</span> skills gained from my
						studies during my <b>Bachelor of Science</b>, I am
						confident in being able to dig deep into any website.
					</p>
					<p>
						I&apos;ve always been drawn to fantasy and love almost
						every geeky thing under the stars like board games,
						video games and manga.
					</p>
				</div>
				<p className="thanks">Thank you for visiting my portfolio!</p>
			</div>
		</>
	);
}

export default About;
