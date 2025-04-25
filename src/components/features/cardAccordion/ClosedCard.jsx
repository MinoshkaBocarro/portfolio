import { useRef, useState } from "react";

// Components
import MbButton from "../../common/MbButton";

function ClosedCard({ cardData, onShow, getLogos }) {
	const {
		projectName,
		image: { src, alt },
	} = cardData;

	const ref = useRef();

	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`card closed ${isHovered ? "project-hovered" : ""}`}
			ref={ref}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<h3>{projectName}</h3>
			<img alt={alt} src={src} className="screenshot" />
			<div className="tech">{getLogos()}</div>
			<MbButton onClick={() => onShow(ref)}>&#8964;</MbButton>
		</div>
	);
}

export default ClosedCard;
