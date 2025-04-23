function CardAccordionItem({ cardData, onShow, onHide, isActive, id }) {
	const {
		projectName,
		projectDescription,
		gitHubLink,
		liveLink,
		image: { src, alt },
	} = cardData;

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
					<div className="tech"></div>
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
