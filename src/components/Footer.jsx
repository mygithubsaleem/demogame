import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
	return (
		<>
			<div>
				<Row className="game_Footer">
					<div className="col-md-6">
						<Col>Column-1</Col>
					</div>
					<div className="col-md-6">
						<Col>Column-2</Col>
					</div>
				</Row>
			</div>
		</>
	);
};
export default Footer;
