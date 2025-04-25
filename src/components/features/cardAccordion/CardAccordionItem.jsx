// Components
import OpenCard from "./OpenCard";
import ClosedCard from "./ClosedCard";

//Images
import jsLogo from "../../../assets/logo-svgs/js.svg";
import cssLogo from "../../../assets/logo-svgs/css.svg";
import htmlLogo from "../../../assets/logo-svgs/html.svg";

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
