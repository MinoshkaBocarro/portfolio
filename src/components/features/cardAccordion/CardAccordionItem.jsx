// logos
import jsLogo from "../../../assets/logo-svgs/js.svg";
import cssLogo from "../../../assets/logo-svgs/css.svg";
import htmlLogo from "../../../assets/logo-svgs/html.svg";

function CardAccordionItem({ cardData, onShow, onHide, isActive, id }) {
	const {
		projectName,
		projectDescription,
		gitHubLink,
		liveLink,
		image: { src, alt },
	} = cardData;

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
		<div>
			<div>Card {id}</div>
			{isActive ? (
				<div>
					<img alt={alt} src={src} className="screenshot" />
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
			) : (
				<></>
			)}
			<button onClick={isActive ? onHide : () => onShow(id)}>
				{isActive ? "Close" : " Open"}
			</button>
		</div>
	);
}

export default CardAccordionItem;
