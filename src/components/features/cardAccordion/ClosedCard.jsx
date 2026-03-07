import { useState } from "react";

// Components
import MbButton from "../../common/MbButton";

function ClosedCard({ cardData, onShow, getLogos }) {
	const {
		projectName,
		image: { src, alt },
	} = cardData;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`card closed ${isHovered ? "project-hovered" : ""}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<h3>{projectName}</h3>
			<img alt={alt} src={src} className="screenshot" />
			<div className="tech">{getLogos()}</div>
			<MbButton onClick={() => onShow()}>&#8964;</MbButton>

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

export default ClosedCard;
