import styled from "styled-components";

export default styled.nav`
  font-size: 1.2rem;
  ul {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    right: 0rem;
    top: 6rem;
    background-color: var(--white);
    color: var(--blue);
    opacity: 0.9;
    border-radius: 10px;
    text-align: left;
    width: 100%;
  }
  li {
    height: auto;
    margin: 0;
    padding: 0.5rem;
  }
  .hamburger {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .burger {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: var(--white);
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
  .burger1 {
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  }
  .burger2 {
    transform: ${(props) =>
      props.isOpen ? "translateX(100%)" : "translateX(0)"};
    opacity: ${(props) => (props.isOpen ? 0 : 1)};
  }
  .burger3 {
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
  .linkColor {
    color: var(--green);
    text-decoration: none;
  }
  .aColor {
    color: var(--green);
  }
  @media screen and (min-width: 700px) {
    .hamburger {
      display: none;
    }
  }
`;
