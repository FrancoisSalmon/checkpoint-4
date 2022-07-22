import { useState, useContext } from "react";
import { Link } from "react-router-dom";
/* eslint-disable */
import Burger from "@components/architecture/Burger";
import ctxProvider from "@services/Context/Ctx";
/* eslint-enable */
import SNavbar from "./style";

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };
  const { hardwares } = useContext(ctxProvider);

  return (
    <SNavbar>
      <Burger className="burger" burger={burgerOpen} func={toggleBurger} />
      <div>
        <ul className="visible">
          {hardwares.map((hardware) => (
            <li>
              <Link to={`/console/${hardware.id}`}>{hardware.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </SNavbar>
  );
}
