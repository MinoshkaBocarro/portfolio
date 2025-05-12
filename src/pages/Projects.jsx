import { useState } from "react";

// Components
import CardAccordionList from "../components/features/cardAccordion/CardAccordionList";
import Title from "../components/common/Title";

// Images
import todoScreenshot from "../assets/projects/todo-screenshot.jpg";
import weatherAppScreenshot from "../assets/projects/weather-app-screenshot.jpg";
import calculatorScreenshot from "../assets/projects/calculator-screenshot.jpg";
import ticTacToeScreenshot from "../assets/projects/tic-tac-toe-screenshot.jpg";
import adminDashboardScreenshot from "../assets/projects/admin-dashboard-screenshot.jpg";
import signUpFormScreenshot from "../assets/projects/sign-up-form-screenshot.jpg";

function Projects() {
	const [cards] = useState([
		{
			projectNumber: 1,
			projectName: "Todo List",
			projectDescription:
				"A simple, schoolbook styled website to manage all your project todos.",
			techUsed: ["js", "html", "css"],
			gitHubLink: "https://github.com/MinoshkaBocarro/todo-list",
			liveLink: "https://minoshkabocarro.github.io/todo-list/",
			image: {
				src: todoScreenshot,
				alt: "screenshot of todo list website",
			},
		},
		{
			projectNumber: 2,
			projectName: "Weather App",
			projectDescription:
				"Weather app that shows the current weather, hourly weather and three day forecast.",
			techUsed: ["js", "html", "css"],
			gitHubLink: "https://github.com/MinoshkaBocarro/weather-app",
			liveLink: "https://minoshkabocarro.github.io/weather-app/",
			image: {
				src: weatherAppScreenshot,
				alt: "screenshot of weather app website",
			},
		},
		{
			projectNumber: 3,
			projectName: "Calculator",
			projectDescription:
				"Old school beginner calculator with complete functionality.",
			techUsed: ["js", "html", "css"],
			gitHubLink: "https://github.com/MinoshkaBocarro/calculator",
			liveLink: "https://minoshkabocarro.github.io/calculator/",
			image: {
				src: calculatorScreenshot,
				alt: "screenshot of calculator website",
			},
		},
		{
			projectNumber: 4,
			projectName: "Tic Tac Toe",
			projectDescription:
				"A game of tic tac toe played with a friend next to you",
			techUsed: ["js", "html", "css"],
			gitHubLink: "https://github.com/MinoshkaBocarro/tic-tac-toe",
			liveLink: "https://minoshkabocarro.github.io/tic-tac-toe/",
			image: {
				src: ticTacToeScreenshot,
				alt: "screenshot of tic tac toe website",
			},
		},
		{
			projectNumber: 5,
			projectName: "Admin Dashboard",
			projectDescription:
				"A dashboard layout created based on a given design using CSS Grid",
			techUsed: ["html", "css"],
			gitHubLink: "https://github.com/MinoshkaBocarro/admin-dashboard",
			liveLink: "https://minoshkabocarro.github.io/admin-dashboard/",
			image: {
				src: adminDashboardScreenshot,
				alt: "screenshot of admin dashboard website",
			},
		},
		{
			projectNumber: 6,
			projectName: "Sign Up Form",
			projectDescription:
				"A dummy sign up form styled using Flexbox with client-side validation through css and javascript",
			techUsed: ["css", "html", "js"],
			gitHubLink: "https://github.com/MinoshkaBocarro/sign-up-form",
			liveLink: "",
			image: {
				src: signUpFormScreenshot,
				alt: "screenshot of sign up form website",
			},
		},
	]);

	return (
		<>
			<Title>My Projects</Title>
			<div className="projects-page">
				<CardAccordionList cardsInfo={cards} />
			</div>
		</>
	);
}

export default Projects;
