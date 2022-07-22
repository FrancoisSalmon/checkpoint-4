import styled from "styled-components";

export default styled.div`
  height: 85vh;
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 700px) {
    height: 100vh;
  }
`;
