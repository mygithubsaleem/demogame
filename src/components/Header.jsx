import React from "react";
import headerimage from "../images/logo2.png";

const Header = () => {
	return (
		<>
			<div className="game_header">
				<nav>
					<ul>
						<li>
							<img src={headerimage} width={70} height={70} />
						</li>
						<li>
							<div style={{ height: 12 }} />
							<span style={{ color: "blue", paddingLeft: 20, fontSize: 30 }}>
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
