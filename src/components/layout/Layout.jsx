import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";

const starArray = [
	{ x: 1134, y: 341 },
	{ x: 1396, y: 566 },
	{ x: 305, y: 458 },
	{ x: 774, y: 572 },
	{ x: 1077, y: 480 },
	{ x: 1226, y: 324 },
	{ x: 195, y: 302 },
	{ x: 592, y: 743 },
	{ x: 932, y: 335 },
	{ x: 262, y: 689 },
	{ x: 1103, y: 209 },
	{ x: 1388, y: 246 },
	{ x: 415, y: 397 },
	{ x: 1210, y: 288 },
	{ x: 1151, y: 679 },
	{ x: 514, y: 748 },
	{ x: 227, y: 673 },
	{ x: 1273, y: 335 },
	{ x: 950, y: 592 },
	{ x: 548, y: 187 },
	{ x: 844, y: 723 },
	{ x: 1349, y: 511 },
	{ x: 851, y: 236 },
	{ x: 1141, y: 221 },
	{ x: 878, y: 147 },
	{ x: 658, y: 606 },
	{ x: 496, y: 435 },
	{ x: 1127, y: 715 },
	{ x: 737, y: 627 },
	{ x: 418, y: 487 },
	{ x: 551, y: 747 },
	{ x: 89, y: 695 },
	{ x: 1205, y: 717 },
	{ x: 1017, y: 296 },
	{ x: 621, y: 149 },
	{ x: 848, y: 160 },
	{ x: 373, y: 467 },
	{ x: 312, y: 654 },
	{ x: 184, y: 239 },
	{ x: 473, y: 763 },
	{ x: 823, y: 190 },
	{ x: 887, y: 466 },
	{ x: 22, y: 388 },
	{ x: 819, y: 377 },
	{ x: 1119, y: 273 },
	{ x: 882, y: 412 },
	{ x: 812, y: 225 },
	{ x: 469, y: 315 },
	{ x: 1384, y: 681 },
	{ x: 1005, y: 140 },
	{ x: 232, y: 190 },
	{ x: 249, y: 549 },
	{ x: 1377, y: 345 },
	{ x: 1383, y: 312 },
	{ x: 1209, y: 456 },
	{ x: 85, y: 143 },
	{ x: 388, y: 301 },
	{ x: 557, y: 401 },
	{ x: 287, y: 294 },
	{ x: 1234, y: 754 },
	{ x: 98, y: 451 },
	{ x: 551, y: 250 },
	{ x: 834, y: 629 },
	{ x: 1288, y: 686 },
	{ x: 30, y: 736 },
	{ x: 207, y: 599 },
	{ x: 100, y: 390 },
	{ x: 721, y: 777 },
	{ x: 1602, y: 755 },
	{ x: 1190, y: 592 },
	{ x: 1518, y: 309 },
	{ x: 1231, y: 592 },
	{ x: 1649, y: 290 },
	{ x: 1463, y: 267 },
	{ x: 1036, y: 281 },
	{ x: 1654, y: 415 },
	{ x: 1641, y: 702 },
	{ x: 1474, y: 350 },
	{ x: 1280, y: 160 },
	{ x: 1195, y: 146 },
	{ x: 1490, y: 689 },
	{ x: 1064, y: 194 },
	{ x: 1100, y: 196 },
];

function Layout() {
	return (
		<div id="app">
			<Header id="header" />
			<div id="app-content">
				{/* Background motif popularisation */}
				<svg className="motif" width="100%" height="100%">
					{starArray.map((coordinate, index) => (
						<text
							x={coordinate.x}
							y={coordinate.y}
							fill="#84ceebff"
							opacity="0.5"
							fontSize="20"
							fontFamily="Crimson Text"
							key={index}
						>
							✧
						</text>
					))}
				</svg>
				<Container>
					<div id="page-container">
						<Outlet />
					</div>
				</Container>
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
