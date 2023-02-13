import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [score, setScore] = useState("Love - Love");
  const checkPlay2Score = (point: number) => {
    switch (point) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
      default:
        return "";
    }
  };
  const checkScroe = (player1: number, player2: number) => {
    if (player1 >= 4 || player2 >= 4 || (player1 === 3 && player2 === 3)) {
      if (Math.abs(player1 - player2) >= 2) {
        return player1 > player2 ? "Won for player1" : "Won for player2";
      } else if (player1 === player2) {
        return "Deuce";
      } else {
        return player1 > player2
          ? "Advantage for Player1"
          : "Advantage for Player2";
      }
    } else {
      switch (player1) {
        case 0:
          return "Love - " + checkPlay2Score(player2);
        case 1:
          return "Fifteen - " + checkPlay2Score(player2);
        case 2:
          return "Thirty - " + checkPlay2Score(player2);
        case 3:
          return "Forty - " + checkPlay2Score(player2);
      }
    }
  };
  useEffect(() => {
    const result: any = checkScroe(player1Score, player2Score);
    setScore(result);
  }, [player1Score, player2Score]);
  return (
    <>
      <Head>
        <title>Tennis Game</title>
      </Head>
      <main className={styles.main}>
        <div>
          <div style={{ textAlign: "center" }}>
            <b>Tennis Game</b>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <b>Player 1 Scroe: </b>
            <input
              type="number"
              value={player1Score}
              data-testid="player1Score"
              onChange={(e) => setPlayer1Score(parseInt(e.target.value))}
            ></input>
            <b>Player 2 Scroe: </b>
            <input
              type="number"
              value={player2Score}
              data-testid="player2Score"
              onChange={(e) => setPlayer2Score(parseInt(e.target.value))}
            ></input>
          </div>
          <div
            data-testid="result"
            style={{ textAlign: "right", paddingTop: "30px" }}
          >
            Result: {score}
          </div>
        </div>
      </main>
    </>
  );
}
