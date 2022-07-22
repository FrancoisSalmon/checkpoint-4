import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line
import ctxProvider from "@services/Context/Ctx";
import SGame from "./style";

export default function Game() {
  const { games } = useContext(ctxProvider);
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setGame(
      games.find((gm) => {
        return gm.id === Number(id);
      })
    );
  }, [id]);

  if (!game) return null;

  return (
    <SGame>
      <p>i'm {`${game.name}`}</p>
    </SGame>
  );
}
