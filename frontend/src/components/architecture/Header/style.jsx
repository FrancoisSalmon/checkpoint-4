import styled from "styled-components";

export default styled.header`
  height: 15vh;
  width: 100vw;
  top: 0;
  position: fixed;
  background-color: var(--white);
  display: flex;
  justify-content: center;

  .logo {
    left: 0;
    width: 50%;
    margin: 1rem;
  }

  @media screen and (min-width: 700px) {
    .logo {
      margin-top: 1rem;
      margin-left: 5rem;
    }
  }
  @media screen and (max-width: 700px) {
    height: 0vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .visible {
      display: none;
    }
    .logo {
      margin-top: 4rem;
      position: fixed;
      padding-top: 3vh;
      width: 30vw;
      display: block;
      position: relative;
    }
  }
`;
