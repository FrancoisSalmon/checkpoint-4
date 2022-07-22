import styled from "styled-components";

export default styled.nav`
  width: 100vw;
  font-weight: bold;
  font-size: 1.5rem;

  .visible {
    margin-top: 2.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 75vw;
  }

  a {
    text-decoration: none;
    color: var(--green);
  }

  li {
    margin: 0.8rem;
    text-transform: uppercase;
  }

  .burger {
    display: none;
  }

  @media screen and (min-width: 700px) {
    a {
      padding: 1rem;
      background-color: var(--white-opacity);
      box-shadow: var(--box-shadow);
      border-radius: 5%;
    }
  }

  @media screen and (max-width: 700px) {
    .visible {
      display: none;
    }
    .burger {
      display: block;
    }
  }
`;
