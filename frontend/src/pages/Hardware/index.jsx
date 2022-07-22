import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line
import ctxProvider from "@services/Context/Ctx";
import SHardware from "./style";

export default function Hardware() {
  const { games } = useContext(ctxProvider);
  const { hardwares } = useContext(ctxProvider);
  const [hardware, setHardware] = useState({});
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setHardware(
      hardwares.find((hware) => {
        return hware.id === Number(id);
      })
    );
  }, [id]);

  useEffect(() => {
    setGame(
      games.find((gm) => {
        return gm.id === Number(id);
      })
    );
  }, [id]);

  if (!hardware) return null;
  if (!game) return null;

  return (
    <SHardware>
      <p>i'm {`${hardware.name}`}</p>
      <div>
        <ul className="visible">
          {games.map((gm) => (
            <li>
              <Link to={`/jeux/${gm.id}`}>{gm.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </SHardware>
  );
}
