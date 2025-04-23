import CardAccordionItem from "./CardAccordionItem";

function CardAccordionList() {
	const cardList = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{cardList.map((card, index) => {
				return <CardAccordionItem key={index} cardData={card} />;
			})}
		</>
	);
}

export default CardAccordionList;
