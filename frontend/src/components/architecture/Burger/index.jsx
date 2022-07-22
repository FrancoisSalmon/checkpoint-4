import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
/* eslint-disable */
import ctxProvider from "@services/Context/Ctx";
/* eslint-enable */
import SBurger from "./style";

export default function Burger({ ...props }) {
  const { hardwares } = useContext(ctxProvider);

  return (
    <SBurger isOpen={props.burger} onClick={props.func}>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>
      <div>
        <ul>
          {hardwares.map((hardware) => (
            <li>
              <Link to="/console/:id">{hardware.name}</Link>
            </li>
          ))}
          <li>
            <Link className="linkColor" to="gestion">
              Gestion
            </Link>
          </li>
          <li>
            <a className="aColor" href="https://www.linkedin.com/in/f-salmon/">
              Linked In
            </a>
          </li>
          <li>
            <a className="aColor" href="https://github.com/FrancoisSalmon">
              Github
            </a>
          </li>
        </ul>
      </div>
    </SBurger>
  );
}
Burger.propTypes = {
  burger: PropTypes.bool,
  func: PropTypes.func,
};
Burger.defaultProps = {
  burger: false,
  func: () => {},
};
