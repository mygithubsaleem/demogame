import React from "react";
import headerimage from "../images/logo2.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Nav } from "react-bootstrap";
// import loginStyle from "../loginStyles/loginForm.module.css";

const Header = () => {
	return (
		<>
			<div>
				<nav>
					<ul>
						<li>
							<img src={headerimage} width={60} height={60} />
						</li>
						<li>
							<h1>
								{" "}
								<span style={{ color: "blue", paddingLeft: 20 }}>
									SHIFT Solution & Traning Institue
								</span>
							</h1>
						</li>{" "}
					</ul>
				</nav>
			</div>
		</>
	);
};
export default Header;
