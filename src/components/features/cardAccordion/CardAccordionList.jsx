import { useState } from "react";

// components
import CardAccordionItem from "./CardAccordionItem";

function CardAccordionList() {
	const cardList = [1, 2, 3, 4, 5, 6];

	const [activeIndex, setActiveIndex] = useState(1);

	function handleShow(id) {
		console.log(id);
		setActiveIndex(id);
	}

	function handleHide() {
		setActiveIndex(0);
	}

	return (
		<>
			{cardList.map((card, index) => {
				return (
					<CardAccordionItem
						key={index}
						cardData={card}
						onShow={(ref) => handleShow(index, ref)}
						onHide={() => handleHide(index)}
						activeIndex={activeIndex}
						index={index}
					/>
				);
			})}
		</>
	);
}

export default CardAccordionList;
