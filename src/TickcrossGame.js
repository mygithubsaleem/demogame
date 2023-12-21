import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const winnerArray = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function TickcrossGame() {
	const [turn, setTurn] = useState("X");
	const [currentPlayer, setCurrentPlayer] = useState([]);

	const newplayer = (turnno) => {
		setTurn(turn === "X" ? "O" : "X");
		const player = [...currentPlayer];
		player[turnno] = turn;

		setCurrentPlayer(player);

		winnerArray.find((winMap) => {
			if (
				player[winMap[0]] === player[winMap[1]] &&
				player[winMap[1]] === player[winMap[2]] &&
				player[winMap[0]] === player[winMap[2]] &&
				player[winMap[0]] === turn
			) {
				alert("The Winner is..." + turn);
				return;
			}
		});
	};
	const reStartGame = () => {
		window.location.reload(false);
	};

	return (
		<>
			<div style={{ textAlign: "center" }}>
				<Header />

				<h1>First Player is "X" Second Player is "O"</h1>

				<div className="gameBoard">
					<div style={{ height: 20 }} />
					<button
						className="demoButton"
						onClick={() => {
							newplayer(0);
						}}
					>
						{currentPlayer[0] || "."}
					</button>
					<button
						className="demoButton"
						onClick={() => {
							newplayer(1);
						}}
					>
						{currentPlayer[1] || "."}{" "}
					</button>
					<button
						className="demoButton"
						onClick={() => {
							newplayer(2);
						}}
					>
						{currentPlayer[2] || "."}
					</button>
					<br />
					<button
						className="demoButton"
						onClick={() => {
							newplayer(3);
						}}
					>
						{currentPlayer[3] || "."}
					</button>
					<button
						className="demoButton"
						onClick={() => {
							newplayer(4);
						}}
					>
						{currentPlayer[4] || "."}
					</button>
					<button
						className="demoButton"
						onClick={() => {
							newplayer(5);
						}}
					>
						{currentPlayer[5] || "."}
					</button>
					<br />
					<button
						className="demoButton"
						onClick={() => {
							newplayer(6);
						}}
					>
						{currentPlayer[6] || "."}
					</button>
					<button
						className="demoButton"
						onClick={() => {
							newplayer(7);
						}}
					>
						{currentPlayer[7] || "."}
					</button>
					<button
						className="demoButton"
						onClick={() => {
							newplayer(8);
						}}
					>
						{currentPlayer[8] || "."}
					</button>
				</div>
				<br />
				<button
					className="startButton"
					onClick={() => {
						reStartGame();
					}}
				>
					New Game
				</button>
				<div style={{ height: 20 }} />
				{<Footer />}
			</div>
		</>
	);
}

export default TickcrossGame;
