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

			{/* Border placement */}
			<div className="corner corner-top-left-up"></div>
			<div className="corner corner-top-left-down"></div>
			<div className="corner corner-top-right-up"></div>
			<div className="corner corner-top-right-down"></div>
			<div className="corner corner-bottom-left-up"></div>
			<div className="corner corner-bottom-left-down"></div>
			<div className="corner corner-bottom-right-up"></div>
			<div className="corner corner-bottom-right-down"></div>
		</div>
	);
}

export default OpenCard;
