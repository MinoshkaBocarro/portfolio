import { useState } from "react";

// Components
import MbButton from "../../common/MbButton";

function OpenCard({ cardData, onHide, getLogos }) {
	const {
		projectName,
		projectDescription,
		gitHubLink,
		liveLink,
		image: { src, alt },
	} = cardData;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`card open ${isHovered ? "project-hovered" : ""}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img alt={alt} src={src} className="screenshot" />
			<MbButton onClick={onHide}>^</MbButton>
			<h3>{projectName}</h3>
			<p>{projectDescription}</p>
			<div className="links">
				<a href={gitHubLink} target="_blank">
					GitHub
				</a>
				<a href={liveLink} target="_blank">
					Live Website
				</a>
			</div>
			<div className="tech">{getLogos()}</div>
		</div>
	);
}

export default OpenCard;
