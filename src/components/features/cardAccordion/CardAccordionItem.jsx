// Components
import OpenCard from "./OpenCard";
import ClosedCard from "./ClosedCard";

//Images
import jsLogo from "../../../assets/logo-svgs/js.svg";
import cssLogo from "../../../assets/logo-svgs/css.svg";
import htmlLogo from "../../../assets/logo-svgs/html.svg";
import tailwindLogo from "../../../assets/logo-svgs/tailwind.svg";
import reactLogo from "../../../assets/logo-svgs/react.svg";
import nextLogo from "../../../assets/logo-svgs/next.svg";

function CardAccordionItem({ cardData, isActive, onHide, onShow }) {
	// generate array with logos based on tech used
	function getLogos() {
		return cardData.techUsed.map((tech, index) => {
			if (tech === "js") {
				return (
					<img
						className="logo"
						alt="javascript logo"
						src={jsLogo}
						key={index}
					/>
				);
			}
			if (tech === "css") {
				return (
					<img
						className="logo"
						alt="css logo"
						src={cssLogo}
						key={index}
					/>
				);
			}
			if (tech === "tailwind") {
				return (
					<img
						className="logo"
						alt="tailwind logo"
						src={tailwindLogo}
						key={index}
					/>
				);
			}
			if (tech === "react") {
				return (
					<img
						className="logo"
						alt="react logo"
						src={reactLogo}
						key={index}
					/>
				);
			}
			if (tech === "next") {
				return (
					<img
						className="logo"
						alt="next logo"
						src={nextLogo}
						key={index}
					/>
				);
			}
			if (tech === "html") {
				return (
					<img
						className="logo"
						alt="html logo"
						src={htmlLogo}
						key={index}
					/>
				);
			}
		});
	}

	return (
		<>
			{/* Card (Open/Closed) rendered based on if active */}
			{isActive ? (
				<OpenCard
					cardData={cardData}
					getLogos={getLogos}
					onHide={onHide}
				/>
			) : (
				<ClosedCard
					cardData={cardData}
					getLogos={getLogos}
					onShow={onShow}
				/>
			)}
		</>
	);
}

export default CardAccordionItem;
