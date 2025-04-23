import { useState } from "react";

// components
import CardAccordionItem from "./CardAccordionItem";

function CardAccordionList({ cardsInfo }) {
	const [activeIndex, setActiveIndex] = useState(1);

	function handleShow(id) {
		setActiveIndex(id);
	}

	function handleHide() {
		setActiveIndex(0);
	}

	return (
		<>
			{cardsInfo.map((card) => {
				const id = card.projectNumber;
				return (
					<CardAccordionItem
						cardData={card}
						key={id}
						onShow={(ref) => handleShow(id, ref)}
						onHide={() => handleHide(id)}
						isActive={id === activeIndex ? true : false}
						id={id}
					/>
				);
			})}
		</>
	);
}

export default CardAccordionList;
