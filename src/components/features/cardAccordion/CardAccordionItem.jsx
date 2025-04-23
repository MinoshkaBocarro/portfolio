function CardAccordionItem({ cardData, activeIndex, onShow, onHide, index }) {
	return (
		<div>
			<div onClick={onShow}>Card Item {cardData}</div>
			{activeIndex === index ? (
				<div>You can See Card Content</div>
			) : (
				<></>
			)}
			<button
				onClick={activeIndex === index ? onHide : () => onShow(index)}
			>
				{activeIndex === index ? "Close" : " Open"}
			</button>
		</div>
	);
}

export default CardAccordionItem;
