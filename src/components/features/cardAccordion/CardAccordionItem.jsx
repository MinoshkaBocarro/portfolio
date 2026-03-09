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
import wordpressLogo from "../../../assets/logo-svgs/wordpress.svg";
import graphQLLogo from "../../../assets/logo-svgs/graphQL.svg";
import sassLogo from "../../../assets/logo-svgs/sass.svg";
import mongoDBLogo from "../../../assets/logo-svgs/mongoDB.svg";
import firebaseLogo from "../../../assets/logo-svgs/firebase.svg";
import vanillaExtractLogo from "../../../assets/logo-svgs/vanilla-extract.svg";
import expressLogo from "../../../assets/logo-svgs/express.svg";
import nodeLogo from "../../../assets/logo-svgs/node.svg";

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
			if (tech === "wordpress") {
				return (
					<img
						className="logo"
						alt="wordpress logo"
						src={wordpressLogo}
						key={index}
					/>
				);
			}
			if (tech === "node") {
				return (
					<img
						className="logo"
						alt="node logo"
						src={nodeLogo}
						key={index}
					/>
				);
			}
			if (tech === "express") {
				return (
					<img
						className="logo"
						alt="express logo"
						src={expressLogo}
						key={index}
					/>
				);
			}
			if (tech === "vanilla extract") {
				return (
					<img
						className="logo"
						alt="vanilla extract logo"
						src={vanillaExtractLogo}
						key={index}
					/>
				);
			}
			if (tech === "firebase") {
				return (
					<img
						className="logo"
						alt="firebase logo"
						src={firebaseLogo}
						key={index}
					/>
				);
			}
			if (tech === "mongoDB") {
				return (
					<img
						className="logo"
						alt="mongoDB logo"
						src={mongoDBLogo}
						key={index}
					/>
				);
			}
			if (tech === "sass") {
				return (
					<img
						className="logo"
						alt="sass logo"
						src={sassLogo}
						key={index}
					/>
				);
			}
			if (tech === "graphQL") {
				return (
					<img
						className="logo"
						alt="graphQL logo"
						src={graphQLLogo}
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
