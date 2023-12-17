import React from "react";
import headerimage from "../images/logo2.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Nav } from "react-bootstrap";
import headerstyle from "../style/gameStyle.module.css";

const Header = () => {
	return (
		<>
			<div className={headerstyle.game_header}>
				<nav>
					<ul>
						<li>
							<img src={headerimage} width={50} height={50} />
						</li>
						<li>
							<div style={{ height: 12 }} />
							<span style={{ color: "blue", paddingLeft: 20 }}>
								SHIFT Solution & Traning Institue
							</span>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
export default Header;
