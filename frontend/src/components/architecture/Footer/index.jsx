import { Link } from "react-router-dom";
import SFooter from "./style";

export default function Footer() {
  return (
    <SFooter>
      <ul className="social">
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
      <ul>
        <li>
          <Link className="linkColor" to="gestion">
            Gestion
          </Link>
        </li>
      </ul>
    </SFooter>
  );
}
