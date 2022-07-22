import { Link } from "react-router-dom";
/* eslint-disable */
import logo from "@assets/logo.svg";
import Navbar from "@components/architecture/Navbar";
/* eslint-enable */
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <Link to="/">
        <img className="logo" src={logo} alt="Zelda" />
      </Link>
      <Navbar />
    </SHeader>
  );
}
