import styled from "styled-components";

export default styled.footer`
  height: 15vh;
  width: 100vw;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .social {
    display: flex;
  }

  li {
    margin: 0.8rem;
    text-transform: uppercase;
  }

  a {
    padding: 1rem;
    background-color: var(--white-opacity);
    box-shadow: var(--box-shadow);
    border-radius: 5%;
    text-decoration: none;
    color: var(--green);
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
