import { useState } from "react";

// Components
import CardAccordionList from "../components/features/cardAccordion/CardAccordionList";
import Title from "../components/common/Title";

// Images
import nookBookScreenShot from "../assets/projects/nook-books-screenshot.webp";
import todoScreenshot from "../assets/projects/todo-screenshot.webp";
import weatherAppScreenshot from "../assets/projects/weather-app-screenshot.webp";
import calculatorScreenshot from "../assets/projects/calculator-screenshot.webp";
import ticTacToeScreenshot from "../assets/projects/tic-tac-toe-screenshot.webp";
import adminDashboardScreenshot from "../assets/projects/admin-dashboard-screenshot.webp";
import signUpFormScreenshot from "../assets/projects/sign-up-form-screenshot.webp";
import theWatchtowerScreenshot from "../assets/projects/the-watchtower-screenshot.webp";
import pecoAndCoScreenshot from "../assets/projects/peco-and-co-screenshot.webp";
import wistfullyWagashiScreenshot from "../assets/projects/wistfully-wagashi-screenshot.webp";
import scheduliteScreenshot from "../assets/projects/schedulite-screenshot.webp";

function Projects() {
	const [cards] = useState([
		{
			projectIdentifier: 1011,
			projectName: "Wistfully Wagashi",
			projectDescription:
				"A e-commerce website for Japanese confectionary.",
			techUsed: [
				"react",
				"vanilla extract",
				"node.js",
				"express",
				"firebase",
			],
			gitHubLink: "https://github.com/MinoshkaBocarro/wistfully-wagashi",
			liveLink: "https://wistfullywagashi.onrender.com",
			image: {
				src: wistfullyWagashiScreenshot,
				alt: "screenshot of Wistfully Wagashi website",
			},
		},
		{
			projectIdentifier: 931,
			projectName: "Schedulite",
			projectDescription: "A scheduling website for events.",
			techUsed: ["react", "sass", "node.js", "graphQL", "mongoDB"],
			gitHubLink: "https://github.com/MinoshkaBocarro/schedulite",
			liveLink: "https://schedulite.onrender.com",
			image: {
				src: scheduliteScreenshot,
				alt: "screenshot of Schedulite website",
			},
		},
		{
			projectIdentifier: 1121,
			projectName: "Peco&Co Client Website",
			projectDescription:
				"A website for a small business owner to help promote their services, created on WordPress as part of a team project",
			techUsed: ["wordpress"],
			liveLink: "https://pecoandco.com.au/",
			image: {
				src: pecoAndCoScreenshot,
				alt: "screenshot of Peco and Co client website",
			},
		},
		{
			projectIdentifier: 821,
			projectName: "Nook Books",
			projectDescription: "A stripped back, book showcase by genre.",
			techUsed: ["react", "next", "tailwind"],
			gitHubLink: "https://github.com/MinoshkaBocarro/nook-books",
			liveLink: "https://nookbooks.vercel.app/",
			image: {
				src: nookBookScreenShot,
				alt: "screenshot of Nook Books website",
			},
		},
		{
			projectIdentifier: 751,
			projectName: "The Watchtower",
			projectDescription:
				"A watchlist website where you can track and organise your shows.",
			techUsed: ["react", "css"],
			gitHubLink: "https://github.com/MinoshkaBocarro/the-watchtower",
			liveLink: "https://thewatchtowerwatchlist.netlify.app/",
			image: {
				src: theWatchtowerScreenshot,
				alt: "screenshot of The Watchtower website",
			},
		},
		{
			projectIdentifier: 622,
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
			projectIdentifier: 233,
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
			projectIdentifier: 134,
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
			projectIdentifier: 324,
			projectName: "Tic Tac Toe",
			projectDescription:
				"A game of tic tac toe played with a friend next to you in javascript",
			techUsed: ["js", "html", "css"],
			gitHubLink: "https://github.com/MinoshkaBocarro/tic-tac-toe",
			liveLink: "https://minoshkabocarro.github.io/tic-tac-toe/",
			image: {
				src: ticTacToeScreenshot,
				alt: "screenshot of tic tac toe website",
			},
		},
		{
			projectIdentifier: 435,
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
			projectIdentifier: 535,
			projectName: "Sign Up Form",
			projectDescription:
				"A dummy sign up form styled using Flexbox with client-side validation through css and javascript",
			techUsed: ["css", "html", "js"],
			gitHubLink: "https://github.com/MinoshkaBocarro/sign-up-form",
			liveLink: "https://minoshkabocarro.github.io/sign-up-form/",
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
